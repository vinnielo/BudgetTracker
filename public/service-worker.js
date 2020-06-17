console.log("Hello from your service worker!");

const FILES_TO_CACHE = [
  "/",
  "./index.html",
  "./manifest.webmanifest",
  "./styles.css",
  "./db.js",
  "./index.js",
  "./icons/icon-192x192.png",
  "./icons/icon-512x512.png",
];

const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";