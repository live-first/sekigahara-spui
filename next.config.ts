import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
  reactStrinctMode: true,
  output: 'export',
  // hot reload
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 200,
      }
    }
    return config
  },
}

export default nextConfig

const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
})
