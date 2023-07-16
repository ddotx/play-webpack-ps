const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let production = process.env.NODE_ENV === "production";

let config = (module.exports = {
  // entry: ["./src/index.js", "./src/home.js"],
  entry: ["./src/index", "./src/home"],
  // entry: {
    // index: "./src/index",
    // home: "./src/home",
  // },
  output: {
    filename: "main.js",
    // filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    // rules: [
    //     {
    //         test: /\.js$/,
    //         exclude: /node_modules/,
    //         use: {
    //             loader: 'babel-loader',
    //             options: {
    //                 presets: [
    //                     ['@babel/preset-env']
    //                 ]
    //             }
    //         }
    //     }
    // ]
    rules: [
      {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: "ts-loader"
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        // use: ["style-loader", "css-loader"] // ! last loader is executed first
        use: [MiniCssExtractPlugin.loader, "css-loader"]
    }
  ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "bundle.css"
    })
  ],
  resolve: {
    extensions: [".ts", ".js"],
  },
  devtool: "inline-source-map",
  mode: "development",
  devServer: {
    watchFiles: ["./src/**/*", "index.html"],
    static: "./dist",
  },
});

if (production) {
  config.mode = "production";
  config.devtool = "inline-source-map";
}

module.exports = config;
