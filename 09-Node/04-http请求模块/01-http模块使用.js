// 搭建第一个后端程序

// 1. 导入http模块
const http = require('http');

// 2. 定义服务器程序的端口（端口如果是80端口就可以省略）
const port = 8080;

// 3. 创建服务器对象
const server = http.createServer((request,response)=>{
  // 这里的代码每收到一次请求就会执行一次
  // request 请求对象  response 响应对象
  response.end('hello node.js');
});

// 4.（启动服务器）调用服务器的监听方法，让服务器监听浏览器请求
server.listen(port,(error)=>{
  // 用来表示监听有没有出错
  console.log(error)     // undefined
  console.log('服务器已经运行成功！')
});