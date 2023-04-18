'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 导出模块方法2
var m2Name = '模块2';

function f1() {
  console.log('这是模块2的f1');
}

function f2() {
  console.log('这是模块2的f2');
}
// as 后面是取别名，给函数f1取了一个别名
// export {m2Name,f1 as demo1,f2 as demo2}

exports.m2Name = m2Name;
exports.f1 = f1;
exports.f2 = f2;