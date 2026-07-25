---
name: ai-product-experience
description: Designs an AI-enabled product workflow or product demonstration with clear input, structured output, trust boundaries, failure states, and human control.
paths:
  - "**/*.{ts,tsx,js,jsx,md,mdx}"
---
# AI Product Experience

Treat AI as a task workflow, not a decorative chat box.

Show:

- intended user and job;
- constrained input;
- processing or progress when meaningful;
- structured output;
- next action such as compare, edit, approve, export, or retry;
- empty, invalid, timeout, partial, and service-failure states;
- privacy and human verification where relevant.

Marketing pages should demonstrate a real task and artifact. Avoid abstract “AI capability” grids and generic glowing chatbot mockups.

Keep provider calls server-side and validate both inputs and structured outputs.
