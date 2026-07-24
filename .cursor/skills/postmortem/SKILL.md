---
name: postmortem
description: Turns lessons from a completed website build, QA cycle, or launch into targeted improvements to rules, skills, scripts, tests, and the internal registry. Use after launch or when the same agent mistake recurs.
disable-model-invocation: true
---
# Website Build Postmortem

Create a dated file under `docs/postmortems/`.

## Review

- What outcome was requested and what shipped?
- Which prompts or handoffs created ambiguity?
- Which visual or technical decisions worked especially well?
- What defects escaped until browser QA or production?
- What work was repeated manually?
- What component or adapter deserves promotion?
- What instruction was missing, vague, or counterproductive?

## Improvement rule

- Add or change a rule only for a recurring, high-cost mistake.
- Add a skill when reusable judgment/workflow is needed.
- Add a script/test/hook when deterministic enforcement is possible.
- Add a subagent only when context isolation, independent verification, or parallel work is valuable.
- Delete stale instructions. Do not let the operating system grow without pruning.

End with a small set of concrete repository changes and implement the safe, high-confidence ones.
