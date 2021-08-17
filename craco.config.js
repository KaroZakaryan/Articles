const CracoAlias = require('craco-alias');
const {ESLINT_MODES} = require('@craco/craco');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CracoSassResourcesLoader = require('craco-sass-resources-loader');

const path = require('path');

module.exports = {
  eslint: {
    mode: ESLINT_MODES.file,
  },
  webpack: {
    plugins: [
      new StyleLintPlugin({
        configBasedir: __dirname,
        failOnError: true,
        context: path.resolve(__dirname, 'src'),
        files: ['**/*.scss'],
      }),
    ],
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        baseUrl: '.',
        source: 'tsconfig',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
    {
      plugin: CracoSassResourcesLoader,
      options: {
        resources: './src/styles/index.scss',
      },
    },
  ],
};
