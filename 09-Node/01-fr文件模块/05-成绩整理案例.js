//  1. 导入fs模块，来操作文件
const fs = require('fs');
/**
 * 数据整理前：小红=99 小白=100 小黄=70 小黑=66 小绿=88
 * 数据整理后：小红:99
 *            小白:100
 *            小黄:70
 *            小黑:66
 *            小绿:88
 */
fs.readFile('./files/score.txt','utf8',function(err,dataStr){
  if(err){
    return console.log('读取文件失败' + err.message);
  }
  // console.log('读取文件成功！' + dataStr);
  // 2.1.先把成绩数据，按照空格进行分割
  const arrOld = dataStr.split(' ');
  // 2.2.循环分割后的数组，对每一项数据，进行字符串的替换操作
  const arrNew = [];
  arrOld.forEach(item=>{
    arrNew.push(item.replace('=',':'));
  });
  // 2.3.把新数组中的每一项，进行合并，得到一个新的字符串
  const newStr = arrNew.join('\r\n');
  console.log(newStr);
});
