// 引入path路径模块
const path = require('path');

// 定义的，文件的存放路径
const fpath  = 'a/b/c/d/index.html';
var fullName = path.basename(fpath);
console.log(fullName)       // output index.html

var nameWithoutExt = path.basename(fpath,'.html');
console.log(nameWithoutExt); // output index


