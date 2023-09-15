/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      productionBrowserSourceMaps: true,
      async rewrites() {
        return [
          {
            source: '/',
            destination: '/news/1'
          }
        ]
      }
    }
  }

  return {
    /* config options for all phases except development here */
    productionBrowserSourceMaps: true,
    async rewrites() {
      return [
        {
          source: '/',
          destination: '/news/1'
        }
      ]
    }
  }
}
