// 1. 导入fs模块，来操作文件
const fs = require('fs');

fs.writeFile('./files/file2.txt','哈哈哈哈哈',function(err){
  if(err){
    return console.log('文件写入失败！' + err.message);
  }
  console.log('文件写入成功！')
});