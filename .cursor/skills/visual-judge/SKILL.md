---
name: visual-judge
description: Runs an independent screenshot-first visual evaluation and rejects generic, austere, repetitive, or placeholder-heavy marketing work even when requirements and tests pass.
disable-model-invocation: true
---
# Visual Judge Workflow

Use `/visual-judge` as an independent read-only reviewer.

## Evidence order

1. Actual desktop screenshot.
2. Actual mobile screenshot.
3. Short interaction recording or observed motion when available.
4. Only then read the brief and design rationale.

Write `docs/visual-judge.md` with all ten category scores, overall score, strongest decision, three highest-leverage failures, and a pass/fail verdict.

For design ambition 7+, passing requires at least 8.0 overall and no category below 7.

A requirements checklist, build success, many components, or complex code cannot raise the visual score. Placeholder portfolio proof blocks final approval.
