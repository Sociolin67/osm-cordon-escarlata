/* Monitor Secreto · Cordón Escarlata — service worker
   Al cambiar cualquier archivo, subir el número de VERSION. */
const VERSION = 'osm-osc-v2';
const BASICOS = [
  './', 'index.html', 'index-en.html',
  'monitor-secreto.html', 'monitor-secreto-en.html',
  'cordon-escarlata.html', 'cordon-escarlata-en.html',
  'cronicas.html', 'cronicas-en.html',
  'contacto.html', 'contacto-en.html',
  'estilos.css?v=2', 'emblema-osm.jpg', 'emblema-osc.jpg', 'icon-192.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(BASICOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  // Páginas: primero la red (contenido siempre al día); sin conexión, la copia guardada.
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(VERSION).then(k => k.put(req, c)); return r; })
      .catch(() => caches.match(req).then(r => r || caches.match('index.html'))));
    return;
  }
  // Estilos e imágenes: primero la copia guardada, y se actualiza en segundo plano.
  e.respondWith(caches.match(req).then(g => {
    const red = fetch(req).then(r => { if (r.ok) { const c = r.clone(); caches.open(VERSION).then(k => k.put(req, c)); } return r; }).catch(() => g);
    return g || red;
  }));
});
