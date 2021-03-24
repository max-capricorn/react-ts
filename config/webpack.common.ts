/*
 * @Author: sheng.wang
 * @Date: 2021-03-16 14:08:42
 * @LastEditTime: 2021-03-24 14:19:07
 * @LastEditors: sheng.wang
 * @Description:
 * @FilePath: /react-cli/config/webpack.common.ts
 */
import webpack from 'webpack';
import paths from '../utils/path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin'
import settings from '../src/defaultSetting'
import webpackbar from 'webpackbar';
import glob from 'glob'
import PurgecssPlugin from 'purgecss-webpack-plugin'
// import PurifyCSS from 'purifycss-webpack'
const isDev = process.env.NODE_ENV === 'development';
//extract-text-webpack-plugin
const PATHS = {
  src: paths.getPath('src')
}
export default <webpack.Configuration>{
  mode: 'development',
  resolve: {
    alias: {
      '@': paths.getPath('src'),
      'utils': paths.getPath('utils')
    },
    extensions: ['.tsx', '.ts', '.js']
  },
  entry: {
    app: paths.getPath('src/app.tsx'),
    vendor: [
      'lodash', 'react', 'react-dom', 'react-router', 'react-router-dom'
    ]
  },
  output: {
    path: paths.DIST,
    filename: 'js/[name].[chunkhash:8].[contenthash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].[contenthash:8].js',
    clean: true,
    publicPath: './',
    // assetModuleFilename: 'images/[name][hash:8][ext]'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: paths.DIST,
    port: 9000,
    open: true,
    hot: true,
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
          {
            loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              esModule: true,
              modules: {
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64]'
              }
            }
          },
          { loader: 'postcss-loader' },
          {
            loader: 'less-loader',

          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [
          {
            loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              esModule: true,
              modules: {
                localIdentName: isDev ? '[path][name]__[local]' : '[contenthash:base64]'
              }
            }
          },
          { loader: 'postcss-loader' },
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ico)$/i,
        type: 'asset/resource',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024 // 8kb
          }
        },
        generator: {
          filename: 'images/[name][contenthash:8][ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][contenthash:8][ext]'
        }
      }
    ],
  },
  plugins: [
    new webpackbar({}),
    new HtmlWebpackPlugin(
      {
        title: settings.title,
        template: paths.getPath('public/index.html'),
      }
    ),
    new MiniCssExtractPlugin(
      {
        filename: 'css/[name].[contenthash:8].[chunkhash:8].css',
        linkType: 'text/css',
      }
    ),
    new PurgecssPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    }),
  ],
  optimization: {
    // minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true
      }),
    ],
    removeAvailableModules: false,
    runtimeChunk: 'single',
    splitChunks: {
      minSize: 30000,
      minChunks: 2,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 2
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: 20,
          chunks: "all"
        },
        default: {
          minChunks: 2,
          priority: 10,
          reuseExistingChunk: true
        }
      }
    }
  },
  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // },
}

