/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {     
      disableStaticImages: true,
      domains: ['*'],
      remotePatterns: [      
          {         
            protocol: "https",
              hostname: "**",
          },  
        ],  
      },
  };
  

module.exports = nextConfig
