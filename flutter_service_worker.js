'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f9f8f69a1166e3fffd77de18b7453986",
"favicon.ico": "37b264de305cdfcac23f78fcde1e6f1e",
"index.html": "aa5de9bbaec2549bc4f0cc3175af8fc3",
"/": "aa5de9bbaec2549bc4f0cc3175af8fc3",
"main.dart.js": "9000bf9c549c8b1d37558c358474426f",
"flutter.js": "4af2b91eb221b73845365e1302528f07",
"favicon.png": "9f9cab30a07e8e22915d5bc824883213",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a0e96923865041e5a2565be9520426e7",
".git/config": "0a4725dc943b4d29bb26e3ae2551f5b9",
".git/objects/59/6deb67e0763b26f5e41e5e0e56378f55ad5324": "6b07c95b34abcf97accb78bab225051e",
".git/objects/9b/d654d51f0f4553748649a2eca09f0a6edcefa5": "df85c274ba9fee720ca328abc49a09e0",
".git/objects/9e/ca4a1825d60a1db0095e210764f020baf661bb": "1f9715acce493ffe7fc3702c5b3225ce",
".git/objects/35/708233fba8b22abede0fb3171fd1a9f92a3f9d": "84ed8ae170ad6866db565ee763e33635",
".git/objects/3d/583d4e541d4eaaf469eec05a34f836e7311566": "850610a84b16c4f9e646442b82794adf",
".git/objects/58/f95a730d1d80564c46b4ae3e5788f3903e9fe4": "c1445a757d6c3b0bc0d35100915aa486",
".git/objects/0e/12808362938713f191ba77ca6f9a339b041388": "adbec283efcaa548a611e9375671ec73",
".git/objects/60/39b16e94c6bde2957c8c53d0cc4b2540d0e001": "4b6ce61779a2f59754fb3c6c71bfdcee",
".git/objects/5a/44e40e360be5960b8ff92de675d313dfb7484d": "ed55485bb1ab7013ecef4108e3838509",
".git/objects/5f/7b02f2b9e70992ff05cd91ff5a1374250b1544": "34a95b4bd14dfca115cbeba3ac083483",
".git/objects/33/b87b1025138f1bee8aacfe3c1837e08ad40100": "b89bc56d9f49b7df04ed9f6958a313e3",
".git/objects/33/10f4cb55e00d994bfb00cbb1aae73a4c3aeaab": "1d885f7eab4d8ecb53568a4be2f40737",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/a5/4aa3fda7f753a7fa96de0ef4e4fa5127312b43": "0e5680c54dc07f01ddcb2a6666ce5fca",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/c0cee1230fd91805db00b71d19899500c7308f": "703839eda99e258487d216d1e5fd523c",
".git/objects/ab/7b65c85a0e3a360dc32bde0c149ecc5608e27c": "eeda0ab212e851f8444bb60cf03c1940",
".git/objects/e2/ecf84ca953cc95a5aaa7b302fc2760f8b02f2f": "8701702250bbf7f0d14cb0cf392147eb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/9a4f3edd86bf49324a861132224e171f103615": "3256fca6a7be00ffb41d372a81d3536a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/c6/764c5ecde350f7354c68f62cf7882c08ab0587": "c495aa5e11a88af7fa3afcc65f3d0df3",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/7fb8665f783afd63383c1007cf7f6e0e3a5963": "3e6b015e92f87da8095e7261eb8aff65",
".git/objects/45/c5c53d1eedf1acfcfa809eefcf50e974613a35": "493b54387dfa92cfb21f3a4bfa28043e",
".git/objects/73/8968d66d77b9e27209d21c8e6e2625f529a065": "9c5e4a1fedf3d034d050908c5506e1de",
".git/objects/74/ce7c330c50226a133ddc4ee2f4f37c0af929ec": "64c42afd2d298f8ce66843d1dd12ef05",
".git/objects/1a/4ac9b0807d0dd89c68672f9fba83e9fcdc0c33": "a5ffd80a371bd4049a34c4f37b44a672",
".git/objects/1a/064d3310853d720c10b8de2a3c9aa57f3faba6": "54757c271f663d277f9bc1b099360efd",
".git/objects/19/b431ccd7f5a6b47686c625fc4cc638e3ff5190": "b3d4829a38f39ba79aec66f22ec09fa6",
".git/objects/26/779395871538b7b87c6d9b69bf753a1ab31081": "e8e263ee794810f98cfb9868ca5df492",
".git/objects/21/3e09eec4be164a8882ec24c0b0412758a8d417": "88e3212aed9e65460691b03797f3241c",
".git/objects/75/b833370b60945436cd12691596ce832ec59633": "5860baaab22ceb7784cef3e499c84759",
".git/objects/2f/b3f86a75e7dcbbe6e0fd499b11a8149e9df9ce": "e1f3dbedcfb8663a066a34a76420f544",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/116f82208cf979b99583248b021c9eed2fd032": "877553d3a37065d7e4b605d0e3facb28",
".git/objects/09/8c8c62e2059aa17bba9826282db91c1caabe81": "e5dda0721a9a5bf600a3ae9b6c02ebb0",
".git/objects/5d/67fb0da7a6e5a766d9195323dde50d7c89bcc4": "f8e8cd5ea23032bb92727ae047a5b731",
".git/objects/31/da2bbc0c7e6e8868a7488a67645fec389535bd": "2edd97414bcb8ee74d6b0a9f0499790f",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/30/ff3fdf325941882ec114899ee7e1831bf3a55f": "d7b1d8694950355b28c2052feab251b8",
".git/objects/5b/2e1f654440fc5379abe49ad6b9d2217a136741": "d430d687e1df826aa6bb6d50615998cf",
".git/objects/08/c82d74eddd9a561148f9e15239987af1297594": "c69c78149509d9c3735b39192a491d2a",
".git/objects/99/8e800d513d63496f251519aa4ea3804ae09a9b": "aa057036d15acb8e80d8a431ffb46e85",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/64/863e83b9e40fc74f0a8989bb9aeac79013c7dc": "7f5b65fe1114ca7e3912d9b71b513c3e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/4b2b769e5f5bd7a19a4daab2991153b71c0d7f": "703ac36ae160ce10d2374f1b0ded4104",
".git/objects/d4/1f31f3e53315403874e13e5552ca0174568aac": "df6214f8a3bc5a906795b32e52441bc1",
".git/objects/a9/90c0af2caec758a5f6b1aa9e68a3e746fffb12": "778b0180e84532d53927fb7423ca4b79",
".git/objects/d5/b52f5ea9a2686c79a9b0801223981e2b8381d5": "7997b2bf1bd941ba1a41873f66b8ea6e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/b92bbeca2eb007ac873872fe0519e453ecf2a3": "33b3511357dd56146cc753acdbb9a3c9",
".git/objects/a8/96976984f64874e944e4214a2d03eea8c08c2b": "0102c6901fea3a6102694397909368af",
".git/objects/a8/d1174049ac507bdb474e6af87364ebe97a93f7": "fef1aad0e3dfe6fde524d619059746f3",
".git/objects/a8/cef88fee49bc13b6987b012a356159562260f4": "62492f678d9a36be0673a039c3f8904c",
".git/objects/a6/59e00463e0ed62a497a207126495512bf62fee": "1b9c3a5403c57bd6db85d23b5ef8741a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/21f0a5e5c1cde6756869da9a3da62bdc854c4b": "d0243d383b4e27a19c9bdd9ee85c9e5b",
".git/objects/c4/4d65984954fe9e74660fb4d141f54c0a565e81": "930fe482544c027bf40609bfa0be59ea",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f7/e9587dcc57c7b0a26e4dd3d524b90e35e2e23c": "f4c203a404d10091344528cbb617e6b9",
".git/objects/ce/60bdd8f33aea85b4005f77544097d1d4846292": "ca24071606f9079513429c3d081cf03c",
".git/objects/70/5df169941e537dd7ce701d71eb3783abbd065c": "cdcf79bdae729122915512ae28abc30a",
".git/objects/70/a945723f9678510c588f7d27c930961c9aaa14": "d658e8124ca767e0921ac9a8d0347de5",
".git/objects/1e/ef9da81ca3f08a4aa75e501ad6a59d7d03ce0b": "1eb8afa7b5e2996ff088ca5d7fed8e27",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/8c/3ac4090fae945c89238913bfe0409676da1092": "88476b8a1a0c9d92634cc80b06ab989c",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/2b/4ba3acf7eca240b67a5c2878f6f641a65234bc": "620b4eaea1f4a8843ea3860821e3c935",
".git/objects/2b/881b7e5a63a68a4ae591aa6993b4e7b52efda2": "70b1f55768d07382a877edb3c1ba5f54",
".git/objects/13/aedf30c168b8b05d9c46df080608ad5b483293": "00cad79e8981d323444175f5f42a4c03",
".git/objects/8e/1d9ed6e3d073eb485ddee1b0880f8ef9d4ff73": "f92f160eaf7dac58749e4d8dc47edf2b",
".git/objects/22/f0da4d94ea7d249d34f4328107944b265ca9e6": "efa9820f0fa44ac8421020d36498922e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "df1a5e78ffea4343fde6af5615563ef3",
".git/logs/refs/heads/main": "ef585a453248c84d04631f6dcb622881",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "b5dbc5399d08c5c5a4f0ae68045caac8",
".git/index": "f5694a066890e78dc2dfb4d1c1e6319f",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/images/app.png": "ff7b1944ba1dbab2a6f9499821660eac",
"assets/AssetManifest.json": "4afef969109cbdae38b57b1127f4be28",
"assets/NOTICES": "5bb53366099cea844e362dc3815eb187",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "d9e004ce9c224376de58b351a0cd483a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "88974d86d2d17e9e03932c94f405e0a7",
"assets/fonts/MaterialIcons-Regular.otf": "438ae3acf2f1264e6c46d699c7ab8a74",
"assets/assets/mumtaz-circle.png": "3c66ab137b63eb77a60fc3e4e9394b3b",
"assets/assets/images/email.png": "3aea2d0a793da6b2843a1c1298f19190",
"assets/assets/images/location.jpeg": "8ca5b16cfd152512f75a1bde9ea71b51",
"assets/assets/images/zz.jpg": "4b35b1c069ec0c41604b0359389329db",
"assets/assets/images/app.png": "ff7b1944ba1dbab2a6f9499821660eac",
"assets/assets/images/github.svg": "07883e93734b98cae0f7b9c55d287250",
"assets/assets/images/instagram.png": "7f7b872e56430e68d69538b17525c51c",
"assets/assets/images/instagram.svg": "4c7ce1b03d039e985ccc196099fde994",
"assets/assets/images/instagram2.svg": "9ca0428c76cf41051fed4f0b1bd7215c",
"assets/assets/images/webL.png": "2fbf8e5c400b769053677ef23509540e",
"assets/assets/images/firebase.png": "c7c2e3514a4f34cc2bbad0f999e7b6a7",
"assets/assets/images/mumtaz.png": "3c66ab137b63eb77a60fc3e4e9394b3b",
"assets/assets/images/mumtaz.JPG": "d9ce55b4fc6b72d5e793a770737b5779",
"assets/assets/images/works.jpg": "0907ffb54cb407a07e8f46dceb7e740f",
"assets/assets/images/location.avif": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/contact_image.jpg": "d4e5f70ba04adc3b6c323955ff8b0365",
"assets/assets/images/background.png": "10c81203397572e47ea2ae753f305351",
"assets/assets/images/about.jpeg": "c54cecbd3e3f9e198aa43c2f4fac43f0",
"assets/assets/images/blog.jpg": "548f56bd9468e111aca0e1aeed736c03",
"assets/assets/images/web.jpg": "33bd0bdff5cb1b184c6def34b5df3292",
"assets/assets/images/twitter.svg": "e54bdefe3d0f1abdbf799007cff1ed39",
"assets/assets/images/whatsapp.png": "8632d187ca21f14997d49aa7aaa3b57f",
"assets/assets/images/zubair.JPG": "6208b1f727749bcdafc3ea93b22d4a8b",
"assets/assets/appstore.png": "950038de45e2a3fca1e28fefb1f89b21",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "f1b800f6a9fac877f65a545b9f76c703",
"canvaskit/canvaskit.js.symbols": "d0b3bf92014e698856d505a65b5f0ee9",
"canvaskit/skwasm.wasm": "5a5c6171d2eed658e3b5fff70c4af82c",
"canvaskit/chromium/canvaskit.js.symbols": "e3a8db3bea434c929936f69d84e2f2bd",
"canvaskit/chromium/canvaskit.js": "2f82009588e8a72043db753d360d488f",
"canvaskit/chromium/canvaskit.wasm": "e86670fe2af62cbdd3b75e098f393924",
"canvaskit/canvaskit.js": "7737f5fc722b6a040ac15271ea8d92fb",
"canvaskit/canvaskit.wasm": "567c5aeda8f673d1b76256d2682fd3b9",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
