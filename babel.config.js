module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@services': './src/services',
        '@repositories': './src/repositories',
        '@errors': './src/errors',
        '@entities': './src/database/entities',
      },
    }],
    'babel-plugin-transform-typescript-metadata',
    '@babel/plugin-transform-typescript',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: false }],
  ],
};
