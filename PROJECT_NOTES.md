# Pistol Tracker — Project Notes

## End-of-Session Rule — MANDATORY
At the end of every session, Claude must update PROJECT_NOTES.md and RESUME_SESSION.md. After writing, Claude must read back the version number and current status to confirm the write succeeded before telling Michael it's done. If the files cannot be found or written, Claude must say so immediately — do not say the update is complete when it isn't.

---

## Quick-Start for Future Claude Sessions

Paste this at the start of any new session to resume work:

> "I have a pistol practice and maintenance tracker app saved at `/Volumes/Black Drive 2/Claude Projects/Pistol Maintenance and Practice/Pistol Practice and Maintenance/index.html`. Please read that file and the PROJECT_NOTES.md in the same folder to get up to speed, then help me with the following..."

---

## About the App

A single-file HTML/JS app (`index.html`) that runs entirely in the browser with no server or account required. All data is stored in the browser's **localStorage**. The app is also a **PWA** (Progressive Web App) — it can be installed to iPhone/iPad home screen and runs offline.

**Owner:** Michael (mjminik@mac.com)  
**Dog:** Chelsea  
**Training started:** January 2025  
**Current version:** v1.9.63  
**Competition:** USPSA Carry Optics / Minor power factor. Current classification: C class, working toward B.  
**Home range:** SoCal Practical Shooters, Angeles Shooting Ranges, Sylmar CA  
**Magazine labels:** A01–A12 (Erebus/Apollo pool), other pools follow same zero-padded convention (28 total)

---

## Firearms Tracked

| Name | Manufacturer |
|---|---|
| Atlas Erebus | Atlas Gunworks | 9mm | Trijicon SRO |
| Atlas Apollo | Atlas Gunworks | 9mm | Trijicon SRO |
| Atlas Eos | Atlas Gunworks | 9mm | Trijicon RMR HD |
| Staccato XC | Staccato | 9mm | Trijicon RMR HD |
| Remington 870 | Remington | Shotgun | — |
| Glock 47 Gen 5 | Glock | 9mm | — |

---

## Version History

