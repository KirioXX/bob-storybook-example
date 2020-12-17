const path = require('path');
const { resolver } = require('../metro.config');
const root = path.resolve(__dirname, '../../');
const node_modules = path.join(__dirname, '../node_modules');

module.exports = {
  "stories": [
    "../stories/index.ts",
    "../stories/**/*.md"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-knobs",
    "storybook-addon-designs"
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(js|ts|tsx)$/,
      include: path.resolve(root, 'src'),
      use: 'babel-loader',
    });

    // We need to make sure that only one version is loaded for peerDependencies
    // So we alias them to the versions in example's node_modules
    Object.assign(config.resolve.alias, {
      ...resolver.extraNodeModules,
      'react-native': path.join(node_modules, 'react-native-web'),
      'react-native-web': path.join(node_modules, 'react-native-web'),
      '@storybook/react-native': path.join(node_modules, '@storybook/react'),
    });

    // Return the altered config
    return config;
  },
}
