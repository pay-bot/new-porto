module.exports = {
  swcMinify: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false, stream: false, constants: false };

    return config;
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
}
