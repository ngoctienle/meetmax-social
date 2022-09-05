// const path = require('path')
const { URL } = require('url')

module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      loader: 'graphql-tag/loader'
    })

    // config.resolve.alias = {
    //   ...config.resolve.alias,
    //   '~': path.resolve(__dirname)
    // }

    return config
  },
  async rewrites() {
    return [
      {
        source: '/graphql/:pathname*',
        destination: new URL('graphql', process.env.MAGENTO_URL).href
      }
    ]
  }
}
