const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const nextTranslate = require('next-translate')

/**
 * @type {import('next').NextConfig}
 */
module.exports = nextTranslate(
  withBundleAnalyzer({
    eslint: {
      dirs: ['src'],
    },
    images: {
      domains: [
        'res.cloudinary.com',

        // Spotify Album
        'i.scdn.co',
      ],
    },
    webpack: (config, { dev, isServer }) => {
      // Replace React with Preact only in client production build
      if (!dev && !isServer) {
        Object.assign(config.resolve.alias, {
          react: 'preact/compat',
          'react-dom/test-utils': 'preact/test-utils',
          'react-dom': 'preact/compat',
        });
      }

      return config;
    },
    typescript: {
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      ignoreBuildErrors: true,
    },
  })
)

