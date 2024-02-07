const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
const path = require('path')
const { merge } = require('webpack-merge')

const config = merge(
  {
    entry: './src/index',
    mode: 'development',
    devServer: {
      static: path.join(__dirname, 'dist'),
      port: 4002,
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      ],
    },

    plugins: [
      new ModuleFederationPlugin({
        name: 'app1',
        filename: 'remoteEntry.js',
        exposes: {
          './App11': './src/App11',
          './App12': './src/App12',
          './init': './src/index',
        },
        shared: {
          'react': { singleton: true },
          'react-dom': { singleton: true },
        },
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ],
  },
  {
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      ],
    },
    devServer: {
      hot: true,
    },
  }
)

console.log('config: ', JSON.stringify(config, null, 2))

module.exports = config
