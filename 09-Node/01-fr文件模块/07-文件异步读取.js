const path = require('path');
const fs = require('fs');

const filePath  = path.join(__dirname,'files','file3.txt');

/**
* 模块名称: 文件异步读取
* 代码描述: 文件异步读取使用函数 readFile(文件路径,'utf-8',callback(error,data){
*  参数1：文件路径
*  参数2：文件格式
*  参数3：回调函数，回调函数里面有两个参数，参数1：错误信息，参数2：返回数据
* })函数，需要三个参数
* Author:杨小样随笔
* 创建时间:2023/03/04 19:43:35
*/
const fileRead = fs.readFile(filePath,'utf-8',function(error,data){
  console.log(data)      // 文件内容
  console.log(error)     // 空对象 null
});