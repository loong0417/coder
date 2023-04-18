// 1.1 导入 fs 模块
const fs = require('fs');
// 1.2 导入 path 模块
const path = require('path');

// 1.3 定义正则表达式，分别匹配<style></style>和<script></script>标签
const regStyle = /<style>[\s\S]*<\/style>/;
const regScript = /<script>[\s\S]*<\/script>/;

// 2.1 调用 fs.readFile() 方法读取文件
fs.readFile(path.join(__dirname,'./素材/index.html'),'utf-8',function(err,dataStr){
  // 2.2 读取 HTML 文件失败
  if(err){
    return console.log('读取HTML文件失败！'+err.message);
  }
  resolveCSS(dataStr);
  resolveJS(dataStr);
  resolveHTML(dataStr);
});

// 3.1 定义处理 css 样式的方法
function resolveCSS(htmlStr){
  // 3.2 使用正则表达式提取内容，exec() 方法用于检索字符串中的正则表达式的匹配。
  const r1 = regStyle.exec(htmlStr);
  // 3.3 提取出来的样式字符串，进行字符串的 replace 替换操作
  const newCSS = r1[0].replace('<style>','').replace('</style>','');
  // 3.4 调用 fs.writeFile() 方法，提取的样式，写入到 clock 目录中，index.css 的文件里面
  fs.writeFile(path.join(__dirname,'./clock/index.css'),newCSS,function(err){
    if(err){
      return console.log('写入CSS样式失败！',+ err.message);
    }
    console.log('写入CSS样式文件成功！');
  })
}

// 4.1 定义处理 js 脚本的方法
function resolveJS(htmlStr){
  // 4.2 通过正则验证提取对应的 <script></script> 标签内容
  const r2 = regScript.exec(htmlStr);
  // 4.3 提取出来的内容做进一步处理
  const newJS = r2[0].replace('<script>','').replace('</script>','');
  // 4.4 将处理的结果，写入到 clock 目录中的 index.js 文件里面
  fs.writeFile(path.join(__dirname,'./clock/index.js'),newJS,function(err){
    if(err){
      return console.log('写入 javascript 脚本失败！');
    }
    console.log('写入JS脚本成功！');
  });
}

// 5.1 定义处理HTML结构的方法
function resolveHTML(htmlStr){
  // 5.2 将字符串调用 replace 方法，把内嵌的style和script标签，替换为外联的 link 和 script。
  const newHTML = htmlStr.replace(regStyle,'<link rel="stylesheet" href="./index.css">').replace(regScript,'<script src="./index.js"></script>');
  // 5.3 写入 index.html 这个文件
  fs.writeFile(path.join(__dirname,'./clock/index.html'),newHTML,function(err){
    if(err){
      return console.log('写入 HTML 文件失败！',+err.message);
    }
    console.log('写入 HTML 页面成功！');
  });
}
