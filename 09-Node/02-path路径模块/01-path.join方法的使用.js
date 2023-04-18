// 引入文件模块
const fs = require('fs');
// 引入路径模块
const path = require('path');

// 1. 两个特殊的变量
console.log(__dirname)     // 当前文件所在的目录，不含当前文件名。
console.log(__filename)    // 当前文件所在的目录，含当前文件名及目录。


// 2. 注意事项： ../会抵消前面的路径
// const pathStr = path.join('/a','/b/c','../','/d','e');
// console.log(pathStr)  // \a\b\d\e

// const pathStr = path.join('/a','/b/c','../../','/d','e');
// console.log(pathStr);    // \a\d\e 

// path.join()路径拼接
fs.readFile(path.join(__dirname,'/files/1.txt'),'utf8',function(err,dataStr){
  if(err){
    console.log('读取文件失败！' + err.message);
  }
  console.log('读取文件成功！',dataStr);
});