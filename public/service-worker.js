workbox.core.setCacheNameDetails({ prefix: 'bento-starter' })

workbox.skipWaiting()
workbox.clientsClaim()

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.suppressWarnings()
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

workbox.routing.registerNavigationRoute('/index.html', {
  /* Routes user by firebase auth  */
  blacklist: [new RegExp('/__/auth/handler'), new RegExp('/__/auth/iframe')]
})

workbox.routing.registerRoute(
  /^https:\/\/fonts/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'fonts.googleapis',
    plugins: []
  }),
  'GET'
)
