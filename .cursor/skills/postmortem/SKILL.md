---
name: postmortem
description: Converts repeated visual, prompt, tool, and QA failures into small targeted improvements to rules, skills, scripts, and registries while pruning stale instructions.
disable-model-invocation: true
---
# Postmortem

Create a dated file under `docs/postmortems/`.

Review:

- intended versus actual visual quality;
- whether visual routes were genuinely different;
- which MCPs/tools were actually called;
- whether imported components improved or diluted the direction;
- which real assets were missing;
- what the visual judge rejected;
- what escaped technical QA;
- which instruction caused safe, repetitive, or overexplained output.

Update a rule only for recurring non-procedural standards. Update a skill for reusable workflow judgment. Add a deterministic script for measurable failures. Remove stale or conflicting instructions.

The operating system should become smaller and sharper, not merely larger.
