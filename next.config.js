// next.config.js
const { withPlausibleProxy } = require('next-plausible')

module.exports = withPlausibleProxy()({
  images: {
    domains: ['imgix.cosmicjs.com'],
  },
})
