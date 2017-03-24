import path from 'path'
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
  devtool: 'cheap-inline-module-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.js')
  ],
  output: {
    path: '/',
    publicPath: '/'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      { from: 'images', to: 'images' },
      {from: 'js', to: 'js', force: true}
    ])
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
            path.join(__dirname, 'client'),
            path.join(__dirname, 'server/shared')
        ],
        exclude: /node_modules/,
        loaders: [ 'react-hot', 'babel' ]
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/, 
        loader: 'url-loader?limit=8192' 
      }
    ]
  },
  resolve: {
    extentions: [ '', '.js' ]
  },
  node: {
    net: 'empty',
    dns: 'empty'
  }
}
