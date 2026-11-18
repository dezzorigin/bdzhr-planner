// Bdzhr Planner — service worker (v2).
// Strategi: precache semua yang dibutuhkan halaman pertama (termasuk
// library CDN) supaya aplikasi benar-benar bisa dibuka offline setelah
// satu kali kunjungan online. Font Google di-cache saat runtime.
const CACHE_NAME = 'bdzhr-v2';

const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js',
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://unpkg.com/peerjs@1.5.2/dist/peerjs.min.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) =>
        // Satu CDN gagal tidak boleh menggagalkan seluruh install.
        Promise.all(PRECACHE_URLS.map((url) =>
          cache.add(url).catch((err) => console.warn('[sw] precache skip:', url, err))
        ))
      )
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Font Google: cache-first saat runtime (file font tidak bisa di-precache
  // karena URL-nya ditentukan isi CSS yang diunduh browser).
  if (url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com') {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) =>
        cache.match(event.request).then((hit) => {
          const network = fetch(event.request).then((res) => {
            if (res && res.ok) cache.put(event.request, res.clone());
            return res;
          }).catch(() => hit);
          return hit || network;
        })
      )
    );
    return;
  }

  // Selain itu: cache-first, fallback ke network.
  event.respondWith(
    caches.match(event.request).then((hit) => hit || fetch(event.request))
  );
});
