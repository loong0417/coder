
var name = 'yang';

function foo(){
  var name = 'foo';
  console.log(name)
}
var num1 = 20;
var num2 = 30;
var result = num1 + num2;
console.log(result)
foo()  // 函数执行



/**
 * 1. 代码解析：v8引擎内部会帮助我们创建一个对象 GlobalObject => GO
 * 2. 运行代码： 
 *  - V8为了让代码执行，V8引擎内部会有一个执行上下文Execution context stack => ECStack函数调用栈。
 *  - 因为我们执行的全局代码，为了全局代码能够正常执行，炫耀创建一个全局执行期上下文Global Execution context，全局代码需要执行时才会创建。
 */

// 伪代码，GO内容大概是这个样子
// var globalObject={
//   String:'类',
//   Date:'类',
//   setTimeout:'函数',
//   window:globalObject,
//   name:undefined,
//   num1:undefined,
//   num2:undefined,
//   result:undefined
// }