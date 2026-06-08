/* ============================================================
   Pistol Tracker — Service Worker v1.9.10
   When served over HTTPS (GitHub Pages, Netlify): caches assets
   for offline use.
   When opened as a local file:// URL: passes all requests
   through to the browser unchanged — no caching, no interception.
   ============================================================ */

const CACHE_NAME = 'pistol-tracker-v1.9.57';

const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-180.png'
];

self.addEventListener('install', event => {
  // skipWaiting() is called unconditionally so the new service worker
  // always activates immediately, even if cache.addAll() partially fails.
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  // Never intercept file:// requests — fetch() doesn't work for local files
  // inside a service worker and would return a blank page.
  // Let the browser handle all file:// URLs natively.
  if (event.request.url.startsWith('file://')) return;

  // For HTTPS (GitHub Pages / Netlify), use cache-first for offline support.
  event.respondWith(
    caches.match(event.request)
      .then(cached => cached || fetch(event.request))
      .catch(() => caches.match('./index.html'))
  );
});
