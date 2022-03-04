const { withExpo } = require('@expo/next-adapter')
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')([
  'ui',
  'react-native-web',
  'solito',
  'dripsy',
  '@dripsy/core',
  'moti',
  '@motify/core',
  '@motify/components',
])

module.exports = withPlugins([withTM, [withExpo, { projectRoot: __dirname }]], {
  webpack5: true,
})
