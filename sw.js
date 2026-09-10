const CACHE='denver-dead-v47';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','./index.html?v=47','./manifest.webmanifest','./denver-dead-preview.jpg'])))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('denver-dead-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.mode==='navigate'){e.respondWith(fetch(e.request).then(r=>{let copy=r.clone();caches.open(CACHE).then(c=>c.put('./index.html?v=47',copy));return r}).catch(()=>caches.match('./index.html?v=47')));return}e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
