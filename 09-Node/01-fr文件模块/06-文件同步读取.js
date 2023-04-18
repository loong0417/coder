const path = require('path');
const fs = require('fs');

const filePath  = path.join(__dirname,'files','file3.txt');

/**
* 模块名称: 文件同步读取（使用比较少）
* 代码描述: 使用readFileSync()函数进行同步读取，返回的是一个二进制Buffer。
*          Buffer可以通过.toString()转换车呢个可以看得懂的信息。
* Author:杨小样随笔
* 创建时间:2023/03/04 19:39:44
*/
const fsRead = fs.readFileSync(filePath);
console.log(fsRead)