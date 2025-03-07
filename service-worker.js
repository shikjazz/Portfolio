const CACHE_NAME = 'portfolio-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  // Add additional assets (CSS, images, etc.) as needed
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
