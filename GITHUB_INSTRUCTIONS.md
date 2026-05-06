# GitHub Instructions — Pistol Tracker

These instructions walk you through putting your Pistol Tracker on GitHub Pages so you can access it from any device (iPhone, iPad, Mac) at a permanent HTTPS web address. No programming knowledge required.

---

## Why GitHub?

- Your app needs HTTPS to install as a home screen app on iPhone/iPad
- GitHub Pages gives you a free, permanent URL (e.g. `https://yourusername.github.io/pistol-tracker/`)
- Every time you update `index.html` on your Mac, you can push the update and your phone gets it automatically

---

## One-Time Setup

### Step 1 — Create a GitHub account

1. Go to **github.com**
2. Click **Sign up**
3. Choose a username (this becomes part of your URL), enter your email and a password
4. Verify your email when prompted

---

### Step 2 — Create a new repository

A "repository" (or "repo") is just a folder on GitHub that holds your files.

1. Once logged in, click the **+** icon in the top-right corner → **New repository**
2. Name it `pistol-tracker` (all lowercase, no spaces)
3. Set visibility to **Public** (required for free GitHub Pages)
4. Leave everything else as-is
5. Click **Create repository**

---

### Step 3 — Install GitHub Desktop

GitHub Desktop is a free app that lets you sync files without using the command line.

1. Go to **desktop.github.com**
2. Download and install it
3. Open GitHub Desktop and sign in with your GitHub account

---

### Step 4 — Clone your repository to your Mac

"Cloning" creates a local copy of your GitHub repo on your Mac.

1. In GitHub Desktop, click **File → Clone Repository**
2. Find `pistol-tracker` in the list and click it
3. Choose where to save it on your Mac (e.g. Desktop or Documents)
4. Click **Clone**

---

### Step 5 — Copy your app files into the repo folder

1. Open Finder
2. Navigate to your Pistol Tracker folder:
   **Black Drive 2 → Claude Projects → Pistol Maintenance and Practice → Pistol Practice and Maintenance**
3. Copy these files:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon-180.png`
   - `icon-192.png`
   - `icon-512.png`
4. Paste them into the `pistol-tracker` folder you cloned in Step 4

---

### Step 6 — Commit and push your files

"Committing" saves a snapshot. "Pushing" sends it to GitHub.

1. Open GitHub Desktop — you'll see all your new files listed as changes
2. In the **Summary** box at the bottom-left, type: `Initial upload`
3. Click **Commit to main**
4. Click **Push origin** (top-right button)

Your files are now on GitHub.

---

### Step 7 — Turn on GitHub Pages

1. Go to **github.com**, open your `pistol-tracker` repository
2. Click **Settings** (tab near the top)
3. In the left sidebar, click **Pages**
4. Under **Source**, select **Deploy from a branch**
5. Under **Branch**, choose **main** and leave the folder as `/ (root)`
6. Click **Save**
7. Wait about 1–2 minutes, then refresh the page
8. GitHub will show you your URL — something like:
   `https://yourusername.github.io/pistol-tracker/`

Open that URL in any browser to confirm the app loads.

---

## Installing on iPhone / iPad

1. Open **Safari** on your iPhone or iPad (must be Safari, not Chrome)
2. Go to your GitHub Pages URL
3. Tap the **Share** button (the box with the arrow pointing up)
4. Scroll down and tap **Add to Home Screen**
5. Name it **Pistol Tracker** and tap **Add**

The app icon will appear on your home screen and opens full-screen like a native app.

---

## Keeping the App Updated

Whenever Claude updates `index.html` on your Mac, do this to push the update to GitHub and your phone:

1. Copy the updated `index.html` from your Pistol Tracker folder into your `pistol-tracker` repo folder (replacing the old one)
2. Open **GitHub Desktop**
3. You'll see `index.html` listed as a changed file
4. Type a summary (e.g. `Update to v1.5`) and click **Commit to main**
5. Click **Push origin**
6. On your iPhone: open the app, pull down to refresh (or close and reopen it)

---

## Syncing Data Between Devices

Each device stores its own data locally. To move your data from Mac to iPhone:

1. On your Mac, open the app → go to **Settings → Download JSON Backup**
2. Email that file to yourself (or save it to iCloud Drive)
3. On your iPhone, open the email/file, then open the Pistol Tracker app
4. Go to **Settings → Import JSON Backup** and select the file

Do this any time you want your iPhone data to match your Mac.

---

## Quick Reference

| Task | Where |
|---|---|
| Your GitHub repo | github.com/yourusername/pistol-tracker |
| Your live app URL | yourusername.github.io/pistol-tracker |
| Push updates | GitHub Desktop → Commit → Push origin |
| Install on iPhone | Safari → Share → Add to Home Screen |
| Move data to phone | Settings → Download JSON → email to self → Import on phone |
