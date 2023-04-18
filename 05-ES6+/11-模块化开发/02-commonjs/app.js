// 引入第三方模块，通常会放到自定义模块字上面
const uns = require('underscore');


var module1 = require('./module/module1.js'),
    module2 = require('./module/module2.js'),
    module3 = require('./module/module3.js');

module1.fn()
module2();
console.log(module3.message)
console.log(module3.arr)

const result = uns.map(module3.arr,(item)=>{
  return item*3
});
console.log(result)


