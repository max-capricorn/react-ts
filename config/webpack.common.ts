/*
 * @Author: sheng.wang
 * @Date: 2021-03-16 14:08:42
 * @LastEditTime: 2021-03-17 17:06:03
 * @LastEditors: sheng.wang
 * @Description:
 * @FilePath: /react-cli/config/webpack.common.ts
 */
import webpack from 'webpack';
import paths from '../utils/path'

import HtmlWebpackPlugin from 'html-webpack-plugin'

export default <webpack.Configuration>{
  mode: 'development',
  entry: paths.getPath('src/index.tsx'),
  output: {
    path: paths.DIST,
    filename: 'js/[name].[contenthash:8].bundle.js',
    assetModuleFilename: 'images/[name].[hash:8]'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: paths.DIST,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(tsx|js|jsx|ts)$/,
        use: {
          // `.swcrc` can be used to configure swc
          loader: "swc-loader",
          options: {
            // This makes swc-loader invoke swc synchronously.
            sync: true,
            jsc: {
              parser: {
                syntax: "typescript"
              }
            }
          }
        },
        exclude: /(node_modules)/,
      },
      {
        test: /\.(tsx|ts)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        exclude: /\.module\.less$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                compileType: 'icss'
              }
            }
          },
          { loader: 'less-loader' }
        ]
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                compileType: 'icss'
              }
            }
          },
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ico)$/,
        type: 'asset/resource',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024 // 4kb
          }
        },
        // generator: {
        //   filename: 'images/[hash][ext][query]'
        // }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        title: 'My App',
        template: paths.getPath('public/index.html'),
      }
    )
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // },
}

