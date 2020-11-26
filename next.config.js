// next.config.js
const withImages = require('next-images')
module.exports = withImages()
module.exports = {
  images: {
    domains: ['https://imgix.cosmicjs.com/'],
  },
}
