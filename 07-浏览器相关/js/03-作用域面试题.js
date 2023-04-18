// 面试题1：
// var n = 100;
// function foo(){
//   n = 200;
// }
// console.log(n);  // 100
// foo();
// console.log(n);  // 200


// 面试题2：
// function foo(){
//   console.log(n);   // undefined
//   var n = 200;
//   console.log(n);  // 200
// }
// var n = 10;
// foo();

// 面试题3：
// var n = 100;
// function foo1(){
//   console.log(n)   // 100
// }

// function foo2(){
//   var n = 200;
//   console.log(n);  // 200
//   foo1();
// }
// foo2();
// console.log(n);   // 100

// 面试题4：
// var a = 100;
// function foo(){
//   console.log(a);  // undefined
//   return;
//   var a = 100;
// }
// foo();

// 面试题5：
// function foo(){
// 这里如果使用var声明的变量在v8引擎中会加入到AO中函数作用域，如果只声明不赋值会直接写到全局里面
//   m = 100;
// }
// foo();
// console.log(m) // 100

// 面试题6：
// function foo(){
//   var a = b = 10;
//   // 会转化为 var a = 10  b = 10 
// }
// foo();

// console.log(a); // a is not defined
// console.log(b); // 10
