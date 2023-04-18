const path = require('path');
const fs = require('fs');


// 1. 修改文件
// fs.renameSync('旧文件名','新文件名');
// 这种方式报错，no such file or directory, rename 'file4.txt' -> 'lastFile.txt'
// fs.renameSync('file4.txt','lastFile.txt')   
// 下面三种解决方案：
// fs.renameSync('D:\\CODER\\04-node\\01-fr文件模块\\file4.txt',"D:\\CODER\\04-node\\01-fr文件模块\\lastFile.txt")
// fs.renameSync(__dirname/'lastFile.txt',__dirname/'file4.txt')  // The "oldPath" argument must be of type string or an instance of Buffer or URL. Received type number (NaN)
fs.renameSync(`${__dirname}/lastFile.txt`,`${__dirname}/file4.txt`)
// 右键在文件资源管理器中显示。输入命令： node 08-文件操作常用方法.js 也可以解决。

// 2. 获取当前目录下所有文件名
// const dirName=fs.readdirSync(__dirname)
// console.log(dirName)

// 3. str.strWith(),str.strEnd(),str.substring() 字符串操作