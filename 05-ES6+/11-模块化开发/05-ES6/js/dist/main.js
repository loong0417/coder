"use strict";

var _module2 = require("./module1");

var _module3 = require("./module2");

var _module4 = require("./module3");

var _module5 = _interopRequireDefault(_module4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('模块一的:'); // 引入模块

console.log(_module2.m1Name, _module2.arr);
(0, _module2.m1)();
(0, _module2.m2)();

console.log('模块二的:');
console.log(_module3.m2Name);
(0, _module3.f1)();
(0, _module3.f2)();

console.log('模块三的：');
console.log(_module5.default.name);