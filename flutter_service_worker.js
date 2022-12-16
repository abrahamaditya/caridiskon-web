'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "09f8fb25e6457026aa64798de10c1d7c",
"assets/assets/animation/alert.json": "d0b06ea9e68db9f2014206d49957b101",
"assets/assets/animation/Insufficient-funds-2.json": "41c549f7b7a4e8ca6dfa22994e17ba8e",
"assets/assets/animation/Insufficient-funds.json": "642f6c487d4cc15053e92f652515e903",
"assets/assets/animation/not-found.json": "8eb6f0ac6614e38cf2cb8f66627ea08b",
"assets/assets/animation/successful-tick.json": "d851f164c5de374640f572ce6812a6d0",
"assets/assets/illustration/shopping_cart.png": "96885afc94cf3722416ee6b33145212b",
"assets/assets/illustration/woman_with_bag.png": "c28f8c8a975f2b6bc900445ca16f34d0",
"assets/assets/illustration/woman_with_bag_2.png": "5f9b1ecfe5753ad67165b0a1f794efb9",
"assets/assets/illustration/woman_with_shopping_cart.png": "57bdc2eb899791a8d68a0f58a623b093",
"assets/assets/image/brand/airasiafood.png": "19fcb964bd5be373900b762437527ee8",
"assets/assets/image/brand/bukalapak.png": "8590a4b48830d1b37c8d821c4d3da0e2",
"assets/assets/image/brand/dominospizza.png": "a9c30ba5d3791a2fa818ec7fe86d3099",
"assets/assets/image/brand/gofood.png": "43a4cb995d33167358300f1586b2a2a7",
"assets/assets/image/brand/gojek.png": "b8f75a2a9c9277330b11c370ca274bb7",
"assets/assets/image/brand/grab.png": "91f2e56c435f317efcd22c9a5e91b685",
"assets/assets/image/brand/grabfood.png": "860d9ffdbee76cdbc03b8b97b020b123",
"assets/assets/image/brand/kfc.png": "81751cf131cb82fa9c37be282237223f",
"assets/assets/image/brand/mcdonalds.png": "db6b44043d0539b763b838918af23476",
"assets/assets/image/brand/pizzahut.png": "b2ac00395653b281003456df2b56afe1",
"assets/assets/image/brand/pizzahutdelivery.png": "36947db5bbddaa43260a443833808304",
"assets/assets/image/brand/richeesefactory.png": "518b05989a69d323eeb97cb259f9d0e4",
"assets/assets/image/brand/shopee.png": "083e3a56b8cc8ef1b7d05407ae7cc47d",
"assets/assets/image/brand/shopeefood.png": "23840c0eaae6450566a6eebb677b5381",
"assets/assets/image/brand/starbucks.png": "13dc8c192be9002f1c958490c0fcbf4a",
"assets/assets/image/brand/tokopedia.png": "197a33412b39672c814b42d7bc581ada",
"assets/assets/image/brand/traveloka.png": "f6019a250b4f331a3acd79111d38bb1b",
"assets/assets/image/brand/travelokaeats.png": "6fad671782a31d39c227fd23c345d7a8",
"assets/assets/image/image.png": "aa456cc233253711a656f8aad2deee2e",
"assets/assets/image/image1.png": "d0eb5333fd026035ba5d3e7fdf4cb1cf",
"assets/assets/image/image3.png": "55ce9028f48e9db7e8011694a80e68e4",
"assets/assets/image/profile_picture/default.png": "0404244255654ef5bc5258f76d7ebc5e",
"assets/assets/logo/caridiskon.png": "4c1d9863a727c9197f1816d4f0ec7036",
"assets/assets/logo/frame/airasiafood.png": "26f9b614663eed9b5d4e0ab49a568e01",
"assets/assets/logo/frame/bukalapak.png": "4b028d7b825b66dfca3e5513399718f0",
"assets/assets/logo/frame/dominospizza.png": "6fdb7e9f06d98660a23bb3b48749ff43",
"assets/assets/logo/frame/gofood.png": "93ed83d424fd0f6713b0549bde96ab3b",
"assets/assets/logo/frame/gojek.png": "22b8422a5e491e22f19d1167a9abea99",
"assets/assets/logo/frame/grab.png": "6b1692c0927af157be32fcd7a2afbf6c",
"assets/assets/logo/frame/grabfood.png": "cb8d4c38d6f67b9510b18fcc7a9c66b6",
"assets/assets/logo/frame/kfc.png": "e564faadfec794938797afe674dc63bc",
"assets/assets/logo/frame/mcdonalds.png": "24f6475d1af43dbbb87e76066be1779c",
"assets/assets/logo/frame/pizzahut.png": "e97cd8ad2d8e05a0e20bb1b95313e46e",
"assets/assets/logo/frame/pizzahutdelivery.png": "f34d973604353f696d706adb1d6e9651",
"assets/assets/logo/frame/richeesefactory.png": "4c9ca80e9d08977c8db9efb3e82bd9ad",
"assets/assets/logo/frame/shopee.png": "b2b4a8485c86d4a99be899d653bf52ee",
"assets/assets/logo/frame/shopeefood.png": "de25a530e371c0eb1bbef14607e6670e",
"assets/assets/logo/frame/starbucks.png": "eaac23d525f9147ba74a195bff731e47",
"assets/assets/logo/frame/tokopedia.png": "a7274059fd10f26b58cd63ae953fd6b8",
"assets/assets/logo/frame/traveloka.png": "20e596d0dc9e03759f55c29fe9079b7c",
"assets/assets/logo/frame/travelokaeats.png": "8aced69e8d4c4ef8406f997b3140b6d8",
"assets/assets/logo/full/airasiafood.png": "b41c5e8a5e88d1ad4140fd1424c1fadc",
"assets/assets/logo/full/gojek.png": "17f912baa8072975ea57f729a578685b",
"assets/assets/logo/full/grab.png": "0296cc19d4b4786ebdc2238809165214",
"assets/assets/logo/full/kfc.png": "f5f44dda1a85eeefff3389c76d316d5f",
"assets/assets/logo/full/mcd.png": "da1df8aa13bf9774e8da61798f296186",
"assets/assets/logo/full/pizzahut.png": "6c6c0b79aa9aff0c7022e4739fb1302f",
"assets/assets/logo/full/shopeefood.png": "244a8a3afa23016f433d342b03fdaba8",
"assets/assets/logo/full/starbucks.png": "821d39fb6f3c681ba284639b3b3a1bef",
"assets/assets/logo/full/traveloka.png": "95223f97c9d39cebe290af36938cdbca",
"assets/assets/logo/square/airasiafood.png": "d2c5cc0a07877629e5234322ad45b422",
"assets/assets/logo/square/bukalapak.png": "c9125cebdf208281c0b2d2654808e740",
"assets/assets/logo/square/dominospizza.png": "0e6aa58a5e77dbd8ddf67a832e44f525",
"assets/assets/logo/square/gofood.png": "8ba234995b89c99a59e1a0e34ea85b29",
"assets/assets/logo/square/gojek.png": "34a9928e67fcacdf63f2afba62577832",
"assets/assets/logo/square/grab.png": "2a01f5f3659d91187997a8605657db43",
"assets/assets/logo/square/grabfood.png": "a0c5777b9e19183ef51b27926013ddc1",
"assets/assets/logo/square/kfc.png": "c8dd5a1a17b0ffcdad4a63d5ace4a8c5",
"assets/assets/logo/square/mcdonalds.png": "3985c0b0ce9f069fcce85f3315f4e814",
"assets/assets/logo/square/pizzahut.png": "db3a04b3c9cc87a1f5563bfd982eef36",
"assets/assets/logo/square/pizzahutdelivery.png": "3ffe84ff1565874d2e12fa912bcb1615",
"assets/assets/logo/square/richeesefactory.png": "b1cc211f4815769a7bfea6463c0ed8f3",
"assets/assets/logo/square/shopee.png": "62d42ec05988745024c9353624f870aa",
"assets/assets/logo/square/shopeefood.png": "6bdfc57e3b844b35ad5953ad75ceb859",
"assets/assets/logo/square/starbucks.png": "f794e3a534646b6a107235aadd5ee9c8",
"assets/assets/logo/square/tokopedia.png": "77f5b2fc1eb8bbc231b8978c990338a9",
"assets/assets/logo/square/traveloka.png": "0dd52c1626b5ed3fc18c44bb24939266",
"assets/assets/logo/square/travelokaeats.png": "e0c20684f2f28a2f483b15b2de51d06a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "be061b7cbfbd6004959b359dfbd7571f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "e475294d91c4fa12399df24bf763f8cf",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.ico": "d9e2f1056afe4ec1339d630ea8fb6d19",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "17b463bbb3c39347a47e7da5a1d5540e",
"/": "17b463bbb3c39347a47e7da5a1d5540e",
"main.dart.js": "be331098cb429314df974117fdc01737",
"manifest.json": "339ae2c873d9d0d20c7e5b523d0f6971",
"version.json": "4e829891220025c58a1e6e86ef786f78"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
