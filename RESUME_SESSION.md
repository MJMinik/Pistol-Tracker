# Pistol Tracker — Session Resume Guide

## ⚠️ FIRST THING TO DO THIS SESSION

**Run the test suite before anything else:**
👉 https://mjminik.github.io/Pistol-Tracker/tests.html

Share the pass/fail count with Claude before proceeding. Do not skip this step.

---

## Current Status (as of end of day June 10/11, 2026)

### App Version
**v1.9.74** — tests 42/0/0 confirmed by Michael June 11 morning. (If the on-device footer doesn't read v1.9.74, the F6 commit still needs `git add -A && git commit && git push`.)
Service worker: `pistol-tracker-v1.9.74` in local sw.js.
(Michael pushes to GitHub himself — give him the git command; workspace VM/shell unavailable this period.)

**FIRST: check footer version on Michael's device.** If it shows v1.9.73, give him the push command for v1.9.74 (commit message: "v1.9.74: F6 - clear stale ammo fields when purchase category changes") and the F6 test steps (Costs & Purchases: create Ammo Purchase w/ rounds+ammo link → edit, change category to Gear, save → card shows no rounds/ammo link, inventory restored).

**⚠️ NEW MANDATORY RULE (CLAUDE.md #11): PROPOSE → OK → PROCEED.** Before ANY change: state intent, impact, recommendation — then STOP for Michael's explicit OK. Every individual change, no exceptions.

---

## ⚠️ RESUME HERE

**THE NEW TASK (June 11, 2026): FirearmLog.** Michael is commissioning a full commercial rewrite called **FirearmLog** (he owns the name + domain). Everything needed is in **FIREARMLOG_BRIEF.md** in this folder — goal statement, all requirements, decisions (PWA-first/Capacitor-ready; local-first file-based sync, no server), and working rules. First task in the FirearmLog session: read the brief, then write FIREARMLOG_SPEC.md.

**The PROPOSE → OK → PROCEED rule was REMOVED June 11 at Michael's direction** (CLAUDE.md rule #11 now marked removed). Work in the best way possible without per-change approval; other working rules still apply.

**Pistol Tracker v1.x is now in maintenance mode.** Final state: v1.9.74, tests 42/0/0 (June 11). Remaining audit items (F7–F12, R/T/W/V/P/X series in HIG_AUDIT_ROUND2.md) are superseded by the rewrite unless Michael says otherwise.

**In-progress backlog (HIG Round-2 audit — see HIG_AUDIT_ROUND2.md):** Group 2 (functional bugs) was in progress, one fix per push: F1–F6 ✅ done (v1.9.65–74). **Next in queue: F7** (bestPerClassifierTable ~6430 returns stray `</table></div>` when empty — unbalanced HTML in Competition pane), then F8 (heatmap toISOString UTC date-shift), F9–F12, then groups 3–5 (regressions R1c–R1e/R2/R3/R4/R5, touch/copy/visual items, features #14–24).

**Open item (deferred):** personal data (serial number, insurance photos) in two JSON files committed to the public repo — see PROJECT_NOTES.md "Open Item — JSON Privacy." ALSO: CLAUDE.md / PROJECT_NOTES.md / RESUME_SESSION.md turned out to be TRACKED in the public repo (confirmed from Michael's git status June 10) — privacy note proposed but not yet OK'd.

---

## What Was Accomplished June 10–11, 2026 (Round-2 audit + bug-fix session)

- **HIG Round-2 audit complete** — 3 passes over every file, written to `HIG_AUDIT_ROUND2.md` (C/R/F/T/A/W/V/P/X items + fix order)
- Discovered **manifest.json was empty (0 bytes)** — rebuilt it; explained to Michael
- **Pistol Tracker.app vanished** (Dock "?") — replaced with `Pistol Tracker.webloc` pointing at the GitHub Pages URL
- **v1.9.64** — C1 manifest rebuild + R1a/R1b table scroll wrappers; tests 42/0/0 ✅
- **v1.9.65** — F1 match-type filter built from data ✅ verified by screenshot
- **v1.9.66** — F2 multi-firearm cost proration (sessionFirearmShare) ✅
- **v1.9.67** — footer shows full version; sync rule added to CLAUDE.md ✅
- **v1.9.68** — F3 deferred photo delete (Cancel restores photos) ✅
- **v1.9.69** — T2/T3 photo ✕ 28px + 44px hit area ✅
- **v1.9.70** — red ✕ badge both places + "Remove this photo?" sheet in Edit Session ✅ (also fixed Michael's desktop stuck on pre-1.9.67 cache — unregistered old service worker via DevTools; do NOT "Clear site data," it wipes app data)
- **v1.9.71** — F4 pt 1: removed duplicate dashboard render ✅ 42/0/0
- **v1.9.72** — F4 pt 2: startup save no longer bumps _lastModified ✅ 42/0/0
- **v1.9.73** — F5: dupCount ReferenceError in consolidate toast ✅ tests passed
- **v1.9.74** — F6: clear stale ammo fields on category change — **push/test status UNCONFIRMED**
- **CLAUDE.md rule #11 added** (PROPOSE → OK → PROCEED) at Michael's direction

---

## What Was Accomplished June 10, 2026 (accessibility session)

- Discovered v1.9.54–59 were never recorded in notes; reconstructed from git log (see PROJECT_NOTES version table)
- **v1.9.60** — #104 aria-live toast announcements (VoiceOver speaks all toasts); tests 42/0/0 ✅ confirmed
- **v1.9.61** — #104 keyboard/VoiceOver sidebar nav (real links, aria-current) + all tab rows (role=tab, aria-selected, Enter/Space, focus ring); tests 42/0/0 ✅ confirmed
- **v1.9.62** — #104 aria-expanded on all 6 collapsible patterns; mag group headers keyboard-operable; tests 42/0/0 ✅ confirmed
- **v1.9.63** — #104 prefers-reduced-motion; alt text (insurance/lightbox/annotation images); toggle switch focus ring — ⚠️ Michael still to push + test on device
- JSON privacy review: no API keys anywhere; serial + insurance photos in 2 public-repo JSONs — Michael deferred

---

## What Was Accomplished June 8, 2026

**Competition test data file created**
- `pistol-tracker-test-competition-data.json` — full DB backup with 4 USPSA matches + 5 classifiers added
- Import via Settings → Import JSON Backup to populate the Competition section for testing

**#82 — Match modal section grouping ✅ Done v1.9.44**
- Location/Firearm moved to form-grid-2 (separated from Logistics)
- Added section headers: Logistics, Stages, Final Results, Details
- Matches style established in Log Session modal (#5)

**#84 — Classifier datalist ✅ Done v1.9.45**
- Datalist option values now include name ("06-06 — Stop Plates") so names show on iOS keyboard suggestions
- classifierDefByCode() and saveClassifier() strip " — Name" suffix
- Added missing classifiers: 03-01 Safe and Sound, names for 06-06/09-07/99-08
- Added Scoring + Hit Breakdown section headers to modal

**#123 — iOS auto-zoom on input focus ✅ Done v1.9.46**
- .form-row input/select/textarea font-size bumped 13px → 16px
- iOS Safari zooms on any input < 16px; this prevents it across ALL modals

**#122 — Magazine table ✅ Done v1.9.47–51**
- v1.9.47: Group header h3 wraps on narrow screens (min-width:0, word-break:break-word)
- v1.9.48: Groups default to collapsed; tap header to expand
- v1.9.49: Removed overflow-x:hidden from .card (was blocking iOS table horizontal scroll)
- v1.9.50: Row actions → Edit + ⋯ menu (Log Spring Replacement, Delete via action sheet)
- v1.9.51: .row-actions nowrap; table min-width 620px — fixes tall rows from button stacking

---

## What Was Accomplished Previous Session (June 8, 2026 — earlier)

**#5 — Log Session modal "Details" label ✅ Done v1.9.38**
**#9 / #75 / #89 — Chart x-axis date labels + larger SVG fonts ✅ Done v1.9.40**
**#38 — Heatmap larger cells on mobile ✅ Done v1.9.43**

---

## Apple HIG Audit Status

### Group A — CSS / Single-line fixes ✅ COMPLETE
### Group B — Behavior changes ✅ COMPLETE
### Group C — Structural ✅ COMPLETE (June 10, 2026)

| # | Item | Status |
|---|------|--------|
| #5  | Log Session modal section grouping | ✅ Done v1.9.38 |
| #9 / #75 / #89 | Chart date labels + larger fonts | ✅ Done v1.9.40 |
| #10 | Empty states — icon + headline + action | ✅ Done v1.9.34 |
| #17 | Session Type → segmented control | ✅ Done v1.9.27 |
| #18 | Checkboxes → iOS toggle switches | ✅ Done v1.9.33 |
| #38 | Heatmap larger cells on mobile | ✅ Done v1.9.43 |
| #82 | Match modal section grouping | ✅ Done v1.9.44 |
| #84 | Classifier datalist | ✅ Done v1.9.45 |
| #122 | Magazine table firearm names + row layout | ✅ Done v1.9.47–51 |
| #123 | iOS auto-zoom on input focus | ✅ Done v1.9.46 |
| #13 | Print reports branding | ✅ Done v1.9.52 |
| #69/#72 | Onboarding wizard — Next/Exit button position | ✅ Done (prior session) |
| #101 | aria-label on icon-only buttons | ✅ Done v1.9.54 |
| #102 | Modal dialog semantics + focus mgmt | ✅ Done v1.9.55 |
| #103 | SVG charts role=img + labels | ✅ Done v1.9.56 |
| #104 | Live toasts, keyboard nav/tabs, aria-expanded, reduced motion, alt text | ✅ Done v1.9.60–63 |
| #105 | Modal focus trap + return focus | ✅ Done v1.9.59 |
| #108 | Magazine malfunction field | ✅ Corrected (Michael, Jun 10) |
| #124 | Badge text contrast WCAG AA | ✅ Done v1.9.57–58 |
| #120 | App icons — Help section emoji fixes | ✅ Done v1.9.53 |

---

## Next Session Priority (do in order)

1. ✅ **Run tests first** — https://mjminik.github.io/Pistol-Tracker/tests.html
2. Confirm v1.9.74 was pushed + F6 tested on Phone (footer must say v1.9.74)
3. **Ask Michael about the NEW TASK he said he'd start this morning** — it takes priority
4. Otherwise resume HIG Round-2 fix queue at **F7** (then F8–F12, groups 3–5)

---

## Version History (recent)

| Version | Date | Changes |
|---------|------|---------|
| v1.9.74 | Jun 11 2026 | F6 clear stale ammo fields on purchase category change — push unconfirmed |
| v1.9.73 | Jun 11 2026 | F5 dupCount ReferenceError in consolidate toast |
| v1.9.72 | Jun 11 2026 | F4 pt 2: startup save doesn't bump _lastModified |
| v1.9.71 | Jun 11 2026 | F4 pt 1: remove duplicate dashboard render |
| v1.9.70 | Jun 11 2026 | Red photo-remove badge everywhere + confirm sheet in session editor |
| v1.9.69 | Jun 10 2026 | T2/T3 photo ✕ 28px, 44px hit area |
| v1.9.68 | Jun 10 2026 | F3 deferred photo delete until Save |
| v1.9.67 | Jun 10 2026 | Footer shows full version string |
| v1.9.66 | Jun 10 2026 | F2 multi-firearm cost proration |
| v1.9.65 | Jun 10 2026 | F1 match-type filter from data |
| v1.9.64 | Jun 10 2026 | C1 manifest rebuild + R1a/R1b table scroll wrappers |
| v1.9.63 | Jun 10 2026 | #104 reduced motion, image alt text, toggle focus ring |
| v1.9.62 | Jun 10 2026 | #104 aria-expanded on all collapsibles |
| v1.9.61 | Jun 10 2026 | #104 keyboard/VoiceOver nav + tabs |
| v1.9.60 | Jun 10 2026 | #104 aria-live toast announcements |
| v1.9.59 | Jun 8 2026 | #105 modal focus trap + return focus |
| v1.9.57–58 | Jun 8 2026 | #124 badge contrast; mobile drift fix |
| v1.9.56 | Jun 8 2026 | #103 SVG chart roles/labels |
| v1.9.55 | Jun 8 2026 | #102 modal dialog semantics |
| v1.9.54 | Jun 8 2026 | #101 icon button aria-labels |
| v1.9.53 | Jun 8 2026 | #120 Help section emoji: 🔀 Multi-Firearm, ✨ UI Features |
| v1.9.52 | Jun 8 2026 | #13 Print report header/footer; Your Name field in Settings |
| v1.9.51 | Jun 8 2026 | .row-actions nowrap; magazine table min-width 620px |
| v1.9.50 | Jun 8 2026 | Magazine row actions: Edit + ⋯ menu (Log Spring, Delete) |
| v1.9.49 | Jun 8 2026 | Remove overflow-x:hidden from .card (was blocking iOS table scroll) |
| v1.9.48 | Jun 8 2026 | Magazine groups default collapsed |
| v1.9.47 | Jun 8 2026 | #122 Magazine group header wraps on iPhone |
| v1.9.46 | Jun 8 2026 | #123 iOS auto-zoom: .form-row inputs font-size 16px |
| v1.9.45 | Jun 8 2026 | #84 Classifier datalist names in suggestions; section headers |
| v1.9.44 | Jun 8 2026 | #82 Match modal section grouping |
| v1.9.43 | Jun 8 2026 | #38 Heatmap always larger cells/Mon/Wed/Fri |
| v1.9.40 | Jun 8 2026 | #9/#75/#89 chart date labels as HTML row; larger SVG fonts |
| v1.9.38 | Jun 8 2026 | #5 Log Session "Details" label fix |
| v1.9.36 | Jun 7 2026 | #5 Log Session modal — Details header, Total Rounds near Ammo |
| v1.9.35 | Jun 7 2026 | Card overflow-x hidden; non-Atlas maintenance schedule flex-wrap |
| v1.9.34 | Jun 7 2026 | #10 empty states — icons, headlines, action buttons |

---

## How to Push Changes

```
cd "/Volumes/Black Drive 2/Claude Projects/Pistol Maintenance and Practice/Pistol Practice and Maintenance" && git add index.html sw.js && git commit -m "description" && git push origin main
```

Wait ~2 min for GitHub Pages to deploy. Force-close and reopen the iPhone PWA to pick up SW updates.

---

## Key Notes
- **Always use the GitHub Pages URL** — never open index.html as a local file
- **Back up regularly** — Settings → Download JSON Backup
- **CLAUDE.md, RESUME_SESSION.md, PROJECT_NOTES.md** belong in the Pistol Practice and Maintenance folder — do NOT let them end up in a different project folder
- ⚠️ CORRECTION (June 10, 2026): these files ARE tracked in the public GitHub repo (confirmed via Michael's git status). Treat them as public; privacy fix proposed but not yet OK'd
- **Private browser window** bypasses service worker cache — useful for verifying live GitHub Pages content
- **Safari hard refresh:** Cmd+Option+R (not Cmd+Shift+R, which opens Reader Mode)

## End-of-Session Rule — MANDATORY
At the end of every session, Claude must update PROJECT_NOTES.md and RESUME_SESSION.md. After writing, Claude must read back the version number and current status to confirm the write succeeded before telling Michael it's done. If the files cannot be found or written, Claude must say so immediately — do not say the update is complete when it isn't.
