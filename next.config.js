const path = require('path');

module.exports = {
 reactStrictMode: true,
 webpack(config) {
    config.resolve.extensions.push('.svg');

    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    });

    return config;
 },
};