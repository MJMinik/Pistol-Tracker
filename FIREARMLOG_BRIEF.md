# FirearmLog — Project Brief (Handoff Document)

**Created June 11, 2026.** This file carries everything needed to start the FirearmLog project in a fresh session. First instruction to Claude in the new session: read this file completely, then write `FIREARMLOG_SPEC.md`.

---

## Goal Statement

FirearmLog is a commercial-quality training, competition, and maintenance log for all firearm users — pistol, rifle, shotgun, PCC, and every discipline used in competitive shooting. It is mobile-first (iOS and Android), fully usable on desktop, and strictly Apple HIG-compliant. It speaks plain range language, not computer language. It keeps the shooter's data portable and consistent across devices, imports from PractiScore, USPSA/IDPA, CSV, and the Kestrel KST1000 shot timer, and migrates all existing Pistol Tracker data without loss. Built orthogonally and DRY per professional best practice (The Pragmatic Programmer).

## Decisions Already Made (June 11, 2026)

1. **Name:** FirearmLog. Michael owns the name and the domain. Necessary commercial conditions are met.
2. **Ship as a high-quality web app / PWA first**, with the architecture deliberately ready to wrap with Capacitor for App Store / Play Store later. Michael already has BOTH an Apple Developer account and a Google Play account.
3. **Data: local-first, no server, no accounts.** Michael explicitly wants to avoid real cost, privacy liability, and ongoing maintenance. Sync between phone and desktop is file-based (one-tap push/pull of a single data file via iCloud Drive / Files app). Design the data layer so a cloud-sync service could be added later without rewriting.
4. **Mobile bias:** whenever a compromise must be made, mobile wins. Runs on iOS and Android.
5. **The PROPOSE → OK → PROCEED rule is retired.** Claude does the work the best way it can. Other working rules below still apply.

## Owner / Working Rules

Michael (mjminik@mac.com) — **not a programmer.** Rules carried over from Pistol Tracker:

1. Ask clarifying questions before writing code when scope is genuinely unclear.
2. Present options when there are meaningful tradeoffs, with a recommendation — don't just ask.
3. Explain plans in plain English.
4. Iterate until Michael explicitly says he is satisfied.
5. Build incrementally in testable chunks; give explicit testing instructions after every push (which section, what changed, what to tap, Phone or Desktop or both). "Tap," not "Click."
6. Number all options and discussion points so Michael can refer back by number.
7. Don't soften disagreement. Direct opinions when asked.
8. Phone (iPhone) is the principal device.

## Requirements (from Michael, June 11, 2026 — no priority order)

### Platform & Architecture
1. Usable on desktop and mobile; mobile-first bias; iOS and Android.
2. Written orthogonally and DRY (The Pragmatic Programmer); all academic and professional best practices considered.
3. Full Apple HIG compliance. UI/UX is critically important.
4. Screen efficiency matters — e.g., on mobile show a "Search" button that opens the full search, rather than a full search bar consuming the top of the screen.
5. Michael likes the overall navigation of the existing app, but Claude should think through the best navigation model for this program rather than copying it.

### Scope — All Firearm Types
6. All firearm users: pistols, rifles, shotguns, and any other category used in competitive shooting (PCC, etc.).
7. Reference section: rename "Atlas Reference" → "Reference." Add reference materials for the 5 most popular pistol, rifle, and shotgun manufacturers, same treatment as Atlas. A reference can be linked to a firearm so the manufacturer's maintenance schedule is automatically associated with it; user can customize at the gun level, but the default is the manufacturer recommendation.

### Data & Portability
8. Keep all of Michael's existing Pistol Tracker data — migrate localStorage (`pistolTrackerV1`) + IndexedDB images without loss.
9. Import/export designed to keep data consistent between phone and desktop (see Decision 3).
10. CSV importers are important — people will move data from existing software; make that easy.
11. Import competition data from USPSA, IDPA, and PractiScore where they offer exportable data.
12. Shot timer support: receive downloadable data from shot timers; initially the Kestrel KST1000.

### Sessions
13. Sessions always editable after the fact — view or change notes or anything else.
14. Session reports available, including appropriately sized images.
15. Videos displayed in reports using thumbnails.
16. A malfunctions report is needed.
17. Multiple drills per session, always.
18. Drill pickers are context-aware: filtered by the firearm's category AND dry-fire vs. live-fire (e.g., working an Erebus dry shows only Pistol/Dry-Fire drills).

### Drills & Targets
19. When adding a drill, user specifies gun category and dry/live fire.
20. Drills have a brief description plus a clickable expanded description.
21. Targets (when applicable) printable from the drill AND from a separate section so users can print targets before going to the range.

### Progress & Analysis
22. Charts, tables, graphs etc. searchable/filterable by date range, firearm category, and firearm. Claude decides the best defaults.
23. Information in charts, toasts, and lists is clickable/drillable — e.g., tapping a malfunction shown on a session opens that malfunction's detail.
24. Calendar: tapping a day box opens that session. Matches and competitions appear in the calendar.
25. Trends — "Live Fire Rounds Over Time" can show individual guns and categories of guns.
26. Goals: create multiple goals without leaving the page between entries; goals are editable.

### Competition
27. Highly functional for competitive shooters; expand the competition section as appropriate. Include USPSA and IDPA matches and match types. Consider what data competitive shooters want and how they want to see it (e.g., many record runs with GoPros — think video).

### Costs
28. Costs/purchases must know about match fees and range fees so nothing is double-counted.

### Media
29. All images stored in the app are namable and annotatable.

### Help & Language
30. Help includes an exhaustive tour showing most of the program's capabilities.
31. Common language everywhere — written for "gun guys," no computer terminology, in Help, tooltips, labels, prompts, etc.

### Reports
32. Reports are important. Claude creates and makes available the reports it considers most beneficial.

## Existing App (source material)

- Live: https://mjminik.github.io/Pistol-Tracker/ — final version v1.9.74, tests 42/0/0
- Old project folder: `/Volumes/Black Drive 2/Claude Projects/Pistol Maintenance and Practice/Pistol Practice and Maintenance/` — `index.html` (~9,800 lines, single-file vanilla JS), `tests.html`, `PROJECT_NOTES.md` (full history), `HIG_AUDIT_ROUND2.md` (known remaining issues F7–F12, R-, T-, W-, V-, P-, X-series — useful as a "don't repeat these mistakes" checklist)
- Data lives in browser localStorage key `pistolTrackerV1` + IndexedDB image store; Settings → Download JSON Backup produces the export file the migration importer must accept
- Michael's firearms: Atlas Erebus, Atlas Apollo, Atlas Eos (9mm, Atlas Gunworks), Staccato XC (9mm), Remington 870 (shotgun), Glock 47 Gen 5. USPSA Carry Optics, C class working toward B. Training since January 2025.

## First Tasks In the New Session

1. Read this file completely.
2. Write `FIREARMLOG_SPEC.md` — full PRD: every requirement above organized and numbered, architecture, navigation model, data model (including Pistol Tracker migration), and milestone build order.
3. Michael reviews and corrects the spec before any code is written.
