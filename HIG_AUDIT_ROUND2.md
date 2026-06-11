# HIG Audit — Round 2
**Date:** June 10, 2026 · **Version audited:** v1.9.63 (local files)
**Method:** 3 full passes. Pass 1 — every line of index.html (9,788 lines), sw.js, manifest.json, tests.html, README.md, GITHUB_INSTRUCTIONS.md, PROJECT_NOTES.md. Pass 2 — category sweeps (overflow, copy, touch targets, forms, charts, print, a11y). Pass 3 — code-level verification of every functional-bug claim; all confirmed findings below were re-checked against the actual source.

**Effort key:** S = single-line/CSS, M = one function or small block, L = structural/multi-location.

Line numbers refer to index.html unless stated otherwise.

---

## 🚨 CRITICAL — Fix Before Next Push

| # | Finding | Effort |
|---|---------|--------|
| C1 | **manifest.json on disk is EMPTY (0 bytes).** The live site still works because GitHub has the old copy, but the very next push that includes manifest.json will break PWA installability (Add to Home Screen icon/name/display mode). Restore the manifest before pushing anything. | M |

---

## 🔁 REGRESSIONS of Previously Fixed Items
*(cross-checked against PROJECT_NOTES.md completed-audit tables)*

### R1. Horizontal overflow — original audit's most common problem. **Verified: mostly fixed, but 5 instances remain.**
Tables in Sessions, Ammo, Costs, Competition, Magazines all have `overflow-x:auto` wrappers — good. These do not:

| # | Location | Detail | Effort |
|---|----------|--------|--------|
| R1a | Full Malfunction Log (~7770) | 9-column table with **no overflow-x wrapper**. Since v1.9.58 put `overflow-x:hidden` on `main`, the table is clipped with no way to scroll — right columns (Notes, Delete) unreachable on iPhone. | S |
| R1b | Maintenance Log (~7972) | Same: no wrapper; Notes column max-width 400px + nowrap row-actions. | S |
| R1c | Settings → iCloud Sync instructions | Fixed `grid-template-columns:1fr 1fr` with no mobile collapse — cramped/overflowing at 390px. | S |
| R1d | Maintenance mag-spring card | Non-wrapping flex row (same pattern fixed in v1.9.35 for non-Atlas schedule). | S |
| R1e | Heatmap legend SVG (~5950) | SVG width 62 but last swatch at x=51 + width 13 = 64 — clips 2px. | S |

### R2. #123 iOS auto-zoom (fixed v1.9.46 for `.form-row` only) — inline-styled inputs still at 13px, zoom on focus:

| # | Location | Effort |
|---|----------|--------|
| R2a | Sessions filter bar (date/firearm/type/keyword inputs) | S |
| R2b | Matches filter bar (~6098) | S |
| R2c | Malfunctions filter bar | S |
| R2d | Maintenance filter bar | S |
| R2e | Inline editors: session notes, session location, match % | S |
| R2f | Pre-session checklist custom-item inputs; multi-firearm split inputs | S |
| R2g | RangeReady importer column-remap selects | S |

One CSS rule covering these (e.g. a shared class, or `input,select,textarea{font-size:16px}` floor inside cards/filters) fixes all of R2. Total effort: S–M.

### R3. #18 Checkboxes → toggle switches (v1.9.33) — missed instances:

| # | Location | Effort |
|---|----------|--------|
| R3a | Purchase modal "Auto-add to Ammunition" (`pu-addToInv`, ~7370) — raw checkbox | S |
| R3b | Session modal "No-holster only" (~4641) — raw checkbox | S |
| (note) | Checklist take/packed checkboxes are acceptable as checkboxes (list-selection pattern), but at 14–16px they fail the 44px touch target — see T-group. | — |

### R4. Title Case / typography scale (Group A) regressions:

| # | Location | Effort |
|---|----------|--------|
| R4a | sessionRatingsChart legend labels lowercase ("fundamentals", etc.) | S |
| R4b | stageTimelineChart legend text 8px; roundsChart legend 9px — below the 11px scale floor | S |

