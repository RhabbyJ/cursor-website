const { chromium } = require("playwright");
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
    sheets: {},
    form: {},
    nav: {},
  };

  const viewports = [
    { name: "narrow-320", width: 320, height: 720 },
    { name: "mobile-390", width: 390, height: 844 },
    { name: "tablet-768", width: 768, height: 1024 },
    { name: "laptop-1280", width: 1280, height: 800 },
    { name: "desktop-1440", width: 1440, height: 900 },
    { name: "wide-1728", width: 1728, height: 1080 },
  ];

  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
    });
    const page = await context.newPage();
    const consoleErrors = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") consoleErrors.push(msg.text());
    });
    page.on("pageerror", (err) => results.pageErrors.push(`${vp.name}: ${err}`));
    page.on("requestfailed", (req) => {
      if (!req.url().includes("fonts.googleapis")) {
        results.failedRequests.push(`${vp.name}: ${req.url()}`);
      }
    });

    await page.goto("http://localhost:3000", {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });
    await page.waitForTimeout(1200);
    await page.screenshot({
      path: path.join(outDir, `${vp.name}-hero.png`),
      fullPage: false,
    });
    results.viewports.push({
      name: vp.name,
      h1: await page.locator("h1").first().innerText(),
      sectionIds: await page.locator("main section[id]").evaluateAll((els) =>
        els.map((el) => el.id),
      ),
      consoleErrors,
    });
    results.consoleErrors.push(...consoleErrors.map((e) => `${vp.name}: ${e}`));
    await context.close();
  }

  {
    const context = await browser.newContext({
      viewport: { width: 1280, height: 900 },
    });
    const page = await context.newPage();
    await page.goto("http://localhost:3000/#sheets", {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });
    const price = page.getByLabel("Price for Broken Row");
    await price.fill("12");
    await page.waitForTimeout(300);
    results.sheets.brokenBecomesValid = await page
      .getByRole("status")
      .filter({ hasText: "All active rows valid" })
      .isVisible();
    await price.fill("abc");
    await page.waitForTimeout(300);
    results.sheets.invalidBlocked = await page
      .getByRole("status")
      .filter({ hasText: "invalid row" })
      .isVisible();
    await page.screenshot({
      path: path.join(outDir, "sheets-demo.png"),
      fullPage: false,
    });
    await context.close();
  }

  {
    const context = await browser.newContext({
      viewport: { width: 1280, height: 900 },
    });
    const page = await context.newPage();
    await page.goto("http://localhost:3000/#consult", {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });
    await page.getByRole("button", { name: "Request consultation" }).click();
    results.form.clientValidationVisible = await page
      .locator("#error-name")
      .isVisible()
      .catch(() => false);
    // Server returns field errors even if empty submit from client without local validate
    await page.locator("#field-name").fill("Jordan Lee");
    await page.locator("#field-business").fill("Harbor Bar");
    await page.locator("#field-email").fill("jordan@example.com");
    await page
      .locator("#field-projectType")
      .selectOption("Connected / Sheets-powered site");
    await page
      .locator("#field-message")
      .fill("Need a sheets-powered menu site.");
    await page.getByRole("button", { name: "Request consultation" }).click();
    await page.waitForTimeout(800);
    results.form.success = await page
      .getByText("Request received")
      .isVisible()
      .catch(() => false);
    await page.screenshot({
      path: path.join(outDir, "consult-success.png"),
      fullPage: false,
    });
    await context.close();
  }

  {
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
    });
    const page = await context.newPage();
    await page.goto("http://localhost:3000", {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });
    await page.getByRole("button", { name: "Open menu" }).click();
    results.nav.mobileOpen = await page.locator("#mobile-nav").isVisible();
    results.nav.desktopHiddenOnMobile = !(await page
      .getByRole("navigation", { name: "Primary" })
      .isVisible());
    await page.keyboard.press("Escape");
    await page.waitForTimeout(200);
    results.nav.escapeCloses = !(await page.locator("#mobile-nav").isVisible());
    await context.close();
  }

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
    await page.goto("http://localhost:3000", {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });
    results.reducedMotion = {
      h1: await page.locator("h1").innerText(),
      consoleErrors,
    };
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
