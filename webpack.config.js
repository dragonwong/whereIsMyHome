const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const HOST_PROD = '0.0.0.0';
const HOST_BETA = '0.0.0.0';
const PROJECT_NAME = 'home';
/**
 * ❤️
 * Hey baby,
 * Add new page here:
 */
const PAGES = [
  'find',
];

/**
 * ️⚠️
 * YOU DON'T NEED TO MODIFY THIS, BABY.
 * BE SMART.
 */

module.exports = {
  entry: (() => {
    const obj = {};
    PAGES.forEach(page => {
      obj[page] = `./src/pages/${page}/index.js`;
    });
    return obj;
  })(),
  output: {
    filename: '[name]/index.[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: process.env.NODE_ENV === 'production' ? `//${HOST_PROD}/${PROJECT_NAME}` : `//${HOST_BETA}/${PROJECT_NAME}`,
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
      },
    ]
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: (() => {
    const arr = [];

    arr.push(new CleanWebpackPlugin(['dist']));
    
    PAGES.forEach(page => {
      arr.push(new HtmlWebpackPlugin({
        template: `./src/pages/${page}/index.html`,
        chunks: [page],
        filename: `${page}/index.html`,
      }));
    });

    arr.push(new UglifyJSPlugin());

    return arr;
  })(),
};