| Version | What Was Added |
|---|---|
| v1.0 | Foundation: firearms, ammo inventory, sessions, maintenance, dashboard |
| v1.1 | Malfunctions module, dry-fire & no-holster drill categories, expanded drill library |
| v1.2 | Recoil spring tracker (interval + weight), magazine spring 6-month reminder, field strip button on Sessions page |
| v1.3 | Competition module: USPSA matches, classifiers, classification tracking, stage performance chart |
| v1.4 | Costs module (session ammo costs, range fees, gear/purchase log, cost dashboard); Help section; match round count field; full code documentation and data model comments; Dot Torture drill dedup; PWA/mobile support (responsive layout, manifest.json, sw.js, icons) |
| v1.5 | Auto-backup nudge on dashboard (30-day reminder with snooze); Sessions search & filter bar (date range, firearm, type, keyword); Training frequency heatmap calendar in Progress → Calendar tab (52-week grid, monthly bars, stats); Help section updated to document all three new features |
| v1.6 | iCloud Sync: dedicated Export Sync File / Import Sync File workflow using fixed filename (pistol-tracker-sync.json); sync card in Settings with step-by-step instructions; ↑ quick-sync button in mobile header; last exported/imported dates tracked; Help section updated |
| v1.7 | Optics & Gear section (new nav item): track sights with zero dist, mount height, torque spec, dot size, settings snapshot, and battery change log with ~11-month warning; Spare Parts inventory table; Barrel tracking fields on Firearm cards (name, install date, rounds since install); Multi-firearm sessions (checkbox toggle splits rounds per gun, firearmRoundCount aggregates splits for correct maintenance tracking); PractiScore link on match cards; Stage Timeline chart in Competition; HHF lookup link on classifiers; Trend alerts on Dashboard (training gap + fundamentals dip); Light/dark mode (CSS variables + toggle button in sidebar, choice persisted); Keyboard shortcuts (S/M/D/?/Esc); App Tour (12-step guided walkthrough, replayable from Help); Inline session note editing (click notes area on session card to edit in place) |
| v1.8.1 | Contextual help (? button all 13 sections), tooltips (ⓘ icons desktop+mobile), non-Atlas maintenance schedule, search/filter on Malfunctions+Competition, insurance documentation (serial number+photos+print), collapsible magazine groups, Help section search, global search sidebar, bug fixes (TRASH_TTL_DAYS, orphaned ammo SKUs, magazine checkbox layout, session count for multi-firearm sessions) |
| v1.8.2 | Images moved from localStorage to IndexedDB (permanently fixes localStorage full error); export/import/auto-sync updated to inline images in backups; one-time migration moves existing photos automatically; lightbox UX: ✕ close button, Annotate moved top-left, hint text, swipe-down to close on mobile; session editor thumbnails clickable to preview full size |
| v1.9 | Apple HIG UI Audit begun. 122 issues identified across Groups A (CSS/single-line), B (behavior), C (structural). Groups A and B fully complete. |
| v1.9.1–v1.9.21 | Group A complete: touch targets, typography scale, ALL CAPS labels, stat card sentence case, border radius, spacing, color consistency, action sheet replacements, table horizontal scroll on mobile, Competition tabs scroll. Group B complete: all window.confirm() replaced with custom action sheets, table overflow fixes. |
| v1.9.22–v1.9.27 | Group C started: #90 RangeReady labels, #98 annotation tool theme, #70 Competition tabs (v1.9.24–26). Annotation circle sizing and touchend fix (v1.9.25–26). Annotate button persistence fix (v1.9.27). |
| v1.9.28–v1.9.33 | #17 Session Type dropdown → segmented control with description line (v1.9.28). #18 All checkboxes → iOS toggle switches in 4 locations: mg-active, ms-annual, se-multi-fw, se-mag-toggle (v1.9.29–33). Fixed ms-annual specificity bug by switching wrapper from label to div. |
| v1.9.34 | #10 Empty states: all 5 main sections updated to consistent icon + headline + action button pattern (Optics, Goals, Assessments, PRs, Maintenance). |
| v1.9.35 | Bug fix: Firearms page horizontal overflow. Added overflow-x:hidden to .card globally. Non-Atlas maintenance schedule row restructured to flex-wrap. |
| v1.9.36 | #5 Log Session modal section grouping: added "Details" section header before Location/Range Fee/Distances/Holster; moved Total Rounds into Ammunition section. |
| v1.9.38 | #5 confirmed on device. Log Session "Details" label fix. |
| v1.9.40 | #9/#75/#89 chart x-axis date labels moved out of SVG into HTML row below each chart (reliable on iOS). SVG y-axis and legend font sizes increased. |
| v1.9.43 | #38 Heatmap: always use larger cells (16px, gap 3px), Mon/Wed/Fri labels. Removed unreliable isMobile conditional. |
| v1.9.44 | #82 Match modal section grouping: Location/Firearm now form-grid-2 (separated from Cost/Rounds). Added Logistics, Stages, Final Results, Details section headers. |
| v1.9.45 | #84 Classifier datalist: datalist option values now include name ("99-11 — The Roundabout") so names show on iOS. Added 03-01 Safe and Sound, 06-06 Stop Plates, 09-07 Red Baron, 99-08 Accelerator to CLASSIFIER_DATABASE. classifierDefByCode strips " — Name" suffix. saveClassifier strips name suffix before saving. Added Scoring + Hit Breakdown section headers. |
| v1.9.46 | #123 iOS auto-zoom fix: .form-row input/select/textarea font-size bumped from 13px to 16px (iOS zooms on focus for any input < 16px). |
| v1.9.47 | #122 Magazine group header: h3 now wraps (min-width:0, word-break:break-word). Flex container changed to align-items:flex-start with gap. Toggle "▶/▼" pins top-right. |
| v1.9.48 | Magazine groups default to collapsed. Toggle logic inverted: undefined = collapsed, false = expanded. |
| v1.9.49 | Removed overflow-x:hidden from .card global CSS (was blocking iOS table scroll). Flex-wrap on maintenance schedule row (v1.9.35) handles the original overflow without card-level clip. |
| v1.9.50 | Magazine table row actions: Edit + ⋯ menu (replaces Edit + Log Spring + Delete). showMagActions() shows action sheet with Log Spring Replacement + Delete. |
| v1.9.51 | .row-actions changed from flex-wrap:wrap to flex-wrap:nowrap (prevents button stacking in all tables). Magazine table min-width increased from 540px to 620px. |
| v1.9.52 | #13 Print report header/footer; Your Name field in Settings. |
| v1.9.53 | #120 Help section emoji fixes (🔀 Multi-Firearm, ✨ UI Features). |
| v1.9.54 | #101 Accessibility: aria-label on all icon-only buttons (47 total). *(Recovered from git log — was not recorded in notes at the time.)* |
| v1.9.55 | #102 Accessibility: modal role=dialog, aria-modal, aria-labelledby, focus management. |
| v1.9.56 | #103 Accessibility: role=img + aria-label on all 12 SVG charts. |
| v1.9.57–58 | #124 Badge text color contrast (WCAG AA variables); overflow-x:hidden on main fixes horizontal drift on mobile. |
| v1.9.59 | #105 Modal focus trap + return focus to trigger element on close. |
| v1.9.60 | #104 Accessibility: toast is an aria-live="polite"/role="status" region created at page load; VoiceOver announces all toast messages; text cleared after fade. |
| v1.9.61 | #104 Accessibility: sidebar nav links are real links (href + preventDefault), keyboard focusable, Enter-activatable, aria-current="page" on active section. All tab rows (Firearms, Costs, Progress, Competition) get role=tablist/tab, tabindex=0, aria-selected kept in sync; global Enter/Space key handler activates tabs; focus-visible outline on tabs and nav. |
| v1.9.62 | #104 Accessibility: aria-expanded on all collapsibles — Help accordions, section ? help buttons, magazine group headers (now also keyboard-operable via role=button + Enter/Space), match Stage Breakdown, maintenance Atlas-recommended steps, Recently Deleted card. |
| v1.9.63 | #104 Accessibility: @media (prefers-reduced-motion: reduce) disables animations/transitions app-wide; alt text on insurance photos (cards + print record), lightbox, and annotation images; focus-visible ring on iOS toggle switches. |
| v1.8 | Auto-sync via File System Access API (Settings → iCloud Sync, "Set Up Auto-Sync" button; persists across browser restarts via IndexedDB; debounced writes on every saveDB; auto-reads remote on app load if newer); Range Fee category routing (purchases with category "Range Fee" now flow into Range Fees bucket in Costs, not Gear & Purchases); Field strip reminders exclude dry-fire sessions (only practice/competition/class trigger the prompt and "needs field strip" alerts); Ammo SKU consolidation (Ammunition page → "↻ Consolidate Duplicates" button merges rows with matching brand/caliber/grain/bullet-type, sums quantities, repoints session/malfunction/purchase references); FIFO ammo costing (per-session cost/round derived from purchase ledger in date order — each round consumes the oldest unspent lot of that SKU; new Ammunition Cost/round column shows weighted avg of remaining lots; session cards show per-session cost/round + total $; replaces flat costPerRound for cost calculations); Purchase modal Ammo-Purchase fields (Rounds + Linked Ammo SKU + optional auto-add to can inventory); Doubles 5yd / Doubles 7yd drills added to library; one-time migration `rename-dot-torture-and-press-out-to-doubles-5yd-2026-05` renames existing session drill entries (tracked via DB.settings.migrationsRun) |

