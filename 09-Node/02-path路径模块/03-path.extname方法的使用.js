const path = require('path');

// 定义的，文件的存放路径
const fpath  = 'a/b/c/d/index.html';
var fullName = path.extname(fpath);
console.log(fullName)       // output .html
