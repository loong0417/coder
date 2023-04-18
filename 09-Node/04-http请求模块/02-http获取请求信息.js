const http = require('http')
const server = http.createServer();
server.on('request',(req)=>{
  // req.url 是客户端请求的URL地址
  const url = req.url;
  // req.method 是客户端请求的 method 类型
  const method = req.method;
  const str = `Your request url is ${url}, and request method id ${method}`;
  console.log(str)
});

server.listen(80,()=>{
  console.log('server running at http://127.0.0.1');
});