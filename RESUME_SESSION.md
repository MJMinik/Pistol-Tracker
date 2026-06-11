# Pistol Tracker — Session Resume Guide

## ⚠️ FIRST THING TO DO THIS SESSION

**Run the test suite before anything else:**
👉 https://mjminik.github.io/Pistol-Tracker/tests.html

Share the pass/fail count with Claude before proceeding. Do not skip this step.

---

## Current Status (as of June 10, 2026)

### App Version
**v1.9.63** — live at https://mjminik.github.io/Pistol-Tracker/
Service worker: `pistol-tracker-v1.9.63`
(Michael pushes to GitHub himself — give him the git command; do not attempt to run shell/git from Claude this period: workspace VM failing with VZErrorDomain virtualization error.)

---

## ⚠️ RESUME HERE

**🎉 APPLE HIG UI AUDIT — COMPLETE.** All 122 items + #123/#124 found during audit. #108 corrected (confirmed by Michael June 10). Accessibility #101–105 done across v1.9.54–63.

**Next:** pick from the feature backlog in PROJECT_NOTES.md (remaining: #14 spare-parts expansion, #15 barrel/frame round split, #16 pre-session checklist, #17 post-session debrief, #21 .ics calendar export, #22 predictive analytics, #23 more trend alerts, #24 heatmap intensity by rounds).

**Open item (deferred):** personal data (serial number, insurance photos) in two JSON files committed to the public repo — see PROJECT_NOTES.md "Open Item — JSON Privacy."

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
2. Confirm v1.9.63 was pushed and tested on device (if not done at end of June 10 session)
3. Pick next feature from PROJECT_NOTES.md Active Backlog (#14–#24 remaining)

---

## Version History (recent)

| Version | Date | Changes |
|---------|------|---------|
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
- These files are NOT committed to git (they're local tracking files only)
- **Private browser window** bypasses service worker cache — useful for verifying live GitHub Pages content
- **Safari hard refresh:** Cmd+Option+R (not Cmd+Shift+R, which opens Reader Mode)

## End-of-Session Rule — MANDATORY
At the end of every session, Claude must update PROJECT_NOTES.md and RESUME_SESSION.md. After writing, Claude must read back the version number and current status to confirm the write succeeded before telling Michael it's done. If the files cannot be found or written, Claude must say so immediately — do not say the update is complete when it isn't.
