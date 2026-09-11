const CACHE_NAME = 'malia-app-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// تثبيت ملفات الكاش
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// تشغيل التطبيق دون إنترنت بالاعتماد على النسخة المحفوظة
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
