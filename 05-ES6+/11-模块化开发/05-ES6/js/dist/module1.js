'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.m1 = m1;
exports.m2 = m2;
// 导出模块方法1：
var m1Name = exports.m1Name = '模块1';
var arr = exports.arr = [1, 2, 3, 4];

function m1() {
  console.log('这是模块1的m1');
}

function m2() {
  console.log('这是模块1的m2');
}