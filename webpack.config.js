const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const UglifyPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './client/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client/dist')
  },
  context: __dirname,
  resolve: {
    extensions: ['.js', '.jsx', '.json', '*']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      options: {
        presets: ['react', 'es2015']
      }
    },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }]
  },
  plugins: [
    new LiveReloadPlugin({appendScriptTag: true})
    // for production
    // new UglifyPlugin({
    //   parallel: {
    //     cache: true,
    //     workers: 2
    //   }
    // })
  ]
};