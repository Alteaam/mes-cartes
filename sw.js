// Service worker minimal : permet l'installation de l'appli. Il ne met rien en cache (les données restent toujours à jour).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
