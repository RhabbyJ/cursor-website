---
name: ai-product-experience
description: Designs and implements an AI-enabled web product or product demonstration with clear inputs, outputs, trust boundaries, failure states, and human control. Use for tools like HarnessMate rather than ordinary brochure sites.
paths:
  - "**/*.{ts,tsx,js,jsx,md,mdx}"
---
# AI Product Experience

Treat the AI capability as a product workflow, not a magic textarea.

## Required product surface

- Clear task and intended user
- Guided input with examples and constraints
- Visible processing/progress state when latency is non-trivial
- Structured output that supports the user's next action
- Edit, retry, compare, export, or human-approval path as appropriate
- Empty, validation, timeout, service failure, safety refusal, and partial-result states
- Clear handling of confidential or sensitive data
- Honest description of limitations and what the user must verify

## Marketing connection

The public website should show the workflow and artifact produced. Prefer a safe interactive demo or realistic labeled sample over abstract AI imagery.

## Engineering

Keep provider/model calls server-side. Validate inputs and outputs. Add timeouts and observability. Avoid coupling presentation directly to one provider's raw response format.
