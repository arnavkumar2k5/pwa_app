const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = {
  webpack: function (config, env) {
    // Inject the service worker into the build
    config.plugins.push(
      new InjectManifest({
        swSrc: './public/service-worker.js',
        swDest: 'service-worker.js',
      })
    );
    return config;
  },
};
