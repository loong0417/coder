const http = require('http');
const server = http.createServer();

server.on('request',(req,res)=>{
  // 定义一个字符串，包含中文的内容
  const str = `您请求的 URL 地址是${req.url}，请求的 method 类型为 ${req.method}`;
  // 在浏览器中可以看到乱码问题，解决方式：使用响应对象的 setHeader()方法。
  res.setHeader('content-Type','text/html;charset=utf-8');
  res.end(str);
});

server.listen(80,()=>{
  console.log('server running at http://127.0.0.1');
});