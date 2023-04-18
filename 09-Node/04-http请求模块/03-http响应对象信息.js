const http = require('http');
const server = http.createServer();

server.on('request',function(req,res){
  // req 请求对象
  // res 响应对象
  console.log(res)
});

server.listen(80,()=>{
  console.log('server running at http://127.0.0.1');
});