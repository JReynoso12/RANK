/* Placeholder service worker to satisfy stale /sw.js requests on localhost. */
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", () => {
  // No-op: this project does not use offline caching.
});
