// 1.1 导入 http 模块
const http = require('http');
// 1.2 导入 fs 模块
const fs = require('fs');
// 1.3 导入 path 模块
const path = require('path');

// 2.1 创建 web 服务器
const server = http.createServer();
// 2.2 监听 web 服务器的 request 事件
server.on('request',(req,res)=>{
  // 3.1 获取到客户端的 URL 地址
  // /clock/index.html
  // /clock/index.css
  // /clock/index.js
  const url = req.url;
  // 3.2 把请求的URL地址映射为具体文件的存放路径
  // const fpath = path.join(__dirname,url);

  // 5.1 预定义一个空白的文件存放路径
  let fpath = '';
  if(url === '/'){
    fpath = path.join(__dirname,'./clock/index.html');
  }else{
    // /index.html
    // /index.css
    // /index.js
    fpath = path.join(__dirname,'/clock',url);
  }
  // 4.1 根据"映射"过来的文件路径读取文件内容
  fs.readFile(fpath,'utf-8',function(err,dataStr){
    if(err){
      // 4.2 读取文件失败，向客户端响应固定的"错误消息"
      return res.end('404 Not Found!');
    }
    // 4.3 读取文件成功，读取成功的内容，响应给客户端
    res.end(dataStr);
  });
});

server.listen(80,()=>{
  console.log('server running at http://127.0.0.1');
});