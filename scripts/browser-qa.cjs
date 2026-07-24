const { chromium, devices } = require("playwright");
const fs = require("fs");
const path = require("path");

async function main() {
  const outDir = path.join(process.cwd(), "docs", "qa-artifacts");
  fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const results = {
    consoleErrors: [],
    pageErrors: [],
    failedRequests: [],
    viewports: [],
    form: {},
    keyboard: {},
    reducedMotion: {},
  };

  const viewports = [
    { name: "mobile-375", width: 375, height: 812 },
    { name: "tablet-768", width: 768, height: 1024 },
    { name: "laptop-1280", width: 1280, height: 800 },
    { name: "wide-1536", width: 1536, height: 960 },
  ];

  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
    });
    const page = await context.newPage();
    const consoleErrors = [];
    const pageErrors = [];
    const failedRequests = [];

    page.on("console", (msg) => {
      if (msg.type() === "error") consoleErrors.push(msg.text());
    });
    page.on("pageerror", (err) => pageErrors.push(String(err)));
    page.on("requestfailed", (req) =>
      failedRequests.push(`${req.failure()?.errorText || "fail"} ${req.url()}`),
    );

    await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
    await page.waitForTimeout(600);
    await page.screenshot({
      path: path.join(outDir, `${vp.name}-hero.png`),
      fullPage: false,
    });
    await page.screenshot({
      path: path.join(outDir, `${vp.name}-full.png`),
      fullPage: true,
    });

    results.viewports.push({
      ...vp,
      title: await page.title(),
      h1: await page.locator("h1").first().innerText(),
      sections: await page.locator("main section[id]").evaluateAll((els) =>
        els.map((el) => el.id),
      ),
      consoleErrors,
      pageErrors,
      failedRequests,
    });
    results.consoleErrors.push(...consoleErrors.map((e) => `${vp.name}: ${e}`));
    results.pageErrors.push(...pageErrors.map((e) => `${vp.name}: ${e}`));
    results.failedRequests.push(
      ...failedRequests.map((e) => `${vp.name}: ${e}`),
    );
    await context.close();
  }

  // Form validation + keyboard
  {
    const context = await browser.newContext({
      viewport: { width: 1280, height: 800 },
    });
    const page = await context.newPage();
    await page.goto("http://localhost:3000/#consult", {
      waitUntil: "networkidle",
    });
    await page.getByRole("button", { name: "Request consultation" }).click();
    results.form.showsNameError = await page
      .locator("#error-name")
      .isVisible();
    results.form.showsEmailError = await page
      .locator("#error-email")
      .isVisible();
    await page.locator("#field-name").fill("Jordan Lee");
    await page.locator("#field-business").fill("Harbor Bar");
    await page.locator("#field-email").fill("jordan@example.com");
    await page.locator("#field-projectType").selectOption("Sheets-powered site");
    await page
      .locator("#field-message")
      .fill("Need a sheets-powered menu and events site.");

    // Keyboard focus visibility check
    await page.keyboard.press("Tab");
    const activeTag = await page.evaluate(() => document.activeElement?.tagName);
    results.keyboard.activeAfterTab = activeTag;

    await page.screenshot({
      path: path.join(outDir, "consult-validated.png"),
      fullPage: false,
    });
    await context.close();
  }

  // Reduced motion
  {
    const context = await browser.newContext({
      viewport: { width: 1280, height: 800 },
      reducedMotion: "reduce",
    });
    const page = await context.newPage();
    const consoleErrors = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") consoleErrors.push(msg.text());
    });
    await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
    await page.screenshot({
      path: path.join(outDir, "reduced-motion-hero.png"),
      fullPage: false,
    });
    results.reducedMotion.consoleErrors = consoleErrors;
    results.reducedMotion.h1 = await page.locator("h1").innerText();
    await context.close();
  }

  // Mobile menu
  {
    const context = await browser.newContext({
      viewport: { width: 375, height: 812 },
    });
    const page = await context.newPage();
    await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
    await page.getByRole("button", { name: "Open menu" }).click();
    results.keyboard.mobileMenuOpen = await page
      .locator("#mobile-nav")
      .isVisible();
    await page.screenshot({
      path: path.join(outDir, "mobile-menu-open.png"),
      fullPage: false,
    });
    await page.keyboard.press("Escape");
    await page.waitForTimeout(200);
    results.keyboard.mobileMenuClosedOnEscape = !(await page
      .locator("#mobile-nav")
      .isVisible());
    await context.close();
  }

  fs.writeFileSync(
    path.join(outDir, "qa-results.json"),
    JSON.stringify(results, null, 2),
  );
  console.log(JSON.stringify(results, null, 2));
  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
