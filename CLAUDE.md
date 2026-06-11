# Pistol Tracker — Session Context

At the start of every session:
1. Read **MICHAEL.md** at `/Users/michaelminik/Claude/MICHAEL.md` for everything about Michael personally
2. Read **PROJECT_NOTES.md** in this folder for the full project history, architecture, and feature backlog
3. Read **RESUME_SESSION.md** for current status and the UI Audit progress table

## Quick Summary

This is a single-file HTML/JS pistol practice and maintenance tracker app (`index.html`). It is currently at **v1.9**. All data is stored in the browser's localStorage (structured data) and IndexedDB (images) at **https://mjminik.github.io/Pistol-Tracker/**. The app is also a PWA installable on iPhone/iPad.

**Owner:** Michael — not a programmer. Ask clarifying questions before starting work. Iterate until he is satisfied.

## UI Design Standards — MANDATORY

The app strictly follows **Apple Human Interface Guidelines**. These rules apply to every UI decision going forward:

- **Color system:** Apple semantic colors. Indigo accent (`#5856D6` light / `#5E5CE6` dark). Full palette defined in CSS `:root` and `[data-theme="dark"]`.
- **Typography:** 6-size scale only — 11px (caption), 13px (secondary body), 15px (body), 17px (headline), 22px (title), 28px (large stat).
- **Touch targets:** Minimum 44×44px for all interactive elements on mobile.
- **Labels:** Title case everywhere. No ALL CAPS. No `text-transform: uppercase` on user-facing labels.
- **Corner radius:** Cards 12px. Inputs and buttons 10px. Badges 10px.
- **Destructive actions:** Custom action sheet (never `window.confirm()`).
- **Card actions:** Primary action (Edit) stays visible. Secondary/destructive actions go in ⋯ menu.
- **Mobile language:** "Tap" not "Click" in all user-facing copy.
- **Primary device:** iPhone. Design mobile-first, desktop second.

## Active Work — Apple HIG UI Audit
122 identified issues. **Group A COMPLETE. Group B COMPLETE.** Group C in progress. See RESUME_SESSION.md for the full list with statuses.

Key priority notes:
- #101–#105 (accessibility): low priority — small visually-impaired user base
- #108 (malfunction magazine field): fix AFTER all UI/UX work is complete
- Item #2 (ALL CAPS labels): fix individually, not as bulk change
- **UI improvements are higher priority than all new features until the audit is complete.**

## Discussion Conventions
- **Number all options and discussion points** so Michael can refer back by number.

## Working with Michael — MANDATORY RULES

1. **Always ask clarifying questions before writing any code.** Michael has no programming background. Never assume you know what he wants — confirm scope, approach, and UI behavior first.
2. **Present options when there are meaningful tradeoffs** (as was done with Option A / Option B for the IndexedDB change). Let Michael choose.
3. **Explain what you're about to do in plain English** before doing it, especially for significant changes.
4. **Iterate until Michael explicitly says he is satisfied.** Do not consider a feature done until he confirms it.
5. **Never jump straight into reading files or writing code** without first checking in with Michael about what he wants.
6. **Build incrementally in small chunks.** Michael prefers to test each small piece before moving on. Bias toward more engagement, not less. Never bundle multiple changes into one push when they can be broken into separate testable steps. Ask for feedback and confirmation at every stage before proceeding.
7. **Always provide explicit testing instructions after every push.** For every change: name the section to visit, describe exactly what changed visually, describe what interaction to test, and **explicitly state whether to test on Phone, Desktop, or both.** Never just say "let me know how it looks." Use "Tap" not "Click."
8. **Phone is the principal use device.** Design all UI decisions for iPhone/iPad first. Desktop is secondary.
9. **Do not soften disagreement.** When Michael asks for an opinion, give it directly. No hedging.
10. **Make recommendations rather than asking which option to choose.**
11. **PROPOSE → OK → PROCEED (added June 10, 2026).** Before making ANY change (code, files, anything), tell Michael: (a) what you intend to do, (b) what it will affect, and (c) your recommendation — then STOP and wait for his explicit OK before proceeding. Do not edit files first and explain after. This applies even when the overall direction was already approved; each individual change still needs its own OK.

## Development Rules
- Never use external libraries or CDNs — the app must remain self-contained
- Preserve all existing localStorage data when making changes
- The `loadDB()` function handles safe migration of new data fields
- Keep everything in the single `index.html` file unless a new file is truly necessary
- Use the existing CSS variable color scheme — Apple HIG semantic colors, indigo accent
- **Bump service worker CACHE_NAME with every push** — increment the patch version in sw.js every time index.html changes are pushed
- **Bump the sidebar footer version label with every push** (added v1.9.67) — the footer in index.html shows the full version (e.g. "v1.9.68") so Michael can verify on-device which version is running. Keep it in sync with sw.js CACHE_NAME
- **At the end of every work session, update PROJECT_NOTES.md and RESUME_SESSION.md** — after writing, read back the version number and current status to confirm the write succeeded before telling Michael it's done. If the files cannot be found or written, say so immediately — do not say the update is complete when it isn't.

## Testing Rules — REQUIRED

**AT THE START OF EVERY SESSION — before doing anything else — tell Michael:**
> "Before we begin, please run the test suite at https://mjminik.github.io/Pistol-Tracker/tests.html and share the results."

- **After every change**, remind Michael to run the test suite again
- If any tests FAIL, investigate and fix before considering the work done

## Firearms (Personal — Pistol Tracker)
- Atlas Erebus (9mm, Atlas Gunworks) — Trijicon SRO optic
- Atlas Apollo (9mm, Atlas Gunworks) — Trijicon SRO optic
- Atlas Eos (9mm, Atlas Gunworks) — Trijicon RMR HD optic
- Staccato XC (9mm, Staccato) — Trijicon RMR HD optic
- Remington 870 (shotgun)
- Glock 47 Gen 5

**Training started:** January 2025.

## App Sections
Dashboard · Firearms · Optics · Ammunition · Sessions · Progress · Competition · Costs & Purchases · Malfunctions · Maintenance · Atlas Reference · Help · Settings

## Key Files
- `index.html` — the entire app (~9,200 lines, vanilla JS, no dependencies)
- `tests.html` — browser-based test suite, live at https://mjminik.github.io/Pistol-Tracker/tests.html
- `PROJECT_NOTES.md` — full project documentation
- `manifest.json` + `sw.js` + icon PNGs — PWA support files

## About Dan's Wedding
- Dan (age 29, twin with Tom) is marrying Taylor — Wedding date: June 20, 2026
- Michael created a wedding slideshow in FCPX, 148 photos, exported as DT Wedding Slideshow.m4v
