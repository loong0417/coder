const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


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
    ]
  },

  // 4. plugins：插件，可用于执行范围更广的任务。插件范围包括，从打包优化和压缩，一直到重新 定义环境中的变量等；
  plugins: [
    // 默认会创建一个空的，目的就是为了自动引入打包的资源（js/css）
    new HtmlWebpackPlugin(),
  ],
    
   // 5. mode：模式，指示 webpack 使用相应模式的配置：（都会自动启用一些插件，生产模式启用插件更多）
   mode: 'development',
 
}