// service-worker.js


import { CacheFirst } from 'workbox-strategies';

// Pre-cache assets
precaching.precacheAndRoute(self.__WB_MANIFEST || []);


// Cache images ..
registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images-cache',
    plugins: [
      {
        // Cache for a maximum of 30 days
        expiration: {
          maxAgeSeconds: 30 * 24 * 60 * 60,
        },
      },
    ],
  })
);

// Cache YouTube videos (URLs) if needed
registerRoute(
  ({ url }) => url.host === 'www.youtube.com',
  new CacheFirst({
    cacheName: 'youtube-cache',
  })
);

// Skip waiting to activate new service workers
self.addEventListener('install', (event) => {
  self.skipWaiting();
});
