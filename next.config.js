/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Temporarily ignore ESLint errors during build
  },
  images: {
    domains: ['localhost'],
    // Add any external domains you're loading images from:
    // domains: ['example.com', 'another-domain.com'],
  },
}

module.exports = nextConfig 