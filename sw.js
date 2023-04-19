// Define a cache name
const CACHE_NAME = 'my-pwa-cache-v5';

// List the files you want to cache
const urlsToCache = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/script.js',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache)
          .catch(error => {
            console.error('Failed to cache', error);
          });
      })
  );
  console.log('Service Worker has been installed')
});
self.addEventListener('activate', event => {
	console.log('serviceworker has been activated...')
	event.waitUntil(
		caches.keys().then(keys => {
			return Promise.all(keys
				.filter(key => key !== staticCacheName)
				.map(key => caches.delete(key)))
		})
	)
	return;
})
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
  console.log('Fetch event', event)
});
