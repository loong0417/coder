// 依赖 node 全局 path
const path = require('path');

module.exports = {
  // entry 入口文件
  entry:"./src/main.js",
  // 出口文件，是一个对象，path 是动态生成的目录路径，filename 生成的文件名字
  output:{
    path: path.resolve(__dirname,'dist'),
    filename:'bundle.js'
  },
}