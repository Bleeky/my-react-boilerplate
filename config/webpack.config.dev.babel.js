import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const distPath = path.resolve(__dirname, "../dist");
const srcPath = path.resolve(__dirname, "../src");

const config = {
  mode: "development",
  entry: {
    main: ["react-hot-loader/patch", path.join(srcPath, "index.dev")],
    vendor: ["react", "react-dom", "react-redux", "react-router-dom", "redux"],
  },
  output: {
    path: distPath,
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.js",
    publicPath: "/",
  },
  module: {
    noParse: [/moment.js/],
    rules: [
      {
        test: /\.jsx?$/,
        include: srcPath,
        loader: "babel-loader",
      },
      {
        test: /\.s?[ac]ss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: "file-loader?name=src/assets/images/[name].[ext]",
        options: {
          limit: 10 * 1024,
        },
      },
      {
        test: /\.svg$/,
        loader: "svg-url-loader",
        options: {
          limit: 10 * 1024,
          noquotes: true,
        },
      },
    ],
  },
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
      config$: path.join(srcPath, "config.dev.js"),
    },
    extensions: [".js", ".jsx"],
  },
  devtool: "#cheap-module-eval-source-map",
  devServer: {
    hot: true,
    watchOptions: {
      poll: true,
    },
    compress: true,
    port: 9001,
    contentBase: srcPath,
    historyApiFallback: true,
  },
  performance: {
    hints: false,
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      favicon: path.join(srcPath, "assets/images/favicon.png"),
      inject: true,
      template: path.join(srcPath, "index.html"),
    }),
  ],
};

export default config;
