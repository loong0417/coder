// 有依赖的模块


/**
 * 参数一：
 *  []：数组里面的元素就是依赖的模块，这个是module文件夹中的文件，数组元素的名字一定要和app.js中配置文件引入那里的名字一样。
 * 
 * 参数二：
 *  函数中的参数必须和数组中的元素一一对应，名字可以不一样，但一定要一一对应。
 */
define(['module1'], function(module1) {
  const message = "这是一个有依赖的文件";
  const showMessage = function(){
    console.log(message)
    module1.logMessage();
  }

  return {
    message,
    showMessage
  }
});