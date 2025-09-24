// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Allow optimized images from Cloudinary
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
    // Serve modern formats when available
    formats: ['image/avif', 'image/webp'],
    // Encourage long CDNs/browser caching for remote images
    minimumCacheTTL: 31536000, // 1 year (seconds)
  },
};

module.exports = nextConfig;
