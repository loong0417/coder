// 1. 导入fs模块，来操作文件
const fs = require('fs');
/**
 * 2. 调用fs.writeFile()方法，可以向指定文件中写入内容
 *    参数1：必选参数，需要指定一个文件路径的字符串，表示文件的存放路径
 *    参数2：必选参数，表示要写的内容
 *    参数3：可选参数，表示以什么格式写入文件内容，默认值是utf8
 *    参数4：必选参数，文件写入完成后的回调函数
 */
fs.writeFile('./files/file2.txt','hello world',function(err){
  // 2.1.如果文件写入成功，则err的值等于null
  // 2.2.如果文件写入失败，则err的值等于一个 错误对象
  console.log(err);
});