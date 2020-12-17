self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('fox-store').then(function(cache) {
     return cache.addAll([
       '/pwa',
       '/pwa/index.html',
       '/pwa/index.js',
       '/pwa/style.css',
       '/pwa/images/fox1.jpg',
       '/pwa/images/fox2.jpg',
       '/pwa/images/fox3.jpg',
       '/pwa/images/fox4.jpg'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
