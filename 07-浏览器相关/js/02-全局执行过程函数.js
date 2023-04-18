/**
 * 1. 代码解析：v8引擎内部会帮助我们创建一个对象 GlobalObject => GO
 * 2. 运行代码： 
 *  - V8为了让代码执行，V8引擎内部会有一个执行上下文Execution context stack => ECStack函数调用栈。
 *  - 因为我们执行的全局代码，为了全局代码能够正常执行，炫耀创建一个全局执行期上下文Global Execution context，全局代码需要执行时才会创建。
 * 
 * 
 */
function foo(){
  console.log('foo');
}
foo();