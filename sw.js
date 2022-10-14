const CACHE_NAME = `my-sample-app-cache-v1`;

// Use the install event to pre-cache all initial resources.
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    cache.addAll([
      './index.html' ,

      './adicionar.html' ,

      './login.html' ,

      './charts-chartjs.html' ,

      './charts-echarts.html' ,

      './dashboards.html' ,

      './graficos.html' ,

      './grf-teste.html' ,

      './mapa.html' ,

      './registrar.html' ,

      './usuario.html' ,

      './forms/contact.php' ,

      './pwabuilder-sw/pwabuilder-sw-register.js' ,
      
      './pwabuilder-sw/pwabuilder-sw.js' ,
      
      'assets/css/cards.css' ,

      'assets/css/style.css' ,

      'assets/img/fotos/rio-1.png',
      'assets/img/fotos/rio-2.png',
      'assets/img/fotos/rio-3.png',

      'assets/img/apple-touch-icon.png',
      'assets/img/favicon.png',
      'assets/img/inserir-img.png',
      'assets/img/logo.png',

      'assets/img/icons/29.png',
      'assets/img/icons/40.png',
      'assets/img/icons/57.png',
      'assets/img/icons/58.png',
      'assets/img/icons/60.png',
      'assets/img/icons/80.png',
      'assets/img/icons/114.png',
      'assets/img/icons/120.png',
      'assets/img/icons/180.png',
      'assets/img/icons/1024.png',

      'assets/img/icons/map-solid.svg',
      'assets/img/icons/plus-solid.svg',
      'assets/img/icons/user-solid.svg',
    ]);
  })());
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', event => {
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);

    try {
      // Try to fetch the resource from the network.
      const fetchResponse = await fetch(event.request);

      // Save the resource in the cache.
      cache.put(event.request, fetchResponse.clone());

      // And return it.
      return fetchResponse;
    } catch (e) {
      // Fetching didn't work get the resource from the cache.
      const cachedResponse = await cache.match(event.request);

      // And return it.
      return cachedResponse;
    }
  })());
});