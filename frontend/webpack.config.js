const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: [
    './dev/index.js',
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      { test: /\.js[x]?$/, loader: 'babel-loader', exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      { test: /\.styl$/, loader: 'style-loader!css-loader!postcss-loader!stylus-loader', exclude: /node_modules/}, 
      { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader', exclude: /node_modules/}, 
      
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './dev/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer( { browsers: ['IE 9', 'IE 10', 'IE 11', 'last 2 versions'] } ),
        ]
       }
    })
  ]


  // stylus: {
  //   use: [require('nib')()],
  //   import: ['~nib/lib/nib/index.styl']
  // },

}