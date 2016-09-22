const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/javascripts/app.js',
  output: {
    path: path.join(__dirname, './'),
    filename: 'dist/bundle.js'
  },

  module: {
    loaders: [{
      test: path.join(__dirname, 'src'),
      exclude: /node_modules|libs|vendor/,
      loader: 'babel-loader',
      query: {
        presets: 'es2015',
      },
    }, {
      test: /\.handlebars$/,
      loader: 'handlebars-loader'
    }]
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', 'handlebars'],
  },
  plugins: [
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin()
  ],
  stats: {
    // Nice colored output
    colors: true
  },
  // Create Sourcemaps for the bundle
  devtool: 'source-map',
};
