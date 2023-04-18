// 导出模块方法2
const m2Name = '模块2';

function f1(){
  console.log('这是模块2的f1');
}

function f2(){
  console.log('这是模块2的f2');
}
// as 后面是取别名，给函数f1取了一个别名
// export {m2Name,f1 as demo1,f2 as demo2}

export {m2Name,f1,f2}