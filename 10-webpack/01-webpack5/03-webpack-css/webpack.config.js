const path = require('path');

// 1. 导入html插件，得到一个构造函数
const HtmlPlugin = require('html-webpack-plugin');

// 2. 创建 html 插件的实例对象
const htmlPlugin = new HtmlPlugin({
  template: './src/index.html',                     // 指定原文件的存放路径
  filename: './index.html',                         // 指定生成文件的存放路径
});


module.exports = {
  entry: path.join(__dirname,'./src/index.js'),     // 打包入口文件的路径
  output: {
    path: path.join(__dirname,'./dist'),            // 输出文件的存放路径
    filename: 'bundle.js'                           // 输出文件的名称
  },
  devServer: {
    open: true,                                     // 初次打包完成自动浏览
    host: '127.0.0.1',                              // 实时打包所使用的主机地址
    port: 80                                        // 实时打包所使用的端口号
  },
  // 3. 通过Plugins节点，使htmlPlugin插件生效
  plugins:[htmlPlugin],                             
  "mode": 'development',    // mode用来指定构建模式。可选值：development和production。
  
  // 所有第三方插件模块匹配规则
  module:{
    // 文件后缀匹配规则
    rules:[
      {test:/\.css$/,use:['style-loader','css-loader','less-loader']}
    ]
  },

} 