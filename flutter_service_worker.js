'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "83dd3d73fc6572ac482351057c68e70d",
"assets/AssetManifest.bin.json": "de6ddf9ebd56dd01b60915dc705a1ea9",
"assets/AssetManifest.json": "5b8f3eb94b0576c61756ba72ee06d714",
"assets/assets/fonts/teko.ttf": "8f87709aa788b839c587e8a6566f960d",
"assets/assets/icons/dartLogo.png": "b96cb5023a5dd284d44013bd5811e842",
"assets/assets/icons/firebaseLogo.png": "0e8789d152ed2744d7f7265dc3f1457e",
"assets/assets/icons/flutterIcon.png": "4262c71228b7aa391e995fe5f1d57795",
"assets/assets/icons/riveIcon.png": "30c0450bc4a86f9ee6d911050509e540",
"assets/assets/images/plotsklappsHi.gif": "ce813adb790debd27b5c25e22101fadd",
"assets/assets/images/plotsklappsIcon.png": "fb0c6d6b31ecbf9affe83a9515e47afe",
"assets/assets/images/plotsklappsLogoH.png": "58591c1451d07a2ede3a2d7df4232947",
"assets/assets/images/plotsklappsLogoV.png": "1a437b23c9c60239f189614640c74ba4",
"assets/assets/images/undraw/undraw_flutterdev.svg": "6ae7f00f984fa883de56906099013f96",
"assets/assets/images/undraw/undraw_pwa.svg": "3a1cfb6c266cc0858c2599b939284a4d",
"assets/assets/images/undraw/undraw_socials.svg": "7a5e7b44e1d807a89d78f0fc908c43ec",
"assets/FontManifest.json": "a6aade06c2a761973d89964227eab404",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "1ea18a46c9c5c6b65a619625c91a1e66",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f7cba1432259e7da129352dca27f72d1",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0dde20d96b2e65cb94939436f55d1c6e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ed30c76bcc477c2b09db2a295397e61c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "a6a18f9c23a90b6d6af09c0079df3000",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "07f549b259c0cec80a7bd5987dbcf203",
"icons/Icon-192.png": "1c8e69e56790b44b2f190de7b4156f75",
"icons/Icon-512.png": "076edc3400801fe492871dcdb1033c5d",
"icons/Icon-maskable-192.png": "1c8e69e56790b44b2f190de7b4156f75",
"icons/Icon-maskable-512.png": "076edc3400801fe492871dcdb1033c5d",
"index.html": "d93ab0beb01e9db03ee5aa7ac605a08c",
"/": "d93ab0beb01e9db03ee5aa7ac605a08c",
"main.dart.js": "f40b547875f08051453a09c422c46244",
"manifest.json": "d387359610953821effaed20b26da4d0",
"splash/img/dark-1x.png": "a3dae66f62f57b44b56874b19dc9a6d3",
"splash/img/dark-2x.png": "5c6c8dca9a750bf242577706f69ff48c",
"splash/img/dark-3x.png": "adcdc4ba753a259f79b968071908ce12",
"splash/img/dark-4x.png": "cb3c203bf49938ef45250edc25d8d397",
"splash/img/light-1x.png": "a3dae66f62f57b44b56874b19dc9a6d3",
"splash/img/light-2x.png": "5c6c8dca9a750bf242577706f69ff48c",
"splash/img/light-3x.png": "adcdc4ba753a259f79b968071908ce12",
"splash/img/light-4x.png": "cb3c203bf49938ef45250edc25d8d397",
"version.json": "78261f1e10607c854af17a1408c4b22d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
