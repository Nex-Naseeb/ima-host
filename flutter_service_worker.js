'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "3bccc20402452819fea55f17cebae59e",
"favicon.ico": "29e761a7476828edbcb2d5f3e4d75b39",
"index.html": "5227bc32ed6486e34f2a1214d1a8f51f",
"/": "5227bc32ed6486e34f2a1214d1a8f51f",
"main.dart.js": "6745885ec917381e1c738a85beb1d028",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "4c7b4315ef28ef0b316a1eaec1b117b6",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "a6fd18ddc579590009e31b64f3603d19",
"manifest.json": "3a9ba7d01c79fdcd657208b63c99a4fc",
"assets/AssetManifest.json": "1b2662a43fd79b533098ca7cdf9eafce",
"assets/NOTICES": "53e836cf5ae3843b18b92e717ef792d7",
"assets/FontManifest.json": "10dfdbfa73b84c88390ed6e2d1e6d823",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "a4b913ed167ad2293a9dac870bd95a1f",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/customer_icon.jpg": "2a6c222b873de16da100a5fc60a820b1",
"assets/assets/images/delivery.jpg": "ac251de765cd3efb130c3719148a8f43",
"assets/assets/images/register.jpg": "b02f4284ff7e9ab2be03fa838ad8f3b4",
"assets/assets/images/emptyreport.gif": "90cc1a061d251eefb9746f832ec3016a",
"assets/assets/images/customer.jpg": "fc1181b083f9553031f7c042453229a4",
"assets/assets/images/delivery.gif": "ae8b2ae29edb3aa6d8c0154900625343",
"assets/assets/icons/imaicon.png": "eab49ffe08be94d9fb2d81dde809f384",
"assets/assets/icons/warning.png": "d46b727288bfd2b9e82fdd3ee7744ec8",
"assets/assets/icons/check.png": "33ee2b22b20e61d6c756cb844abea386",
"assets/assets/icons/tech_avatar1.png": "c64b45ea911ed53d8cc30b803aa50aa7",
"assets/assets/icons/tech_avatar3.png": "e0becef111c4ffcb210b28fb27619261",
"assets/assets/icons/no_vehicle.png": "0a01e9ef2ed97cf43034d0f1b9ecf32e",
"assets/assets/icons/tech_avatar2.png": "1b47018c9f93a17449cb8bd4e95024a2",
"assets/assets/icons/pending_icon.png": "1e5b06621882ade8dc33e1d5342847c2",
"assets/assets/icons/self_vehicle.jpg": "a1ea3592f36e283ba0b2fe6df131b2e9",
"assets/assets/icons/bike.jpg": "68ddd9231c309984f398f639a614d5b7",
"assets/assets/icons/avataricon.png": "a5e81f19cf2c587876fd1bb08ae0249f",
"assets/assets/icons/add_icon.png": "6e123fa5b6ca6c8cb0b92ceec26438d0",
"assets/assets/icons/notsub.jpg": "2e01dfbac9f3efd25294fbb8628d5b1f",
"assets/assets/icons/scooter-1.png": "7e6f0e6749a572dd32c7dfad67e783c5",
"assets/assets/icons/test.png": "abad193c0498a893d7790a60727fbf0f",
"assets/assets/icons/tech_complete.png": "f0562b62abd12fef673ea265a6d51b81",
"assets/assets/icons/menu.png": "abba6ad6a8140c7e84734108e7e911e1",
"assets/assets/icons/noprograms.jpg": "15087059874153c8d95876e0fc4a4d37",
"assets/assets/icons/completed_icon.png": "cc0d1fd6a191fd34d508b6e40aaaacf3",
"assets/assets/icons/scooter_icon.png": "d67e0b003f01ef772f351a72c95a7b1e",
"assets/assets/icons/customer1.jpg": "8a17848b5d95bbafd16c4b7f6b8d6af7",
"assets/assets/icons/expenses.png": "3c09b62f3b1a0810d9a0fa03080cfade",
"assets/assets/icons/processing_icon.png": "98fe0977dd8df56e7030d96d53a528df",
"assets/assets/icons/customer2.jpg": "8cf3fa622603ce43e193194320bace01",
"assets/assets/icons/customer3.png": "9c4526337e7499c22594b8a5d890c617",
"assets/assets/icons/assigned_icon.png": "e799758eb20ab3f6e5488324d1a5aafa",
"assets/assets/icons/truck.png": "db92973b05211bb97e7767d5a6f841e8",
"assets/assets/icons/scooter.jpg": "25adebb23c0ee074f7c38fc9e70c860a",
"assets/assets/icons/scooter.png": "8d41c82c145cb692063d56a9adddb2d0",
"assets/assets/icons/file_miss.png": "ca6bb393b5e0e593243469cdd0627a6f",
"assets/assets/icons/technician.png": "999adfbeaa4c7e0c0d784e2b917352dd",
"assets/assets/icons/customer4.jpg": "14195266f30a7eeb1d021b322ef8d47a",
"assets/assets/icons/no_result.png": "ca826221154aaee1838d5925588bad7b",
"assets/assets/fonts/Montserrat-Medium.ttf": "aca6287f22eef510c1e622c97bb1e1e1",
"assets/assets/fonts/Nunito-Regular.ttf": "5f444b61c541a4b329d8b16841b4de96",
"assets/assets/fonts/Montserrat-Regular.ttf": "34de1239b12123b85ff1a68b58835a1f",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
