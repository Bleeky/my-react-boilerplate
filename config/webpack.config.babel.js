import path from "path";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import TerserJSPlugin from "terser-webpack-plugin";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CompressionPlugin from "compression-webpack-plugin";

const distPath = path.resolve(__dirname, "../dist");
const srcPath = path.resolve(__dirname, "../src");

const config = {
  mode: "production",
  entry: {
    main: path.join(srcPath, "index"),
    vendor: ["react", "react-dom", "react-redux", "react-router-dom", "redux"],
  },
  output: {
    path: distPath,
    filename: "[name].[hash].bundle.js",
    chunkFilename: "[name].[chunkhash].js",
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
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
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
      config$: path.join(srcPath, "config.prod.js"),
    },
    extensions: [".js", ".jsx"],
  },
  devtool: "source-map",
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].[hash].css",
    }),
    new HtmlWebpackPlugin({
      favicon: path.join(srcPath, "assets/images/favicon.png"),
      hash: true,
      inject: true,
      minify: {
        collapseWhitespace: true,
      },
      template: path.join(srcPath, "index.html"),
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new CompressionPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      minRatio: 0.8,
    }),
  ],
};

export default config;
