// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    // Only allow your Cloudinary uploads path
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dwoxop5y0/image/upload/**',
      },
    ],

    // Modern formats when available
    formats: ['image/avif', 'image/webp'],

    // Tune srcset generation to your breakpoints (keeps bundles smaller)
    deviceSizes: [360, 640, 768, 1024, 1280, 1536],
    imageSizes: [160, 320, 480],

    // Cache optimized remote images aggressively
    minimumCacheTTL: 31536000, // 1 year (seconds)
  },
};

module.exports = nextConfig;
