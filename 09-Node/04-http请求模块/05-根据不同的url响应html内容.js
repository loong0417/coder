const http = require('http')
const server = http.createServer();
/**
* 模块名称: 使用请求的url地址完成页面重定向
* 代码描述:
* Author:杨小样随笔
* 创建时间:2023/03/08 10:12:59
*/
server.on('request',(rep,res)=>{
  // 1. 获取请求的url地址
  const url = rep.url;
  // 2. 设置默认的响应内容为  404 NOT FOUND
  let content = '<h1>404 Not Found！！！</h1>';
  // 3. 判断用户请求是否为 / 或者 /index.html 首页
  if(url === '/' || url === '/index.html'){
    content = '<h1>首页</h1>';
    // 4. 判断用户请求是否为 /about.html 关于页面
  }else if(url === '/about.html'){
    content = '<h1>关于页面</h1>';
  }
  // 5. 设置 Content-Type 响应头，防止中文乱码
  res.setHeader('Content-Type','text/html;charset=utf-8');
  // 6. 使用 res.end() 把内容响应给客户端
  res.end(content);
});

server.listen(80,()=>{
  console.log('server running at http://127.0.0.1');
});