---

## Architecture

- **Single file:** `index.html` — all HTML, CSS, and JavaScript in one file (~4,850 lines as of v1.7)
- **No framework:** Vanilla JS, no dependencies, no build step
- **Storage:** Browser `localStorage` under key `pistolTrackerV1`
- **Data model:** See the `/* DATA MODEL OVERVIEW */` comment block near the top of the JS in `index.html`

### Key data collections in `DB`:
- `DB.firearms[]` — your four guns
- `DB.ammunition[]` — ammo inventory with optional cost/round
- `DB.sessions[]` — range sessions (drills, ammo usage, self-ratings, target images, range fee)
- `DB.maintenance[]` — field strips, deep cleans, annual inspections, recoil springs, mag springs
- `DB.malfunctions[]` — standalone malfunction records (also embedded inside sessions)
- `DB.matches[]` — competition matches with stage-level data and cost
- `DB.classifiers[]` — USPSA classifiers with auto-calculated HF and %
- `DB.purchases[]` — gear/equipment/expense log
- `DB.goals[]` — training goals with achieved status
- `DB.skillAssessments[]` — periodic skill snapshots (8 skill areas, 1–10 scale)
- `DB.drillLibrary[]` — drill definitions used in session logging
- `DB.optics[]` — optic records with batteryLog[], settings snapshot, zero/mount/torque fields
- `DB.parts[]` — spare parts inventory (name, qty, partNumber, firearmId, datePurchased)
- `DB.settings{}` — app-level settings (includes `theme: 'dark'|'light'`)

