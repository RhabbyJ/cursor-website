---
name: sheets-powered
description: Designs and implements a secure Google Sheets-backed website or convincing front-end demonstration with typed data, validation, freshness, fallback, and visible operational value.
paths:
  - "**/*.{ts,tsx,js,jsx,md,mdx}"
---
# Sheets-Powered Experience

## Production architecture

- Keep credentials and privileged calls server-side.
- Map Sheet rows into validated domain objects in one adapter.
- Define caching/revalidation, malformed-row behavior, time zones, duplicate IDs, empty values, and upstream fallback.
- Expose useful diagnostics without secrets.

## Marketing demonstration

Show the cause and effect:

```text
staff edit → validation → publication → customer view
```

A front-end demo should let a visitor change a realistic value, see validation accept or reject it, and see the customer-facing preview update. Label it as a demonstration rather than implying a live client Sheet.

The visual treatment should match the selected route; do not default to a tiny spreadsheet inside a bordered card.