### R5. Destructive actions without action sheet (Group B):

| # | Location | Effort |
|---|----------|--------|
| R5a | Settings → Drill Library: × delete button removes a drill immediately, no confirmation | M |

---

## 🐞 NEW — Functional Bugs

### High impact

| # | Finding | Effort |
|---|---------|--------|
| F1 | **Match-type filter can never match.** Filter options (~6100): `USPSA, IDPA, Three-Gun, Steel Challenge, Sporting Clays, Other`. Modal save options (~6486): `USPSA Level 1/2/3, Section, State, Area, Nationals, IDPA, Steel Challenge, Local Match, Other`. Selecting "USPSA" in the filter matches no saved match (`USPSA !== 'USPSA Level 1'`). Only IDPA/Steel Challenge/Other overlap. Fix: build filter options from the modal list (or from values actually present in DB.matches). | M |
| F2 | **Per-firearm spend double-counts split sessions.** `renderCostsDashboard` (~7116) calls `sessionAmmoCost(x, fw.id)` but the function signature is `sessionAmmoCost(s)` (~7023) — the firearm argument is silently ignored, so a multi-firearm session's FULL ammo cost is attributed to EVERY firearm in the split. Per-firearm table overstates spend and rows no longer sum to the total. Fix: make sessionAmmoCost accept an optional firearmId and prorate by split rounds. | M |
| F3 | **removeSessionImage deletes the IndexedDB image immediately** during session editing (~5071). Cancelling the edit does not restore the photo — permanent data loss. Fix: mark for deletion in `_tempSession`, delete only on save. | M |
| F4 | **Init double-render + unconditional saveDB().** At ~9245 `initImageDB().then(() => renderView('dashboard'))` AND at ~9776 `DOMContentLoaded → setView('dashboard')` — dashboard renders twice on every load. Worse, an unconditional `saveDB()` at ~9244 bumps `_lastModified` on every app open, which can make local always look newer than the auto-sync file and defeat the "remote is newer" detection. | M |
| F5 | **`dupCount` ReferenceError in `_doConsolidateAmmo`** (~3597). Declared in the outer function (~3505), referenced in the inner one. The merge itself completes and saves, but the confirmation toast never shows and a console error is thrown — user gets no feedback. | S |

### Medium impact

| # | Finding | Effort |
|---|---------|--------|
| F6 | savePurchase: changing category away from Ammo Purchase leaves stale `rounds`/`ammoId` on the record — pollutes FIFO costing. Clear those fields on category change. | S |
| F7 | bestPerClassifierTable (~6430) returns a stray `</table></div>` when empty — unbalanced HTML silently mis-nests the Competition pane. | S |
| F8 | Heatmap calendar uses `toISOString()` to build date keys — UTC conversion can shift sessions to the wrong day for evening entries (US timezones). Use the local-date formatter used elsewhere. | S |
| F9 | Malfunctions "Correlation by Magazine" aggregates ALL malfunctions while the other tables on the page respect the active filter — inconsistent counts side-by-side. | S |
| F10 | editSerialNumber (~3016): focus selector is `'sn-input-${firearmId}'` in single quotes — never interpolates, so the input is never auto-focused. | S |
| F11 | RangeReady importer embeds `JSON.stringify(headers)` inside an inline `onchange` attribute — a CSV header containing a quote breaks the handler. | M |
| F12 | classifierProgressChart aria-label says "hit factor" but the chart plots percentage. | S |

---

## 📏 Touch Targets (44×44px minimum)

| # | Element | Current | Effort |
|---|---------|---------|--------|
| T1 | `.help-btn` (section ? buttons) | 24px | S |
| T2 | Photo delete ✕ on session thumbnails | 18px | S |
| T3 | Image-thumb remove ✕ (insurance photos) | 18px | S |
| T4 | Annotation color swatches | 24px | S |
| T5 | Wizard close × | small | S |
| T6 | Drill Library × buttons | small | S |
| T7 | Checklist checkboxes | 14–16px | S |
| T8 | Match-card inline match-% tap area | text-only | S |

