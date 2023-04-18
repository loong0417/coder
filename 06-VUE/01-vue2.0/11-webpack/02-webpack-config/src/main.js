// commonjs导入方式
const { add,mul } = require("./tool.js")
console.log(add(10,20));
console.log(mul(10,20));

// es6导入方式
import { name,age,job } from "./info.js";

console.log(name);
console.log(age);
console.log(job);