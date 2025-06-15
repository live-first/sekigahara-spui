import nextPWA from 'next-pwa'

const withPWA = nextPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
})

const nextConfig = withPWA({
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
})

export default nextConfig
