/** @type {import('next').NextConfig} */

const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");


const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  images: {
    disableStaticImages: true,
  },
  
};

module.exports = withPlugins([withImages], nextConfig);
