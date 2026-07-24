---
name: sheets-powered
description: Designs and implements a Google Sheets-backed website experience with typed adapters, secure credentials, caching/freshness, fallbacks, and visible operational value. Use for menus, events, hours, listings, inventory, schedules, pricing, or other client-managed data.
paths:
  - "**/*.{ts,tsx,js,jsx,md,mdx}"
---
# Sheets-Powered Experience

## Architecture

1. Keep Google credentials and privileged API calls on the server.
2. Centralize source-column mapping in one adapter.
3. Validate rows into stable domain objects before rendering.
4. Define caching/revalidation and a safe stale-data fallback.
5. Handle blank rows, malformed values, duplicate IDs, date/time zones, missing media, and upstream failure.
6. Expose diagnostics without leaking secrets.

## Experience

Make the operational benefit visible and truthful:

- show the live data itself where useful;
- add a subtle “updated” or “last synced” signal when freshness matters;
- explain the admin workflow in a capability or case-study section: update the sheet, validation occurs, and the site refreshes according to the configured policy;
- do not claim real-time updates unless they are actually real-time;
- distinguish demonstration data from production data.

## Typical domain mappings

- Hospitality: menu, specials, events, hours, private-booking inventory.
- Real estate: listings, status, pricing, open homes, agent assignments, document links.
- Service operations: schedules, availability, packages, FAQs, resources.

The UI should depend on domain objects such as `Event`, `MenuItem`, or `Listing`, not spreadsheet cell coordinates.
