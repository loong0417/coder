// 引入模块
import { m1Name,arr,m1,m2 } from "./module1";
import {m2Name,f1,f2} from "./module2"
import module from './module3'

console.log('模块一的:');
console.log(m1Name,arr)
m1();
m2();

console.log('模块二的:');
console.log(m2Name)
f1();
f2();

console.log('模块三的：');
console.log(module.name)