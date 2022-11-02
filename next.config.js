/** @type {import('next').NextConfig} */
// const withPWA = require("next-pwa");

const nextConfig = {
  publicRuntimeConfig: {
    apikey: process.env.API_KEY,
    
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: []
     

  },
  env: {
    apikey: process.env.API_KEY,
  },

};

module.exports = nextConfig;

