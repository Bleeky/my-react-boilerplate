import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');

const config = {
  entry: srcPath,
  output: {
    path: distPath,
    filename: 'app.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: srcPath,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?minimize',
          ],
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?minimize',
            'sass-loader',
          ],
        }),
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?name=src/assets/images/[name].[ext]',
      },
    ],
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
    }),
    new ExtractTextPlugin({
      filename: 'app.css',
    }),
    new HtmlWebpackPlugin({
      favicon: path.join(srcPath, 'assets/images/favicon.png'),
      hash: true,
      inject: true,
      minify: {
        collapseWhitespace: true,
      },
      template: path.join(srcPath, 'index.html'),
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
};

export default config;
