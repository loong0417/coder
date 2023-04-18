
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// 添加版权插件
const webpack = require('webpack');


module.exports = {
 
  entry: './src/main.js',

  output: {
    filename: 'main.js',   // 输出文件名
    path: path.resolve(__dirname,'build'),    // 输出文件及地址
    // publicPath:'./'
  },

  // 3. loader： loader 让 webpack 能够去处理那些非 javascript 资源css、img等，将它们处理成 webpack 能够识别的资源，可以理解成一个翻译的过程（webpack自身只能理解 js 和 json ）;

  module: {
    rules:[
      
        // 这个位置前后一定不能错，因为是从右向左，从下到上加载的 
        {
          test: /\.(css|less)$/,
          use: ['style-loader','css-loader','less-loader']
        }, 

        {
          test: /\.(jpg|png|gif)$/,
          use:[
            {
              loader: 'url-loader',
              options: {
                name: 'img/[name][hash:10].[ext]', 
                // 当加载的图片，小于 limit 时，会将图片编译成 base64 字符串形式 
                // 对于大于 limit 的图片，需要使用 file-loader 插件进行压缩，然后会将图片重新命令存放在 build 目录下面
                // 命名规则采用的是 hash 哈希命名方式；
                limit: 10000,
              }
            }
          ]
        },

        {
          test: /\.vue$/,
          use: ['vue-loader'],
        }
    ]
  },
  /*
    vue 不同的构建版本：
    1. runtime-only：代码中，不可以包含 template
    2. runtime-compiler：代码中可以有 template ，因为有 compiler 可以用于编译 template
  */
  resolve: {
    alias: {
      // node_modules 目录下面的 vue/dist/vue.esm.js 下面就包含了 compiler
      'vue$': 'vue/dist/vue.esm.js',
    }
  },

  // 4. plugins：插件，可用于执行范围更广的任务。插件范围包括，从打包优化和压缩，一直到重新 定义环境中的变量等；
  plugins: [
    // 默认会创建一个空的，目的就是为了自动引入打包的资源（js/css）
    new HtmlWebpackPlugin({
      template: './src/index.html',

    }),
    new VueLoaderPlugin(),
    new webpack.BannerPlugin("杨小样 code ©copyright all"),
  ],
    
   // 5. mode：模式，指示 webpack 使用相应模式的配置：（都会自动启用一些插件，生产模式启用插件更多）
   mode: 'development',
 
}