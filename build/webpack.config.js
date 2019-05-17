const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
// const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  mode: "production",
  // entry: { lzq19515: "./src/lzq19515.js", "lzq19515.min": "./src/lzq19515.js" },
  entry: "./src/lzq19515.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    // filename: "[name].js",
    filename: "lzq19515.js",
    libraryTarget: "umd",
    globalObject: "this",
    // libraryExport: 'default',
    library: "LZQ"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("./styles/lzq19515.css"),
    new CleanWebpackPlugin()
  ]
  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     new UglifyjsWebpackPlugin({
  //       include: /\.min\.js$/
  //     })
  //   ]
  // }
};
