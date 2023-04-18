// lib:放常用的库和框架
//  - https://requirejs.org/docs/release/2.3.6/minified/require.js
// module：放的是模块化的文件
// app.js：模块汇总的文件，也就是主模块文件


// app.js中引入其它模块

// 基本配置：
require.config({
  // baseUrl:'js',                // 基础路径（指定所有模块的统一路径）
  paths:{                         // 配置所需要模块的路径（所有需要的模块都要进行配置）
    module1:'./module/module1',
    module2:'./module/module2',
    /**
     * 注意事项：
     *  1. module1:'module/module1.js',
     *     - module1代表的是key，后面的文件地址代表的value值。
     *     - key的名字就代表了这个模块，在引入模块的地方直接使用这个名字即可。 
     * 
     *  2. value对应模块的地址，.js文件后缀是一定要省略的，不省略会报错的。
     */
    // 引入第三方模块
    jquery:'./lib/jquery-1.11.0',
    underscore:'./lib/underscore'
  },
  // 用来配置兼容，有些第三方库不支持AMD模块化的
  shim:{
    // 这里只是假设不支持，underscore是支持AMD模块化的。
    // 在测试中我自己也没找到是在哪个位置去注释它的。
    'underscore':{     // 不支持的库
      exports:'_',     // 因为underscore最后导出的也是一个 _ 下划线。
      // deps:['jquery','module1']

    }
    /**
     * exports 对外暴露的内容，代表这个模块外部调用时候的名称
     * deps：是一个数组，表示需要依赖的而模块
     */
  }
});

// 引入模块
// requirejs(['module2'],function(module2){
//   module2.showMessage();
// }); 

requirejs(['module2','jquery','underscore'],function(module2,$,underscore){
  $('body').css('background','green');
  module2.showMessage();
});