const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  target: 'node',
  entry: './src/index.js',
  output: {
    path: __dirname + "/dist/",
    filename: 'index.js',
    library: 'rebtel.core-ui',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ["*", ".js", ".vue", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'vue-style-loader'
        })
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
     ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new ExtractTextPlugin("style.css"),
    new UglifyJsPlugin({
        uglifyOptions: {
            compress: {
              warnings: false
            }
        },  
        minimize : true,
        sourceMap : false,
        mangle: true
    })
  ]
}