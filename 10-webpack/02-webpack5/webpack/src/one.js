let n = 100;

function add(x,y){
  return x+y;
}

function demo(string){
  return string;
}

// 使用common.js 暴露变量及函数
module.exports = {
  n,
  add,
  demo,
}