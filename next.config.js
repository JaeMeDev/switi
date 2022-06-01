const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withBundleAnalyzer(
  withPWA({
    eslint: {
      dirs: ['.'],
    },
    pwa: {
      disable: process.env.NODE_ENV === 'development',
      dest: 'public',
      runtimeCaching,
    },
    poweredByHeader: false,
    reactStrictMode: true,
    compiler: {
      reactRemoveProperties: process.env.NODE_ENV === 'production' && {
        properties: ['^data-test'],
      },
      removeConsole: {
        exclude: ['error'],
      },
    },
  }),
);