---

## App Sections (Sidebar)

| Section | Purpose |
|---|---|
| Dashboard | Summary stats, alerts, recent sessions, top PRs, firearm status |
| Firearms | Registry with round counts, recoil spring tracking, barrel tracking, maintenance status |
| Optics | Optic registry (zero, mount, torque, settings, battery log); spare parts inventory |
| Ammunition | Inventory with auto-decrement on session save; optional cost/round |
| Sessions | Practice/competition/class/dry-fire log with drills, ammo, images, notes |
| Progress | Personal records, goals, skill assessments, trend charts |
| Competition | USPSA matches, classifiers, classification estimates |
| Costs | Ammo cost (auto-calc), range fees, match fees, gear purchases |
| Malfunctions | Stoppage tracking and analytics by type/firearm |
| Maintenance | Field strip/deep clean/annual/recoil spring/mag spring schedule |
| Atlas Reference | Maintenance schedule table, field strip checklist, Atlas video links |
| Help | Inline guide covering every section of the app |
| Settings | Data export/import (JSON + CSV), drill library editor, mag spring schedule |

---

## Maintenance Schedule (Atlas Gunworks Guidance)

| Task | Interval |
|---|---|
| Field Strip & Clean | After every range session |
| Comp Cleaning | Every 1,000–2,000 rounds (if compensated) |
| Deep Clean | Every 10,000 cumulative rounds |
| Recoil Spring Replacement | Per firearm setting (default: 5,000 rounds) |
| Magazine Springs | Every 6 months |
| Annual Inspection | Once per calendar year |

---

## Files in This Folder

| File | Purpose |
|---|---|
| `index.html` | The entire app — open this in any browser |
| `manifest.json` | PWA manifest for home screen installation |
| `sw.js` | Service worker for offline support |
| `icon-180.png` | Apple touch icon (iPhone/iPad home screen) |
| `icon-192.png` | PWA icon (Android / Chrome) |
| `icon-512.png` | PWA icon (high-res) |
| `Pistol Tracker.app` | macOS launcher — double-click to open in default browser |
| `rangeready_import.json` | Sample/import data file |
| `README.md` | Brief usage notes and version history |
| `PROJECT_NOTES.md` | This file |

---

## Installing as a Mobile App (iPhone / iPad)

The app must be served over HTTPS. Two options:

**Netlify Drop (easiest, no account needed):**
1. Go to `netlify.com/drop` in your Mac browser
2. Drag the entire folder onto the page
3. Copy the HTTPS link it gives you
4. Open that link in Safari on iPhone/iPad
5. Tap Share → Add to Home Screen

**GitHub Pages (permanent URL, recommended long-term):**
- Ask Claude for step-by-step help if needed

**Data sync between devices:** Each device has its own localStorage. Use **Settings → Download JSON Backup** on one device and **Import** on another to transfer your data.

---

## Design Decisions & Conventions

- **Dark theme** with orange accent (`#ff6b35`). Colors defined as CSS variables in `:root`.
- **No external dependencies** — no CDN, no npm, no build tools. Deliberately self-contained.
- **Modal pattern** — all forms use a single shared modal (`#modal-backdrop` / `#modal`). `openModal(html, onMount)` renders any form; `closeModal()` dismisses it.
- **Rendering pattern** — each view has a `render[ViewName]()` function that rebuilds the entire view's innerHTML. No incremental DOM updates.
- **Temporary state** — forms that need temporary edit state (sessions, matches) use `window._tempSession` / `window._tempMatch` as scratch objects, then commit to `DB` on save.
- **Atlas guidance** — maintenance recommendations are embedded as HTML strings in `maintenanceRecommendations(type)`. These are shown inside the maintenance modal.
- **USPSA classification** — calculated client-side using "best 4 of last 8 classifiers" per division. This is an estimate; official numbers come from the USPSA member portal.