Use the padded-hit-area pattern (transparent padding or ::after expansion) to fix without visual change.

---

## ♿ Accessibility (new findings; #101–105 foundations are in place)

| # | Finding | Effort |
|---|---------|--------|
| A1 | Wizard welcome choice cards are clickable `<div>`s — no role, no tabindex, not keyboard-operable. The very first screen a new user sees is keyboard-inaccessible. | S |
| A2 | Esc does not close action sheets or the lightbox (Help claims "Esc — Close any dialog"). Either wire Esc into both or fix the copy. | M |
| A3 | Inline-edit affordances (session notes/location, match %, serial number) are click-only spans/divs — no keyboard path. | M |
| A4 | Heatmap cell data exposed only via SVG `<title>` — effectively invisible to VoiceOver. A visually-hidden text summary would do. | M |
| A5 | Search-result rows in global search: divs with onclick, not focusable. | S |

---

## ✍️ Copy & Language

| # | Finding | Effort |
|---|---------|--------|
| W1 | Low-ammo threshold contradiction: alert fires at **≤ 50** rounds (line 2350) but Quick Tour copy (line 9206) says "below 200 rounds." | S |
| W2 | Help: "Your four firearms are already loaded" — stale (Michael has 6; a new user has 0). | S |
| W3 | Help references "Take the Tour" but the button is labeled "Quick Tour." | S |
| W4 | "organised" — British spelling, inconsistent with the rest of the app. | S |
| W5 | Hardcoded "step 12 of 13" in a tour tip — will rot when steps change. | S |
| W6 | Costs copy "Auto-calculated from rounds fired × cost/round" contradicts the FIFO costing introduced in v1.8 — describe it as "from your purchase history (oldest ammo used first)." | S |
| W7 | README.md is two lines; PROJECT_NOTES claims it holds "usage notes and version history." Either fill it (it's the public repo's landing text) or fix the PROJECT_NOTES description. | S |

---

## 🎨 Visual / HIG Details

| # | Finding | Effort |
|---|---------|--------|
| V1 | Hardcoded hex colors (`#34C759`, chart `COLORS` object, others) bypass CSS variables — slight dark/light mismatch and a maintenance trap. | M |
| V2 | rgba(255,255,255,…) divider lines look wrong in light mode. | S |
| V3 | `.btn.small` at 11px — caption size on an interactive control; 13px fits the scale better. | S |
| V4 | `.tip` negative margin causes edge-crowding on narrow screens. | S |
| V5 | Streak calculation loop (~5933) is convoluted; works, but fragile — candidate for cleanup when touched next. | M |

---

## 🖨️ Print Reports

| # | Finding | Effort |
|---|---------|--------|
| P1 | printChecklist (~4369) interpolates `${f.name}` unescaped — a quote/`<` in a firearm name breaks the print HTML. | S |
| P2 | buildPrintDocument (~4459) matches the session's match record **by date only** — two matches on one date prints the wrong one. Match by id. | S |

---

## 🧪 tests.html

| # | Finding | Effort |
|---|---------|--------|
| X1 | Replicated `firearmRoundCount` (tests.html line 99) does **not** skip planned sessions; the app does (index.html line 1517). A planned session with totalRounds makes the suite disagree with the app. | S |
| X2 | "All purchase amounts are non-negative" checks `p.amount`, but the real field is `p.cost` — the test can never fail (vacuous pass). | S |

---

## Recommended Fix Order

1. **C1** — restore manifest.json (blocker for any push)
2. **R1a–R1e** — horizontal overflow regressions (the explicitly re-verified problem class)
3. **F1–F5** — high-impact functional bugs (filter, costs double-count, photo loss, sync risk, consolidate toast)
4. **R2** — one CSS rule kills all remaining iOS auto-zoom
5. **F6–F12, X1–X2** — remaining bugs + test-suite fixes
6. **T1–T8, A1–A5** — touch targets and accessibility
7. **W1–W7, V1–V5, P1–P2** — copy, polish, print

**Pass 3 result:** no new findings of substance beyond the above; the audit is complete at 3 passes per the stop rule.
