const withImages = require('next-images')
// module.exports = withImages()
module.exports = {
  images: {
    domains: ['via.placeholder.com']
  },
  future: {
    webpack5: true,
  },
  webpack: function (config, options) {
    config.experiments = {}
    return config
  },
  withImages

}

