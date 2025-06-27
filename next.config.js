/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    
  },
  images: {
    domains: ["images.unsplash.com", "cdn.pixabay.com"], 
  },
  reactStrictMode: true, 
  trailingSlash: true, 
};

module.exports = nextConfig;
