/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  transpilePackages: ['@agency/shared'],
};

module.exports = nextConfig;
