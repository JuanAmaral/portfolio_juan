/** @type {import('next').NextConfig} */

const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");


const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
  async rewrites() {
    return [
      {
        source: "/manifest.webmanifest",
        destination: "/api/manifest",
      },
    ];
  },
};

module.exports = withPlugins([withImages], nextConfig);