---

## Known Limitations

- **Cross-device sync is file-based**, not real-time. Auto-sync via File System Access API (v1.8) works seamlessly on Chrome/Edge for Mac; iOS Safari falls back to manual Export/Import via iCloud Drive (which still works fine, just two taps each direction).
- **No push notifications** — maintenance reminders only show when the app is open.
- **PWA install requires HTTPS hosting**. Currently served via GitHub Pages at `https://mjminik.github.io/Pistol-Tracker/`. Repo must remain public for free-tier Pages.

---

## Recommended Next Features (User's Priority List)

This is the master roadmap of features the user wants built, deduplicated and renumbered from the original recommendations list. **Items 1, 2, 12, and a few related fixes were already completed in v1.8.** The remaining items are the active backlog. Pick whichever items the user names — they're loosely grouped but not strict prerequisites of each other.

User has indicated rough priority for the next batch: **#3 (search/filter), #9 (Spend module rollups), and #10/#11 (per-magazine tracking with malfunction correlation)** are the highest-leverage near-term additions, per the prior recommendation.

### Active Backlog

1. ~~Mobile-responsive layout~~ **Done v1.4 / refined v1.7**
2. ~~Cloud sync / iCloud Drive backup~~ **Done v1.6 (manual) and v1.8 (auto-sync via File System Access API)**
3. **Search, filter, and date-range controls across Sessions, Maintenance, Malfunctions, and Competition** — Sessions and Maintenance done (v1.8 patch: date range + firearm + task type filter bar on Maintenance log; Sessions filter was already complete). Malfunctions and Competition remain.
4. ~~**Soft-delete and "Recently Deleted" recovery**~~ **Done v1.8 patch** — DB.trash[] added. Deleting a session/maintenance/malfunction moves it to trash and reverses side effects (ammo returned, mag rounds reversed). Collapsed "Recently Deleted" card at bottom of each view shows item description, days until auto-purge, Restore and Delete Permanently buttons. Restore re-applies side effects. Items auto-purge after 30 days via purgeOldTrash() called in loadDB. Standalone malfunction delete button added to malfunction log (session-embedded malfunctions show "in session" label).
5. ~~**PractiScore link field per match**~~ **Done v1.8 patch** — field was already editable and saving correctly. Promoted the link from the row-actions area to a prominent orange-bordered button in the card body, visible without scrolling to the bottom.
6. ~~**Division-aware HHF lookup**~~ **Done v1.8 patch** — USPSA lookup link now updates when division or power factor changes (not just code). Link text shows "Look up HHF for CM-{code} · {division} {PF} on USPSA ↗" so the user knows exactly which HHF to look for. Direct URL points to the specific classifier page on uspsa.org.
7. ~~**Stage timeline view**~~ **Done v1.8 patch** — Added `stageTimelineChart()`: all stage %s from all matches plotted chronologically, with match overall % as connected orange dots and a blue linear trend line showing trajectory. Side-by-side with the existing stagePerformanceChart in Competition → Matches pane.
8. ~~**Match round counts into firearm totals**~~ **Done v1.8 patch** — `firearmRoundCount()` and `liveFireRoundCount()` now include `m.totalRounds` from matches (where `m.firearmId` matches), so match rounds count toward the firearm's cumulative total without requiring a separate session entry.
9. ~~**Comprehensive Spend module**~~ **Done v1.8 patch** — Costs page now has two tabs: Dashboard (summary stats, stacked monthly bar chart for last 13 months, category donut chart, per-firearm breakdown table, YTD progress bars) and Log (existing Ammo Cost by Session + Purchases tables). Travel category reserved for future.
10. ~~**Per-magazine tracking**~~ **Done v1.8 patch** — DB.magazines[] added. Magazines tab in Firearms view: add/edit/retire mags, assign to firearm pools (Apollo+Erebus share a pool), track lifetime rounds (credited when selected in session modal, divided equally), log spring replacements with round offset so "since spring" resets. Label convention: A1–A10, E1–E3, S1–S8.
11. ~~**Malfunction-to-magazine correlation**~~ **Done v1.8 patch** — Malfunction modal now has a mag select (filtered to firearm pool) instead of free-text. Malfunctions view shows a "Correlation by Magazine" table (count, top type, bar chart, rounds through mag). Mag column added to full log. Old free-text `magazine` field preserved for backward compat.
12. ~~Optics tracking~~ **Done v1.7 (Optics & Gear section: zero, mount, torque, settings snapshot, battery log)**
13. ~~**Holster log**~~ **Done v1.8 patch** (#15 in backlog) — Holster field added to session modal (optional text input). Displays on session card below distances. Included in print report header line.
14. **Spare parts inventory expansion** — already exists (v1.7 Spare Parts table); could add per-firearm reorder thresholds and supplier links.
15. **Barrel and frame round-count split** — partial: barrel fields exist on firearm (v1.7); ensure totals split correctly when a barrel is swapped mid-life.
16. **Pre-session checklist** for gear, mags, and ammo per firearm.
17. **Post-session debrief template** that rolls qualitative reflection into Progress trends.
18. ~~**Dry-fire stats separated from live-fire round counts**~~ **Done v1.8 patch** — added `liveFireRoundCount(firearmId)`. Dashboard: "Live-Fire Rounds" stat + "X live + Y dry" sessions. Monthly bar chart stacked (orange=live, blue=dry). Firearm cards show live-fire rounds with dry-fire noted. Cumulative chart in Progress → Trends is live-fire only; dashed blue line shown if any dry-fire rounds exist.
19. **Multi-firearm session** — deferred by user for now. Partial implementation in v1.7 (firearmSplits) remains.
20. ~~**Photo annotation on target images**~~ **Done v1.8 patch** — Lightbox now shows "✏ Annotate" button. Annotation overlay: canvas on top of image, click-drag to draw circles, 5 color choices, undo/clear all, saves flattened annotated JPEG back to the session. Touch support for iPad/iPhone. Circles are scaled from display to native image resolution on save.
21. **Calendar (.ics) export** for upcoming maintenance reminders and matches.
22. **Predictive analytics on dashboard** — projections like "Erebus will hit 10K rounds around July at your current pace."
23. **Trend alerts on self-rating data** — already added in v1.7 for training-gap + fundamentals-dip; could expand to more metrics.
24. **Heatmap calendar showing training frequency** — already exists in v1.5 (Progress → Calendar tab); could add color intensity by round count rather than session count.
25. ~~**In-app RangeReady CSV importer**~~ **Done v1.8 patch** — Settings → "RangeReady CSV Importer" card. Parses CSV, auto-detects date/firearm/rounds/location/drill/notes/type columns, user can remap any column, preview first 5 rows, import button. Handles MM/DD/YYYY and YYYY-MM-DD date formats. Skips duplicates (same date+firearm+rounds). Matches firearm by name prefix. Stores sessions with drill name in drills[] array.
26. ~~**Print-friendly session report**~~ **Done v1.8 patch** — Print button on each session card (single); Print Report button in Sessions header prints all filtered sessions. Opens new window: clean serif layout with header, ammo table, drills table, self-rating bars, malfunctions, notes, target images. Page-break between sessions for multi-session print.
27. **Light and dark mode toggle** — **Done v1.7** (CSS variable theming + sidebar toggle + persisted preference).
28. **Keyboard shortcuts** — **Done v1.7** (S, M, D, ?, Esc).
29. **Onboarding wizard** — Option A (Quick Setup) done v1.8 patch: 5-step friendly wizard (Welcome with two paths, Add Firearm, Add Ammo, Load Sample Data, Set Preferences, Done). Auto-triggers on firstUse. Replayable from Help → "Setup Wizard" button. Sample data = 1 demo firearm, 1 ammo, 5 sessions, 3 maintenance records — tagged with WIZARD_SAMPLE_IDS for clean removal. End screen offers to remove sample data or keep it with instructions. Settings page shows "Remove Sample Data" button when sample data is present. Option B (Full Tour) done v1.8 patch: floating bottom bar auto-navigates all 13 sections, progress bar, 3 tips per section, Back/Next/Finish/Exit controls. Accessible from Help → "Full Tour" button and wizard welcome screen.
30. ~~**Inline editing of common fields**~~ **Done v1.8 patch** — Extended beyond session notes: session location is now inline-editable (click the 📍 location line on session card); match percentage is inline-editable (click the Match % value on match cards). Both save immediately to DB.
31. **Auto-backup with reminder nudge** — **Done v1.5** (30-day reminder on dashboard with snooze).

---

## Apple HIG UI Audit (started June 2026) — ✅ COMPLETE (June 10, 2026)

122 issues identified. Groups A, B, and C all complete. Accessibility items (#101–105) completed v1.9.54–63. #108 was corrected (per Michael, June 10). #124 (badge contrast, found during audit) also done.

### Group C — Final Status

| # | Item | Status |
|---|------|--------|
| #5 | Log Session modal section grouping | ✅ Done v1.9.38 |
| #9 / #75 / #89 | Chart x-axis labels + SVG fonts | ✅ Done v1.9.40 |
| #10 | Empty states — consistent icon + headline + action | ✅ Done v1.9.34 |
| #13 | Print reports branding | ✅ Done v1.9.52 |
| #17 | Session Type → segmented control | ✅ Done v1.9.28 |
| #18 | Checkboxes → iOS toggle switches (4 locations) | ✅ Done v1.9.33 |
| #38 | Heatmap larger cells on mobile | ✅ Done v1.9.43 |
| #69/#72 | Onboarding wizard improvements — Next/Exit button position | ✅ Done (prior session) |
| #82 | Match modal section grouping | ✅ Done v1.9.44 |
| #84 | Classifier datalist | ✅ Done v1.9.45 |
| #101 | aria-label on icon-only buttons | ✅ Done v1.9.54 |
| #102 | Modal dialog semantics + focus management | ✅ Done v1.9.55 |
| #103 | SVG charts role=img + aria-label | ✅ Done v1.9.56 |
| #104 | aria-live toasts; keyboard/VoiceOver nav+tabs; aria-expanded collapsibles; reduced motion; alt text; toggle focus ring | ✅ Done v1.9.60–63 |
| #105 | Modal focus trap + return focus | ✅ Done v1.9.59 |
| #108 | Magazine malfunction field | ✅ Corrected (confirmed by Michael, June 10 2026) |
| #124 | Badge text contrast (WCAG AA) — found during audit | ✅ Done v1.9.57–58 |
| #120 | App icons — Help section emoji fixes | ✅ Done v1.9.53 |
| #122 | Magazine table firearm names truncated on iPhone | ✅ Done v1.9.47–51 |
| #123 | iOS auto-zoom on input focus (all modals) | ✅ Done v1.9.46 |

### Items Not on Original List (found during audit)
- Firearms page horizontal overflow on non-Atlas cards → fixed v1.9.35
- #123 iOS auto-zoom on input focus → fixed v1.9.46 (font-size 16px on all .form-row inputs)
- Magazine groups default collapsed → v1.9.48
- Magazine table .card overflow-x:hidden blocking iOS scroll → removed v1.9.49
- Magazine row actions → ⋯ menu v1.9.50; row-actions nowrap v1.9.51

---

## ⚠️ Open Item — JSON Privacy (deferred by Michael, June 10 2026)

`pistol-tracker-backup-2026-06-02.json` and `pistol-tracker-test-competition-data.json` are committed to the **public** GitHub repo and contain a real firearm serial number ("AE 10933"), embedded insurance photos, range locations, and full training history. No API keys/passwords in any JSON. Michael chose to leave as-is for now. Remediation when ready: git rm --cached both files + .gitignore rule; full removal requires history scrub.

---

### Items Completed in Session That Weren't on Original List

- Range Fee category purchases now route to Range Fees bucket in Spend by Category (was incorrectly going to Gear & Purchases).
- Ammo SKU consolidation tool that merges duplicate brand/caliber/grain/bullet-type rows.
- FIFO ammo costing replacing flat costPerRound for accurate per-session and per-can pricing.
- Doubles 5yd and Doubles 7yd drills added to library.
- One-time migration renaming existing Dot Torture / Press Out drill entries in sessions to Doubles 5yd.
