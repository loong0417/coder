// 没有依赖的模块
define(()=>{
  const logMessage = () =>{
    console.log('这是个没有依赖的模块');
  }
  return {logMessage}
});