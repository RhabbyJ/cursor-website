# New Site Master Prompt

Use this after completing `PROJECT_BRIEF.md`.

```text
/build-web-experience

Build this new web experience from scratch.

The active project prompt and PROJECT_BRIEF.md are authoritative. The Website
Design OS supplies process and quality standards, but it must not impose a
house style or reuse a prior project's visual direction.

First inspect:
- PROJECT_BRIEF.md;
- real assets and references;
- framework and package manager;
- enabled MCPs and registries;
- available licenses;
- functional requirements.

Follow the design mode specified in the brief:
- directed: implement the supplied visual target faithfully;
- explore: build compact, materially different concept routes and stop for selection;
- autonomous: explore internally, use the visual critic to select the strongest rendered route, then continue.

Use component and animation tools as raw materials. Search and preview relevant
navigation, background, hero, section, and interaction candidates when useful,
but do not assemble a page from unrelated demo components.

Do not translate every requirement into a separate section. Build the strongest
user narrative, combine related ideas, and let different content types use
different compositions.

Use real proof and real product assets. Generated art may support the brand but
must not impersonate real project evidence.

After the visual direction is established:
1. implement the complete experience;
2. add purposeful motion;
3. inspect it in the browser at target widths;
4. run screenshot-first visual critique;
5. correct the findings;
6. run accessibility, runtime, lint, typecheck, tests, and build checks;
7. report remaining placeholders and unverified behavior honestly.
```
