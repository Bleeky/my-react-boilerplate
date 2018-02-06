import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');

const config = {
  entry: {
    main: [
      'react-hot-loader/patch',
      'webpack/hot/only-dev-server',
      path.join(srcPath, 'index.dev'),
    ],
  },
  output: {
    path: distPath,
    filename: '[name].[hash].bundle.js',
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
        use: [
          {
            loader: 'style-loader',
            options: {
              insertAt: 'top',
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?name=src/assets/images/[name].[ext]',
      },
    ],
  },
  resolve: {
    alias: {
      config$: path.join(srcPath, 'config.dev.js'),
    },
    extensions: [
      '.js',
      '.jsx',
    ],
  },
  devtool: 'eval',
  devServer: {
    host: '0.0.0.0',
    port: 5050,
    contentBase: srcPath,
    historyApiFallback: true,
    hot: true,
    publicPath: '/',
    disableHostCheck: true,
    compress: true,
  },
  performance: {
    hints: false,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      favicon: path.join(srcPath, 'assets/images/favicon.png'),
      hash: true,
      inject: true,
      template: path.join(srcPath, 'index.html'),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      },
    }),
  ],
};

export default config;
