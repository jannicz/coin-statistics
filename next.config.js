const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

/**
 * @see https://www.npmjs.com/package/next-pwa
 * @see https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.RuntimeCachingEntry
 */
module.exports = withPWA({
  pwa: {
    dest: 'public',
    sw: '/sw.js',
    register: true,
    scope: '/',
    runtimeCaching: runtimeCaching,
    // disable: process.env.NODE_ENV !== 'production',
    // publicExcludes: ['!img/super-large-image.jpg'],
    // buildExcludes: [/chunks\/images\/.*$/],
  }
});
