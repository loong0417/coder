# 01.【ES6】promis

---

## 1.什么是promise？

1. Promise是异步编程的一种解决方案。从本意上讲，它是承诺，承诺它过一段时间会给你一个结果。
2. Promise是一个类（或者说是构造函数），ES6内部封装类，作用是对异步代码进行封装。
3. Promise有自己的方法，resolve，reject，all，reac方法。

- resolve是promise的参数，这个参数是一个函数，成功回调函数。
- reject也是promise的参数，这个参数也是一个函数，失败回调函数。

4. 原型上有then和catch方法。

![](..\img\es\promise.png)

## 2.什么是回调地狱？

1. 回调地狱：多个串联的异步操作，就是回调地狱。

```javascript
// 1. 这样的写法代码是递进的，就是往里面一层一层嵌套的
new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve();
  },1000);
}).then(()=>{
  console.log('1');

  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve();
    },2000);
  }).then(()=>{
    console.log('2');

    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve();
      },3000);
    }).then(()=>{
      console.log('3')
    });
  });
});

// 2. 这样写代码都是在一个层级的。
function getData(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log(1)
      resolve(2);
    },1000);
  });
}
getData().then((num)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log(2)
      resolve(3);
    },2000)
  });
}).then((num)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log(num);
    },3000);
  });
});
```

## 3.promise基本使用

1. 一般情况下有异步操作时，使用 promise 对这个异步操作进行封装；
2. new 构造函数（1.保存一些状态信息，2.执行传入函数）；
3. 在执行传入回调函数时，会传入两个参数，resolve，reject 本身又是函数；

```javascript
// 1. reject() 失败返回
new Promise((resolve,reject)=>{
  setTimeout(() => {
    reject("error message"); 
  }, 1000)
}).then((data)=>{
  console.log(data);
}).catch((err)=>{
  console.log(err);     // error message
})

// 2. resolve() 成功返回
new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve("hello world!");
  }, 1000)
}).then((data)=>{
  console.log(data);    // hello world
}).catch((err)=>{
  console.log(err);
})
```


## 4.promise三种状态

1. pending：等待状态，比如正在进行网络请求，或者定时器没有到时间。
2. fulfill：满足状态，当我们主动回调了resolve，就处于该状态，并且会回调.then()函数。
3. reject：拒绝状态，当我们主动回调了reject时，就处于该状态，并且回调.catch()函数。

```javascript
// 4. 多次请求
new Promise((resolve,reject)=>{
  // 第一次网络请求
  setTimeout(()=>{
    resolve();
  },1000);
}).then(()=>{
  // 第一次网络请求响应
  console.log('hello');       // hello
  return new Promise((resolve,reject)=>{
    // 第二次网络请求
    setTimeout(()=>{
      // 这里调的是reject说明请求失败（注意：面试题会问输出什么，一定要记住reject后面的是不会输出，直接catch）
      reject();     
    },1000);
  }).then(()=>{
    // 第二次网络请求响应
    console.log('你好');
  }).catch(()=>{
    console.log('错误');
  });
}).catch(()=>{  
  console.log('error message');// 错误
});
```

## 5.then函数中的参数

1. .then()函数中可以传两个参数，两个参数都是函数。
2. 参数1：返回请求成功的结果。
3. 参数2：返回请求失败的结果，这样就可以省略.catch函数。

```javascript
new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve("hello world!");
    // reject("error message list");
  }, 1000);
}).then(data=>{
  console.log(data);
},err=>{
  console.log(err);
})
```



## 6.promise链式调用方法

**1. 链式调用方式一：**

```javascript
new Promise((resolve,reject)=>{
  // 1. 第一次异步操作
  setTimeout(() => {
    resolve("hello world!")
  }, 1000);
}).then(data=>{
  // 1. 第一次处理操作结果
  console.log(data);

  return new Promise((resolve,reject)=>{
    // 2. 第二次异步操作
    setTimeout(() => {
      resolve("eeeeeeeeeeeeeeee");
    }, 1000);
  }).then(mess=>{
    // 2. 第二次处理操作结果
    console.log(mess);
    console.log(mess);
    console.log(mess);

    return new Promise((resolve,reject)=>{
      // 3. 第三次异步操作
      setTimeout(() => {
        resolve("aaaaaaaaaaaaaaaaaa");
      }, 1000);
    }).then(log=>{
      // 3. 第三次处理异步操作结果
      console.log(log);
    })
  })
})
```

**2. 链式调用方式二：**

```javascript
// 链式调用方式2：当全部是resolve的时候，reject可以忽略不写。
new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve("hello");
  }, 1000);
}).then((mess=>{
  // 1. 自己处理 10 行代码
  console.log(mess,"第一层处理 10 行代码");

  return new Promise((resolve)=>{
    resolve(mess + "22222");
  }).then(res=>{
    console.log(res,"第二层处理 10 行代码");

    return new Promise((resolve)=>{
      resolve(res + "333333");
    }).then(res=>{
      console.log(res,"第三层处理 10 行代码");
    })
  })
}))
```

**3. 链式调用简写形式**

```javascript
// 简写形式：new Promise((resolve=>resolve(结果))) 简写
new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve("hello");
  }, 1000);
}).then(mess=>{
  console.log(mess,"第一层的 10 行处理代码");

  return Promise.resolve(mess + "111")
}).then(res=>{
  console.log(res,"第二层的 10 行处理代码");

  return Promise.resolve(res + "222")
}).then(res=>{
  console.log(res,"第三层的 10 行处理代码");
})


// 省略掉 proimse.resolve 方式
new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve("hello");
  }, 1000);
}).then(mess=>{
  console.log(mess,"第一层的 10 行处理代码");

  return mess + "111";
}).then(res=>{
  console.log(res,"第二层的 10 行处理代码");

  return res + "222";
}).then(res=>{
  console.log(res,"第三层的 10 行处理代码");
})

```

**4.抛出异常方式 throw 方式抛出异常**

```javascript
new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve("hello");
  }, 1000);
}).then(mess=>{
  console.log(mess,"第一层的 10 行处理代码");

  throw "message error!!!!!!!!!";         // throw也是可以抛出异常的
}).then(res=>{
  console.log(res,"第二层的 10 行处理代码");

  return res + "222";
}).then(res=>{
  console.log(res,"第三层的 10 行处理代码");
}).catch(err=>{
  console.log(err);
})
```

## 7.promise中的all方法

1. promise的all方法提供了并行执行的异步操作能力，并且所有异步执行完成后才会回调。
2. **all方法，是谁跑得慢，以谁为准执行回调，all接收一个数组参数，里面的值最终都会返回给promise对象。**

```javascript
// 方式一：
Promise.all([
  // 异步操作1
  new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve({"name":"杨小样"});
    }, 2000);
  }),
	// 异步操作2
  new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve("result2");
    }, 1000);
  })
]).then(mess=>{
  // 两个都请求成功才会走
  console.log(mess);
}).catch(()=>{
  // 两个都请求失败才会走
  console.log('error');
});


// 方式二：
let pro1 = new Promise((resolve,reject)=>{});
let pro2 = new Promise((resolve,reject)=>{});
let pro3 = new Promise((resolve,reject)=>{});

Promise.all([
  pro1,
  pro2,
  pro3
]).then(()=>{
  // 三个成功则成功
}).catch(()=>{
  // 三个失败则失败
});
```



## 8.promise中的race方法

1. **race方法，是以谁跑得快，以谁为准执行回调。**
2. race的应用场景，比如我们可以用race给某个异步请求设置超时时间，并且在超时后执行相应的操作。

```javascript
// 案例1：
let p1 = new Promise((resolve,reject)=>{
   setTimeout(()=>{
     resolve('p1成功');
   },2000);
 });

let p2 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('p2成功');
  },1000);
});
// 将p1和p2作为数组元素，其中一个请求成功则执行回调函数返回。
Promise.race([p1,p2]).then((value)=>{
  console.log(value);           // p2成功
}).catch(()=>{
  console.log('err');
});
```

3. **应用场景：请求超时提示。**

```javascript
function getData(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('请求数据成功！');
    },4000);
  });
}

function network(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('网络超时！');
    });
  },3000);
}

Promise.race([getData(),network()]).then((value)=>{
  console.log(value);
}).catch(()=>{
  console.log('error');
});
```



# 02.【实现原理】Ajax

---

>JS中的ajax（Async Javascript and XML）

## 1.Ajax原理是什么？

1. 原理：通过XMLHttpRequest对象来向服务端发送异步请求，从服务器获取数据，然后使用js来操作DOM更新页面。

## 2.Ajax实现过程

**1. 创建 Ajax的核心对象，XMLHttpRequest对象。**

- new XMLHttpRequest() 实例化Ajax对象

  

**2. 通过 XMLHttpRequest 对象的 open() 方法与服务器简历连接。**

- new XMLHttpRequest().open(method：表示请求方式，url：服务器的地址);
      

**3. 构建请求所需的数据内容，并通过XMLHttpRequest对象的 send() 方法发送给服务器。**

- new XMLHttpRequest().send(body：发送的数据)
- post请求才会发送数据。
- get请求直接写成 send(null)。

**4. 通过 XMLHttpRequest 对象提供的 onreadystatechange 时间监听服务器端的通信状态。**

- new XMLHttpRequest().onreadystatechange 主要监听的属性是实例化对象中的readyState状态（5个状态）

- 状态0：open() 方法未调用。

- 状态1：send() 方法未调用。

- 状态2：send() 方法已经调用，响应头和响应状态已经返回。

- 状态3：响应体正在下载，responseText(接收服务器响应的结果)，获取到的只是部分数据，还没下载完。

- 状态4：整个请求过程已经完毕。

注意：只要readyState属性值发生改变，onreadystatechange就被触发。

**5. 接收并处理服务器端向客户端响应的数据结果。**
**6. 将处理的结果更新到html页面中。**

```javascript
let xhr = new XMLHttpRequest();
// 网易云后台请求地址：http://localhost:3000/personalized?limit=10 
xhr.open('GET','http://localhost:3000/personalized?limit=10');
xhr.send(null);

xhr.onreadystatechange = function(){
  if(xhr.readyState===4){
    if(xhr.status>=200 && xhr.status<300){
      // console.log(xhr.responseText)           // 先看看数据在不在
      let obj = JSON.parse(xhr.responseText);    // 数据存在将数据格式转变

      obj.result.forEach(item => {
        var div = document.createElement('div');
        div.innerHTML = item.name;
        document.querySelector('body').appendChild(div);
      });

    }else if(xhr.status>=400){
      console.log('信息错误：'+xhr.status);
    }
  }
}
```

## 3.Ajax封装1

```javascript
<!-- 
js中如何封装一个ajax请求
参数分析：
1. 请求方式      type:get/post
2. 请求地址      url
3. 请求参数      data
4. 请求参数类型  json
5. 请求返回结果
-->
/**
  * options 是一个对象
  */
function ajax(options){
  // 1.参数初始化
  options = options || {};
  options.type = (options.type || 'GET').toUpperCase();
  options.dataType = options.dataType || 'json';        // 请求参数类型（返回类型）
  let param = options.data;                             // 请求携带的参数

  // 2.实例化对象
  var xhr = new XMLHttpRequest();

  // 3.发送请求
  if(options.type === 'GET'){
    // GET请求，options.url+param(url+请求携带参数的拼接)，async：是否异步请求，true：异步请求，false：同步
    xhr.open('GET',options.url+'?'+getParam(param),true);
    xhr.send(null);
  }else if(options.type === 'POST'){
    xhr.open('POST',options.url);
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.send(param);
  }

  // 4.监听响应
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
      if(xhr.status<=200 && xhr.status<300){
        // 1.responseText 字符串形式响应数据 2.responseXML XML形式响应数据
        options.success(xhr.responseText,xhr.responseXML); 
      }else{
        options.fail('参数错误'+xhr.status);
      }
    }
  }
}

function getParam(data){
  let arr=[];
  for(let key in data){
    arr.push(`${key}=${data[key]}`);
  }
  return arr.join('&'); 
}

// 2. 使用
ajax({
  type:'get',
  dataType:'json',
  data:{
    limit:10
  },
  url:'http://localhost:3000/personalized',
  success:function(text,xml){
    // console.log(text);
    console.log(JSON.parse(text));
  },
  fail:function(status){
    console.log(status);
  }
});
```




# 03.【ES7】fetch

---

> fetch是ES7新增的原生数据交互方式，所以不需要封装。
>
> 但是兼容性比较差，如果是在vue中使用完全可以忽略兼容性问题，因为vue脚手架中有babel可以将fetch转换成低版本可识别的代码。

## 1.什么是fetch？

1. Fetch被称为下一代ajax技术，内部采用promise方式处理数据。



## 2.fetch基本使用







# 04.【常见】模块化发展

---

## 1.ES6模块化

1. 模块化：把各功能都单独的去写，然后按一定的规则拼起来。



**模块化的好处：**

1. 避免命名冲突。
2. 功能独立。按需加载。
3. 提供复用性与维护性。

## 2.模块化发展

**方式一：原始化的方式**

1. 会有全局变量污染的情况。

```javascript
// 以函数的方式来写的，就是最原始的模块化方式。
function fn1(){ // 方法体 }

function fn2(){ // 方法体 }
```

**方式二：对象的写法**

1. 不会有全局变量污染，但是存在安全性的问题。
2. 因为对象的属性不仅可以调用，还可以修改了，造成了安全隐患。

```javascript
var module1 = {
  name:'yang',
  m1:function(){
    console.log('m1');
  },
  m2:function(){
    console.log('m2');
  }
}
```

**方法三：立即执行函数**

```javascript
// 3.立即执行函数
var module2 = (function(){
  var name = 'yang';
  var m1 = function(){
    // 方法体
    console.log('m1')
  }
  var m2 = function(){
    console.log('m2')
  }
  return {
    m1:m1,
    m2:m2
  }
})();
console.log(module2.name)   // undefined
console.log(module2.m1())   // 可以访问
```

**方法四：放大模式（可以继承）**

1. 因为模块需要依赖，就有了放大模式。

```javascript
// 4.放大模式（可以继承）mod传进来的是一个模块
var module3 = (function(mod){
  // 怎么就不能在module2中添加属性呢？
  // mod.m3 = function(){
  //   // console.log('m3');
  // }
  // mod.age = 18
  return mod;
})();
// var newModule = module3(module2)
// console.log(newModule)
```

**方式五：宽放大（允许传入一个对象）**

```javascript
var module4 = (function(mod){
  // mod.m3 = function(){
  //   // console.log('m3');
  // }
  // return mod;
})(window.module2 || {});
```

**方式六：传入其它变量**

```javascript
// 当然这里Jquery是要引入进来的哈。
var module5 = (function(window,undefined,$){
  // 怎么就不能在module2中添加属性呢？
  // mod.m3 = function(){
  //   // console.log('m3');
  // }
  // mod.age = 18
  return mod;
})(window,undefined,jQuery);
```

## 3.commonjs

**commonjs：**

1. commonjs是一个同步的写法。
2. 用来支持服务端的模块化，在服务端直接使用node.js就可以了。
3. 客户端使用的话需要编译，借助Browserify工具。

- npm install -g browserify (注意大小写，在这个位置今天将browserify首字母写成大写，然后一直报错，不存在的)

- 在下面会记录browserify工具的使用详情。

  

**Browserify：**

> 官网：http://browserify.org

1. 安装：npm install -g browserify

2. 编译：browserify js/scr/app.js -o js/dist/index.js

- [编译语法分为三个部分：browserify 需要编译的文件 -O 输出编译文件地址及文件名，index.js不是固定名字，可以自定义]

3. 然后在index.html文件中引入，输出文件目录中的输出文件即可。
4. 我的实际操作是输出到dist中的index.js文件中，然后在当前index.html文件中引入。



**模块暴露：**

1. module.exports = value
2. exports.xxx = value



**引入模块：**

1. 语法：require('文件名')
2. 注意事项：

- 如果引入第三方模块，参数为包的名字。
- 如果引入的是本地模块，参数为模块路径文件。

## 4.amdjs

**amd规范：**专门用于客户端模块化规范，模块化加载是异步形式。

1. 不需要编译。
2. 也不需要借助node.js。



**暴露模块：**

1. 没有依赖的模块

```javascript
defined(function(){
  return 模块;
});
```

2. 有依赖的模块

```javascript
defined(['module1','module2'],function(m1,m2){
  return 模块;
});
```



**引入模块：**

```javascript
requirejs(['module1','module2'],function(){
  // ...... 
});
```



**Require.js：**

> AMD.js，ECMASCRIPT也是不支持的，所以只能借助第三方库：Require.js库。

**Require.js官网：**http://requirejs.org



**Require.js使用步骤：**

1. 在页面里面通过`<script src='./require.js' data-main="js/app.js"></script>`
- data-main：为主模块文件路径，这是必须要指定的。
2. 主模块文件配置  
- 基本配置：requirejs.config();
- 引入模块：requirejs(['模块名'],function(){});

```javascript
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
```

## 5.babel

**Babel 编译工具（也就是转码器）**

1. 官网：http://babeljs.io/
2. 中文网站：https://babeljs.cn/



**安装步骤：**

1. npm install babel-cli --save-dev
2. npm install babel-preset-env  --save-dev
3. 在根目录下创建一个.babelrc配置文件

```javascript
{
  "presets":["evn"]
}
```



**编译方式：**

1. babel js/src/index.js 直接编译文件（编译后的结果会在终端里显示出来）。
2. babel js/src/index.js -o js/src/newIndex.js 编译并输出结果到单个文件 (-o为out-file的简写)。
3. babel js/src/index.js -w -o js/src/newIndex.js 文件修改后自动编译（-w是watch的简写）。
4. babel js/src -d js/dist 编写整个目录的文件 （-d为out-dir的简写）。



**编译命令：**

- 在package.json的scripts里面添加一条属性，如下：

```javascript
'scripts':{
  'build':'babel js/src -d js/dist'
}
```

- 在用到编译命令的时候执行：npm run build

  

**babel-polyfill 垫片：**

> babel-polyfill 垫片，用来转出了语法外的API。

1. 安装：npm install --save babel-polyfill
2. 注意：这个模块需要在代码运行时就要工作，所以需要放到运行环境。需要放到 --save。
3. 在用到的代码里面最上面引入：import 'babel-polyfill'。

## 6.es6模块化

**导出模块：**

- **export** defaulr{}   导出的是一个对象
- **export** const message = 'error'  导出的是一个变量
- **export** function demo(){}    导出一个函数



**导入模块：**

- **import** {变量[函数]} from '模块名' 导入函数，或者变量
- **import** module from '模块名';     导入一个对象



**安装插件：**

> 因为ES6需要使用babel进行转换，所以需要安装babel插件。

1. npm install babel-cli --save-dev
2. npm install babel-preset-env  --save-d
3. 在根目录下创建一个.babelrc配置文件

```javascript
{
  "presets":["evn"]
}
```

4. npm install -g browserify 
5. browserify js/scr/app.js -o js/dist/index.js
6. 注意：最后将browserify编译的index.js文件在html中引入即可。

```node
// 一直报错，没办法解决。
D:\CODEING\Javascript\22-ES6+\11-模块化开发\05-ES6\js\src\main.js:2
import { m1Name,arr,m1,m2 } from "./module1";
^
ParseError: 'import' and 'export' may appear only with 'sourceType: module'
PS D:\CODEING\Javascript\22-ES6+\11-模块化开发\05-ES6> 
```







# 05.【ES6】字面量增强

---

## 1.字面量增强

1. ES6中对**对象字面量**进行增强，称之为为**Enhanced Object Literals**（增强对象字面量）。
2. 字面量增强主要包含三个部分：

- 属性的简写：Property Shorthand
- 方法的简写：Method Shorthand
- 计算属性名：Computed Property Names

## 2.属性的简写

```javascript
// 1. 属性的简写
let name = "杨小样";
let age = 18;
let job = "攻城狮";

// ES6 之前引用外面属性写法
const obj1 = {
  name:name,
  age:age,
  job:job
}

// ES6 之后引用外面属性的写法
const obj2 = {
  name,
  age,
  job
} 
console.log(obj2);
```

## 3.方法的简写

```javascript
// 2. 函数简写方式
const obj3 = {
  // ES6 之前的书写方式
  // test: function(){
  //   console.log('this is test function');
  // },

  // info: function(){
  //   console.log('this is info function');
  // }

  // ES6 之后的书写方式
  test(){
    console.log("this is test method ");
  },
  info(){
    console.log("this is info method ");
  }
}
// console.log(obj3.test());
```

## 4.计算属性名

```javascript
var name='yang';
const obj4 = {
  test(){
    console.log("this is test method ");
  },
  // 3. 计算属性名：Computed Property Names
  // name全局变量会和1进行拼接，拼接成一个新的变量，obj1的属性
  [name + 1]:'yang_yang'
}
console.log(obj4)    // {yang1: 'yang_yang', test: ƒ}
```



# 06.【ES6】解构相关

---

## 1.解构Destructuring

1. ES6中新增了一个从数组或对象中方便获取数据的方法，称之为解构Destructuring。
2. 按照一定的模式，从数组或者对象中把数据拿出来，对变量进行赋值。

## 2.数组解构

> 等号左边与右边必需都是数组，数组的解构赋值要一一对应。如果对应不上的话就是undefined。

**1.不使用数组进行解构**

```javascript
var music = ['消愁','大鱼','梁祝','卡农'];
var num0 = music[0];
var num1 = music[1];
var num2 = music[2];
var num3 = music[3];
console.log(num0,num1,num2,num3);
```

**2.数组解构**

```javascript
var music = ['消愁','大鱼','梁祝','卡农'];
var [num0,num1,num2,num3] = music;
console.log(num0,num1,num2,num3)
```

注意：实底层还是采用的上面下标赋值的方式 **babeljs.io**网站可以检测。

**3.解构后面的元素（用逗号空下前面两个元素）**

```javascript
var music = ['消愁','大鱼','梁祝','卡农'];
var [,,num2,num3] = music;
console.log(num2,num3)   // 梁祝 卡农
```

**4.解构出来一个元素，后面的放到数组中**

```javascript
var music = ['消愁','大鱼','梁祝','卡农'];
var [num1,...newMusic] = music;
console.log(num1)      // 消愁
console.log(newMusic)  // (3) ['大鱼', '梁祝', '卡农']
```

**5.解构的默认值**

```javascript
var music = ['消愁','大鱼','梁祝','卡农'];
var [num0,num1,num2,num3,num4='高山流水'] = music;
console.log(num0,num1,num2,num3,num4);  
```

注意：最后一个元素没有对应值，所以为undefined，我们就可以给它设置一个默认值。

## 3.对象解构

> 等号左边与右边必需都是对象，名字要一一对应，顺序不需要对应，对应不上的值结果是undefined。

```javascript
// 定义一个对象
var obj = {
  name:'yang',
  age:18,
  height:1.88
};
// 1. 对象解构
var {name,age,height} = obj
console.log(name,age,height)   // yang 18 1.88

// 2. 对象解构
var {height,age,name} = obj
console.log(name,age,height)  // yang 18 1.88

// 3. 单个值解构
var {name} = obj
console.log(name)

// 4. 在解构的时候改变属性值
var {name:newName} = obj
console.log(newName)     // yang
console.log(name)        // yang

// 5. 在对象解构的时候设置一个默认值
var {name,address='湖北武汉'} = obj
console.log(name,address)

// 6. 在函数形参里解构
// (1). 没有对对象进行解构，我们使用变量就需要使用对象.属性形式
// function test(obj){
//   console.log(obj.name);
//   console.log(obj.age)
// }
// test(obj);

// (2). 我们知道传进来的参数是一个对象，我们就在这里对，形参进行解构
function test({name,age}){
  console.log(name)
  console.log(age)
}
test(obj);
```







# 07.【ES6】变量相关

---

## 1.ver声明变量

> 事实上 var 的设计可以看成 javascript 语言设计上的错误，但这种错误多半是不能修复和移除的，以为需要向后兼容；

1. var可以只声明变量，不赋值（默认值undefined），或者先声明变量再赋值。

2. var在相同作用域可以重复声明相同变量，后面变量覆盖前面的。

```javascript
var a = 100;
var a = '杨小样随笔';
console.log(a)      // 杨小样随笔 声明同名变量，后面覆盖前面。
```

3. var在全局声明的变量属于window下面。

```javascript
var aaaa = '杨小样随笔';
function test(){
  var yang  = '杨小样';
}
console.log(window.aaaa);  // var在全局作用域声明的变量会挂载在window下面
console.log(window.yang)   // var在函数作用域下声明的变量不会挂载在window上，访问window下面不存在的变量为undefined
```

4. var声明的变量，在预编译时候会进行作用域提升。

```javascript
console.log(a)       // undefined
var a = '杨小样随笔';
```



## 2.var变量undefined三种情况

1. 声明变量未赋值，是**undefined**。

```javascript
var b;  
console.log(b);
```

2. 访问window下面变量，变量不存在返回undefined。

```javascript
console.log(window.a)
```

3. typeof检测未声明的变量，返回字符串的undefined。

```javascript
console.log(typeof a)
```

## 3.var声明变量特殊情况

```javascript
var a = 100;    // 方式1：变量初始化，声明变量并赋值，称为变量初始化
var b;          // 方式2：只声明变量，不赋值。输出b的值是undefined
c = 200;        // 方式3：不声明变量，直接给变量赋值，c等于200，且不会报错，但是不符合代码规范

console.log(d); // 方式4：Uncaught ReferenceError: d is not defined
```

## 4.let声明变量

1. let但必须声明后再使用，不能在声明前使用，因为 let 没有预解析（**没有变量提升**），会直接报错的。

```javascript
console.log(a)    //  ReferenceError: Cannot access 'c' before initialization
let a = '杨小样';
```

2. 在相同的作用域let不能重复声明相同变量（不同作用域内除外）。

```javascript
let a = 10;
let a = '杨小样';  // Uncaught SyntaxError: Identifier 'b' has already been declared
```

3. let声明的变量具有块级作用域。（块级作用域和自执行函数非常像，写一对大括号就是一个作用域，以后可以不用写自执行函数了）。

4. 声明的变量不再属于 window 的属性。

## 5.const常量

> const是constant的缩写。

**1.const 修饰常量注意事项：**

- const修饰的标识符被赋值后，不能再修改。
- 再使用 const 定义标识符，必须进行赋值。
- 常量的含义是指向的对象不能修改，但可以改变内部属性。



**2.const关键字声明常量：**

- 必须先声明后使用，声明的时候必须赋值。

- 声明后不能修改。注意：const 声明的对象中的属性是可以修改的。

- 同一作用域里面不能重复声明（不同作用域里可以），不会被预解析。

- 声明的变量不再属于 window 的属性。



**3.变量声明总结 **

- 声明变量首先选择使用 const。
- 如果需要先声明，后赋值，或者声明完之后还需要改动，就使用 let 关键字。

## 6.let和const有没有进行作用域提升？

1. 从实际情况上来看，在执行上下文的词法环境创建出来的时候，变量事实上已经被创建，只是这个变量是不呢个访问的。

2. 因为在创建执行期上下文的时候变量就会完成创建。

   

**变量已经创建但无法访问，是不是一种作用域提升呢？**

> 事实上维基百科并没有对作用域提升有严格的概念解释，从字面上来理解。

1. 作用域提升：在声明变量的作用域中，如果这个变量可以在声明前访问，那么我们可以称之为作用域提升。
2. 使用let和const声明的变量，它虽然是被创建出来了，但是不能访问，所以不能称之为作用域提升。
3. 综合上面的分析，可以说明let和const是没有进行作用域提升的，但会在执行上下文阶段被创建出来。



## 7.let和const变量声明不在window下面？它在哪里？

1. 首先，ES5中var关键字声明的全局变量，事实上会添加到window上面，是window的一个属性。
2. 但是，let和const是不会给window上添加任何属性的。



**那么我们可能会想它的变量保存在哪里了？**

![](../img\es\variableEnvironment.png)



1. 也就是说我们声明的变量和环境记录是被添加到**环境变量（VE：VariableEnvironment）**中了。之前是保存到**环境对象（VO：Variable Object）**中的，上面虽然也是将VO翻译成环境变量，但是在这里我自己想理解成环境对象。
2. 但是标准也是没有规定**VE：VariableEnvironment**这个对象是window或其它对象的。
3. 那么js的V8引擎在解释的时候，其实就会有自己的实现。
4. V8引擎中其实是通过**VariableMap**的一个**HasMap**来实现它们的存储的。
5. 那么window对象？而window对象是早期早期的**GO：Global Object**对象，在最新的实现中其实是浏览器加的全局对象，并且一直保持了window和var之间的相等性（就是保持了var声明变量是window下的属性的特性）。`如下：V8引擎源码。`

![](D:\git temp\notes\img\es\V8Code.png)

## 9.var,let,const使用问题

**关于var关键字：**

1. 对于var我们需要明白一个事实，var所表现出来的特殊性：**作用域提升**，**window全局对象**，**没有块级作用域**等都是一些历史遗留问题。
2. 其实是javascript语言设置之初的一些缺陷。
3. **面试：**利用这种缺陷出一系列的面试题，来考察大家对javascript语言本身以及底层的理解。
4. **工作：**在实际工作中，我们可以使用最规范来编写，也就是再不适用var来定义变量了。



**关于let、const使用：**

1. 对于let和const来说，是目前开发中推荐使用的。
2. 推荐优先使用const，这样可以保证数据的安全性，不会被随意的篡改。
3. 只有当我们明确知道一个变量后续需要重新赋值的时候，这就时候就使用let。
4. 这种在其它语言中也是一种约定俗成的规范，我们尽量也遵守这种规范。



# 08.【重点】块级作用域问题

---

## 1.ES5中作用域

> 在ES5中只有两种情况会形成块级作用域。

1. **全局作用域**，在window下。
2. **函数作用域**，在函数里面。

## 2.ES5代码块作用域

> Block Code 代码块。

```javascript
// 代码块
{
	// var声明变量
  var foo = 'foo';
  
  // 代码块中函数
  function demo(){
    console.log('demo')
  }
}
// 1. var关键字声明的变量，代码块作用域形同虚设，可以访问
console.log(foo);  // foo  
// 2. 函数调用
demo();            // demo
```

## 3.ES5函数作用域

```javascript
// ES5函数作用域
function test(){
  var num = 100;
}
// console.log(num);  // Uncaught ReferenceError: num is not defined
```

## 4.ES6代码块及作用域

在ES6中新增了块级作用域，并且通过let，const，function，class声明的标识符是具备块级作用域的限制的。



**1.代码块作用域**

```javascript
// 1. 代码块作用域
{
  let nick = 'yang';

  function demo(){
    console.log(nick);
  }

  const num = 100;

  class Person{}
}

console.log(nick)          // Uncaught ReferenceError: nick is not defined
demo();                    // yang 可以访问
console.log(num)           // Uncaught ReferenceError: num is not defined
var p = new Person();
console.log(p)             //Uncaught ReferenceError: Person is not defined
```

**注意1：demo()函数是可以访问的。这里一定要注意，function是比较特殊的，不同的浏览器下有不同的实现，大部分浏览器为了兼容以前的代码，让function是没有块级作用域的。**

**注意2：在ES6中新增了块级作用域，函数拥有块级作用域，但在外面依然可以访问，这是因为引擎会对函数的声明进行特殊处理，允许想var那样进行提升。**



**2.if块级作用域**

```javascript
if(true){
  let info = '你好啊';
}
//console.log(info)     // Uncaught ReferenceError: info is not defined
```



**3.switch块作用域**

```javascript
switch('red'){
  case 'red':
    let foo = 'foo';
    let bar = 'bar';
}
// console.log(foo)      // Uncaught ReferenceError: foo is not defined
// console.log(bar)      // Uncaught ReferenceError: bar is not defined
```



**4.for循环语句也是块级作用域**

```javascript
for(var i=0;i<10;i++){
  console.log(i)
}
console.log(i);    // 10

for(let k=0;k<10;k++){
  console.log(k)
}
// console.log(k);  // Uncaught ReferenceError: k is not defined
```



## 5.暂时性死区

**ES6中，新增了一个概念，暂时性死区：temporal dead zone （TDZ）**

1. 它表达的意思是在一个代码中，使用let、const声明变量，在声明前，变量都是不可以访问的。
2. 将这种现象称为暂时性死区。

```javascript
// 当前的if作用域就称为暂时性死区。
var foo = 'foo';
if(true){
  console.log(foo)  // ReferenceError: Cannot access 'foo' before initialization
  let foo = 'foo';
}
```



# 09.【ES6】字符串相关

---

## 1.模板字符串

1. ES6之前，如果我们想要将字符串和一些动态变量（标识符）拼接在一起，是非常麻烦和丑陋的，需要使用加号连接的方式。
2. ES6允许我们使用字符串模板来嵌入JS变量或者表达式来进行拼接。

- 首先，**使用``符号来编写字符串，称之为字符串模板。**
- 其次，在模板字符串中，可以**通过${expression}来动态嵌入内容**。

```javascript
 const names = '杨小样随笔';
    const age = 18;
    const height = '1.88'
    // 变量
    console.log(`我是${name},今年${age}岁,身高${height}米`);
    // 表达式
    console.log(`年龄：${age>=18?'成年':'未成年'}`);

    function  demo(){
      return "this is methods, names is demo"
    }
    console.log(`${demo()}`);
```

## 2.标签模板字符串

1. 模板字符串的另一种使用法：**标签模板字符串 Tagged Template Literals。**

- 模板字符串被拆分了。

- 第一个元素是数组，是被模板块字符串拆分的字符串组合。

- 后面的元素是一个个模板字符串传入的内容。

  

**javascript中的普通函数：**

```javascript
// 1.javascript中的普通函数
function test(...args){
  console.log(args)
}
test('hello world!!!!')  // ['hello world!!!!']

// 2.标签模板字符串中，函数调用
const name = 'yang'
const age = 18
function demo(...args){
  console.log(args)
}
demo `hello ${name} world ${age}`;

/**
 * (3) [Array(3), 'yang', 18]
 *   0: (3) ['hello ', ' world ', '', raw: Array(3)]
 *   1: "yang"
 *   2: 18
 *   length: 3
 *   [[Prototype]]: Array(0) 
 */
```

## 3.字符串扩展方法

**1.includes()**

- 作用：字符串里面是否包含某个字符，参数是一个字符。
- 参数：参数是一个字符。
- 返回值：boolean类型，包含则返回true，否则返回false。

```javascript
var str = 'yang';
// 1. 查看str字符串中是否包含'n'这个字符。
// 2. 返回一个boolean值，如果存在则返回 true，否则返回 false。
console.log(str.includes('n'));   // true
```



**2.startsWith()**

- 作用：字符串的开始位置的字符是否是参数的，参数是一个字符。
- 参数：参数是一个字符。
- 返回值：boolean类型，包含则返回true，否则返回false。

```javascript
var str = 'yang';
// 1. 查看str字符串开始（首位）字符是否为 a。
// 2. 返回一个boolean值，如果首位字符为a则返回true，否则返回false。
console.log(str.startsWith('a')); // false
```



**3.endsWith()**

- 作用：字符串的结束位置的字符是否是参数的，参数是一个字符。
- 参数：参数是一个字符。
- 返回值：boolean类型，包含则返回true，否则返回false。

```javascript
var str = 'yang';
// 1. 查看str字符串结尾（末尾）字符是否为 g。
// 2. 返回一个boolean值，如果末尾字符为g则返回true，否则返回false。
console.log(str.endsWith('g'));  // true
```



**4.repeat()**

- 作用：复制字符串，参数是一个number类型，表示复制字符串的次数。
- 参数：必须是一个正数，如果是负数就会报错的。
- 返回值：复制后的字符串。

```javascript
var str = 'yang';
// 使用repeat()函数操作字符串
console.log(str.repeat(3));  // yangyangyang
```



# 10.【ES6】数组相关

---

## 1.Array.from()

1. 作用：把类数组转换成真正的数组。任何有length属性的对象都可以用这个方法转真正数组。

```javascript
// 1. Array.from() 将类数组转换成真正的数组
var lis = document.getElementsByTagName('li');
// console.log(lis);  // HTMLCollection(5) [li, li, li, li, li]

var newList = Array.from(lis);
console.log(newList); // [li, li, li, li, li]

// 2. Array.from() 将字符串转换成数组
var name = 'yang';
var newStr = Array.from(name);
console.log(newStr)   //  ['y', 'a', 'n', 'g']
```



## 2.[...类数组]

1. 它是一个扩展方法，在这里可以把一个类数组转成一个真正的数组。

```javascript
// 3. 使用[...类数组]方式
var newList2 = [...lis];
console.log(newList2) //  [li, li, li, li, li]

// 4. 对象身上只要有length属性就可以调用Array.from()把对象转换成数组，对象中的key必须是从0开始的数字才能转换
var obj1={
  0:'yang',
  1:18,
  job:'攻城狮',
  like:'发呆',
  length:4
}

var obj2={
  1:'red',
  2:'green',
  3:'yellow',
  4:'pink',
  5:'blue',
  length:5
}
    
// 注意：1.key值必须是数字，obj1中有3个key不是数字，就被识别为undefined。
console.log(Array.from(obj1))  // (4) ['yang', 18, undefined, undefined]
// 注意：2.key值必须从0开始，如果不是从0开始会直接补到0，为undefined。
console.log(Array.from(obj2))  // (5) [undefined, 'red', 'green', 'yellow', 'pink']
```



## 3.Array.of()

1. 作用：将一组数字转换成数组，真正的数组。

```javascript
// 实例化数组
console.log(new Array());         // []
console.log(new Array(3));        // (3)[empty × 3]
console.log(new Array(1,2,3,4));  // (4)[1, 2, 3, 4]

// Array.of() 将一组数字转换成数组，真正的数组。
// 返回值：数组
console.log(Array.of(1))
console.log(Array.of(1,2,3))
```

## 4.includes()

1. 作用：查找元素在数组中是否存在。
2. 语法：arr.includes(数组元素,其实位置)。
3. 返回值：一个boolean值，如果找到指定元素则返回true，否则返回false。

```javascript
// includes(数组元素,其实位置)  
var colors = ['red','green','yellow','blue','pink'];
console.log(colors.includes('red'))    // true

// 在colors数组中查找 'red' 元素，从下标为2的位置开始查找，'red'元素在下标0的位置所以返回false。
console.log(colors.includes('red',2)); // false
```



# 11.【ES6】函数相关

---

## 1.函数默认参数

> 函数参数默认值：在严格模式下进行测试。'use strict' 严格模式是ES5提出的。

1. 函数参数如果有默认值，我们通常需要将默认值放在函数参数的最后一个，在一些语言中，如果默认值不是放在最后一个可能会报错的，在javascript中虽然不会报错，但是看上去很难受。
2. 另外默认值会改变函数length的个数，默认值以及后面的参数都不会计算在length之内的。

```javascript
'use strict' 
// 1.代码1：没有默认参数
function test(name,age){
  age = age || 18
  console.log(name,age)
}

test('yang');    // yang 18
test('yang',20); // yang 20

// 注意：这里我希望用我自己传的0作为年龄参数，但是就被判定为false
test('yang',0);  // yang 18 

// 2.代码2：函数默认参数
function demo(name='张三',age=0){
  console.log(`姓名：${name},年龄：${age}`);
}
demo();           // 姓名：张三,年龄：0
demo('yang',18);  // 姓名：yang,年龄：18

// 3.代码3：对象作为函数的默认参数及进行解构
function info({name,age}={name:'yang',age:18}){
  console.log(name,age)
}
info()

// 4.代码4：参数默认值一般都要放在最后
function user(age=18,name){
  console.log(age,name);
}
// 如果默认值不是放在最后面的，又需要使用默认值，那就需要传undefined，如果默认值在中间呢？
user(undefined,'张三');   // 18 '张三'

// 5.代码5：另外默认值会改变函数length的个数，默认值以及后面的参数都不会计算在length之内的。
function paramLength(num1,num2=10,num3,num4){
  console.log(paramLength.length)   // 1 函数名.length方式查看参数个数
}
paramLength(1,undefined,2,3);   

function paramLength2(num1,num3,num4,num2=10){
  console.log(paramLength2.length)  // 3 函数名.length方式查看参数个数
}
paramLength2(1,2,3); 
```

## 2.剩余参数
> ...rest
1. 语法：...参数
2. ES6中引用了rest parameter，可以将不定数量的参数放入到一个数组中。
3. 如果最后一个参数是...为前缀的，那么它会将剩余的参数放到该数组中，并作为一个数组。
4. ...参数的后面不能再有参数，否则会报错。

```javascript
// 1.1.rest参数
function sum(num1,num2,...numbers){
  console.log(num1,num2,numbers);
}
sum(10,20,3,4,5,6);   // 10 20 (4) [3, 4, 5, 6]

// 1.2.案例(...numbers后面有一个参数，就报错)
function total(...numbers/*,a*/){
  var sum = 0;
  for(let num of numbers){  
    sum+=num;
  }
  return sum;
}
console.log(total(1,2,3,4,5,6,7,8,9));
```

## 3.[...扩展运算符]

1. 语法：... （使用的是三个点语法）
2. 三个点后面是一个类数组，它的作用是把这个类数组转成真正的数组，但是它需要放到一对中括号里面。
3. 三个点后面是一个真正的数组，它的作用是把数组转成一个普通集合数据，不需要加中括号。

```javascript
// 2.1.三点用法（扩展运算符）
var arr = [12,34,56,78,13,90];
var wraps = document.querySelectorAll('div');
// 注意：类数组及三个点需要放在一对中括号里面
console.log([...wraps])  // [div, div, div, div, div]
// 注意：把数组转成集合数据，不用加中括号
console.log(...arr)      // 12 34 56 78 13 90

// 2.2.作用1：替代数组的apply方法（扩展运算符）
console.log(Math.max(12,34,56,78,13,90))    // 90

var arr = [12,34,56,78,13,90];
console.log(Math.max.apply(null,arr))       // 90

console.log(Math.max(...arr))               // 90


// 2.2.作用2：替代concat（扩展运算符）
var arr2 = [1,2,3];
var arr3 = ['a','b','c'];
// console.log(arr2.concat(arr3))           // (6) [1, 2, 3, 'a', 'b', 'c']

arr2.push(...arr3)
// console.log(arr2)                        // (6) [1, 2, 3, 'a', 'b', 'c']

// 2.3.作用3：将字符串转换成数组（扩展运算符）
var names = 'hello world';
console.log([...names])                     // (11) ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

for(let n of [...names]){
  console.log(n)
}
```

## 4.剩余参数和arguments区别

1. 剩余参数只包含那些没有对应形参的实参，而arguments包含了传给函数的所有实参。
2. arguments对象不是一个真正的数组，而rest参数是一个真正的数组，可以进行数组的所有操作。
3. arguments是早期的ECMAScript中为了方便去获取数据提供的一个数据结构，而rest参数是ES6模块中提供并且希望以此来替代arguments的。
4. 剩余参数必须放到最后一个位置，否则会报错的。

## 5.箭头函数

**1.语法：**

- ()：参数

- =>： 箭头

- {}：函数的执行体

  

**2. 参数：**

- 参数需要写在第一个等号的后面。

- 如果没有参数，需要写一对小括号。

- 只有一个参数，那就可以直接写一个参数，小括号可以省略。

- 参数有多个，需要加小括号，小括号不能省略，参数之间用逗号隔开。

  

**3. 函数主体：**
- 函数主体内容是放在箭头后面，如果语句只有一条，那就直接写，如果语句有多条，需要将函数主体 放在大括号里面。

  

**4. 注意事项：**

- 函数体内的this对象就是定义函数时所在的对象，不是调用时候的对象。
- 箭头函数不能当作构造函数来使用，不能实例化。
- 函数内不能使用arguments对象，如果要用的话，就是用reset参数来代替。

```javascript
// 案例1：
var foo=()=>{
  console.log('foo');
}
console.log(foo.prototype)  // undefined

// 案例2：
var fun = ()=>console.log('fun函数');
fun()

// 案例3：
var sum = (a,b) =>{
  var result = a+b;
  console.log(result)
}
sum(1,2)                      // 3
```



# 12.【ES6】Symbol数据类型

---

## 1.为什么需要新增Symbol数据类型呢？

1. 在ES6之前，对象属性名都是字符串形式的，那么很容易造成属性名冲突。
2. 比如原有的一个对象，我们希望在其中添加一个新属性和值，但是我们在不确定它原来内部有什么内容的情况下，和容易造成冲突，从而覆盖掉它内部的某个属性。

## 2.Symbol解决的问题 

1. Symbol就是为了解决属性名覆盖的问题的，用来生生一个独一无二的值。
2. Symbol值是通过Symbol函数来生成的，生成后可以作为属性名。
3. 也就是在ES6中，对象的属性名可以使用字符串，也可以使用Symbol值。
4. Symbol即使多次创建值，它们也是不同的：Symbol函数执行后每次创建出来的值都是独一无二的。
5. 我们也可以在创建Symbol值的时候传入一个描述description：这个是ES2019（ES10）的新特性。

```javascript
// 1. ES6之前，对象的属性名（key）
var obj = {
  name:'why',
  friend:{name:'kobe'},
  age:18
}
// 注意：在ES6中，对象属性是以键值对方式出现的，key值看似没有加引号，实际上在底层会加上引号的。
obj['newName'] = 'james'
// 这样就会造成后面的属性覆盖前面的属性，如果是我们自己定义的对象和属性还好因为比较熟悉，如果是引用的呢？就和容易造成覆盖。
obj['name'] = 'yang'    
console.log(obj);
```

## 3.Symbol基本使用

```javascript
// 2. ES6中Symbol的基本使用(Symbol是一个函数)
const s1 = Symbol();
const s2 = Symbol();
console.log(s1===s2);         // false

// ES2019(ES10)中，Symbol还有一个描述（description）
const s3 = Symbol('aaaa');
console.log(s3.description);   // aaa
```

## 4.Symbol值作为key

```javascript
// 3. Symbol值作为key
// 3.1.在定义对象字面量时候使用
const obj = {
  [s1]:'abc',                  // 这里s1，s2是上面定义的
  [s2]:'bca'
}
// 3.2.新增属性
obj[s3] = 'nba'
console.log(obj);

// 3.3.Object.defineProperty方式
const s4 = Symbol();
Object.defineProperty(obj,s4,{
  enumerable:true,
  configurable:true,
  writable:true,
  value:'mba'
})
console.log(obj[s1],obj[s2],obj[s3],obj[s4]);

// 注意：不能通过.（点语法）语法获取
// 这样写它会找obj中作为s1的字符串属性，没有找到就返回undefined
// console.log(obj.s1);     // undefined
```

## 5.Symbol遍历相关

```javascript
// 4. 使用Symbol作为key的属性名，在遍历/Object.keys等中是获取不到Symbol值的
console.log(Object.keys(obj));   // []

console.log(Object.getOwnPropertyNames(obj));  // []

console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(), Symbol(), Symbol(aaaa), Symbol()]

// 4.1.遍历
const symbol_key = Object.getOwnPropertySymbols(obj);
for(const key of symbol_key){
  // 注意这个位置是从obj中拿去key，而不是symbol_key，今天在测试的时候写错了
  console.log(obj[key])
}

```

## 6.创建相同的Symbol值

```javascript
// 5. 有些时候希望创建出来的Symbol值是相同的，那么我们应该怎么办呢？
const sa = Symbol.for('aaa');
const sb = Symbol.for('aaa');
console.log(sa===sb)         // true

const key = Symbol.keyFor(sa);
console.log(key)             // aaa

const sc = Symbol.for(key);
console.log(sa===sc)         // true
```



# 13.【ES6】Set and Map

---

## 1.1.Set

**Set数据结构：**
1. 在ES6前，我们存储数据的结构主要有两种：数组，对象。
2. 在ES6中新增了两种数据结构：Set，Map，以及它们的另外形式。WeakSet，WeakMap。
3. Set是一个数据新增数据结构，可以用来保存数据，类似数组，但和数组的区别是Set元素不能重复。



**Set使用：**

- 创建Set我们需要使用Set构造函数，暂时没有字面量的创建方式。
- var set = new Set()



**Set属性：** size：返回数组中元素个数（类似length属性）



**Set方法：**

1. add(value)：    添加某个元素，返回Set对象本身。   
2. has(value)：    判断Set中是否存在某个元素，返回一个boolean值。
3. delete(value)： 从Set中删除某个元素value表示需要删除的参数，返货一个boolean值
4. clear()：       清空Set中所有的元素，没有返回值。
  
    

**Set集合遍历：**
1. forEach()
2. for of 也支持遍历集合

```javascript
// 1.创建Set结构
const set = new Set();

// 2.add()方法
set.add(10)
set.add(20)
set.add(10)                 // 添加两个相同元素虽然不会报错，但是只会显示一个
set.add([30,40,59])
console.log(set)            // Set(3) {10, 20, Array(3)}

// 3.size属性
console.log(set.size)       // 3

// 4.使用delete删除集合中的某个元素
console.log(set.delete(10)) // true

// 5.has查看集合中某个元素是否存在
console.log(set.has(20))    // true

// 6.clear清空集合中的元素
console.log(set.clear())    // undefined
console.log(set.size)       // 0 
```



## 1.2.Set数组去重

```javascript
// 7.数组去重
// 7.1.普通方式
var arr = [10,34,23,56,26,23,78,21,65,67,78];
var newArr=[];
for(let i=0;i<arr.length;i++){
  if(newArr.indexOf(arr[i])!==-1){
    continue;
  }
  newArr.push(arr[i]);
}
console.log(newArr)

// 7.2.Set方式数组去重
var setArr = new Set(arr);
// 方式1：
const newArray = Array.from(setArr);
// 方式2：
// const newArray = [...setArr]
console.log(newArray)
```

## 1.3.Set中存储对象

```javascript
// 8.Set存储对象
const setObj = new Set();
setObj.add({name:'yang',age:18});
// 对象是不会去重的，因为对象分配的是内存地址，内存地址标识是不会重复的
setObj.add({});
setObj.add({});
console.log(setObj)    // Set(3) {{…}, {…}, {…}}
```

## 1.4.Set遍历

```javascript
const set1 = new Set();
set1.add(10)
set1.add(46)
set1.add(20)
set1.add(30)
set1.add(45)
// 9.使用forEach遍历set集合
set1.forEach(item => {
  console.log(item)
});

// 10.使用for of遍历set集合
for(const item of set1){
  console.log(item)
}
```

## 2.1.WeakSet

1. set的里一个数据结构，称之为WeakSet,也是内部元素不能重复的数据结构。

   

**WeakSet常见的方法：**
- add(value)：   添加某个元素，返回WeakSet对象本身。

- delete(value)：从WeakSet中删除某个元素，value被删除的元素，返回一个boolean值。

- has(value)：判断WeakSet中是否存在某个元素，返回一个boolean值。

## 2.2.Set和WeakSet区别

1. WeakSet只能存放对象类型数据，不能存放基本数据类型。
2. WeakSet对元素的引用是弱引用，如果没有其它引用对某个对象进行引用，那么GC可以对该对象进行回收。

## 2.3.WeakSet的应用

1. WeakSet不能遍历。

2. WeakSet只是对对象的弱引用，如果我们遍历获取到其中元素，那么有可能造成对象不能正常销毁。
3. 所以存储到WeakSet中的对象没办法获取的。

注意：那么这个东西有什么用呢？很少使用。

```javascript
// 1.WeakSet不能存放基本数据类型
let weakSet = new WeakSet();
// Invalid value used in weak set。10是一个基本数据类型，所以这是一一个无效的参数。
// weakSet.add(10)

// 2.WeakSet存放的对象是一个弱引用
var obj = {
  name:'yang',
  age:18
}

weakSet.add(obj);
obj = null;
console.log(weakSet)  // WeakSet {{…}}->value: {name: 'yang', age: 18}


// 使用set集合存放的对象是强引用 Strong Reference
var set = new Set();
set.add(obj);
console.log(set)      // Set(1) {null}


// 3.WeakSet应用场景
const personSet = new WeakSet();
class Person{
  constructor(){
    personSet.add(this);
  }

  running(){
    if(personSet.has(this)){
      throw new Error('不能通过非构造方法创建出来的对象调用running方法');
    }
    console.log('running~',this)
  }
}
var p = new Person();
p.running();

//不能通过非构造方法创建出来的对象调用running方法
p.running.call({name:'yang'});
```

## 3.1.Map数据结构

1. Map数据结构，用于存放映射关系的。

2. Map数据结构类似于对象，存放映射关系，所谓的映射关系就是键值对的集合。

3. 所有的数据都是唯一的，不会重复，每条数据都需要放在一个数组中，它本身就是一个构造函数。

   

**4. Map的属性：map.size** （数据长度）



**5. Map的方法：**

- map.set()：    添加一天数据
- map.get()：    获取一个数据
- map.has()：    查找某一个数据是否存在，返回一个boolean值
- map.delete()： 删除一条数据
- map.clear()：  清空map结合数据

## 3.2.Map和对象的区别

1. 对象数据类型也是存放映射关系的，那它们之间有什么区别呢？
2. 对象的映射关系只能使用字符串和ES6中新增了Symbol类型作为属性名key。
3. 某些情况下我们希望可以通过其它数据类型作为key值，比如对象。

## 3.3.Map基本使用

```javascript
const obj1 = {name:'yang'}
const obj2 = {name:'why'}

var info = {
  obj1:'aaaa',
  obj2:'bbbb'
}
// 相当于将obj1这个对象转换成了string类型
console.log(typeof (info.obj1))  // string

// 在node.js环境中对象转换成字符串会编程 [object object] 
// 结果会是：[object object]:'bbbb'  因为key的是一样的，所以会出现后面覆盖前面的情况


// 1.Map是允许对象作为key的
const map = new Map();
map.set(obj1,'aaaa')
map.set(obj2,'bbbb')
map.set(200,'cccc')
console.log(map)      // Map(3) {{…} => 'aaaa', {…} => 'bbbb', 200 => 'cccc'}

// 2. Map里面也是可以传入一个数组的，只不过数组是一个entries格式
// 2.1.数组里面的每一个元素都是一个数组，存着键值对形式，就是entries格式
const map2 = new Map([[obj1,'aaaa'],[obj2,'bbbb'],[200,'cccc']])
console.log(map2)     // Map(3) {{…} => 'aaaa', {…} => 'bbbb', 200 => 'cccc'}
```

## 3.4.Map遍历

```javascript
const map2 = new Map([[obj1,'aaaa'],[obj2,'bbbb'],[200,'cccc']])
// 3. 遍历Map集合
map.forEach(item=>{
  console.log(item)      // 输出的是值
});

/**
 * item：对应value键值
 * key：对应的key键名
 * map：对应的是遍历的这个集合
 */
map.forEach((item,key,map)=>{
  console.log(item,key,map)
});

/**
 * 使用 for of 遍历出来的item是一个数组
 * 数组中又存放着key,value值 
 */
for(const item of map){
  console.log(item)
}

// 也可以直接对数组进行结构
for(const [key,value] of map){
  console.log(key,value)
}
```

## 4.1.WeakMap

1. WeakMap是和Map相似的另一种数据结构，也是以键值对形式存在的。
2. weak reference 弱引用。



**WeakMap常见的四个方法：**

1. set(key,value)：在Map中添加key，value，并且返回整个Map对象。

2. get(key)：根据key值获取Map中的对象。

3. has(key)：判断是否包括某一个key值，返回值一个Boolean类型。

4. delete(key)：根据key值删除一个键值对，返回值一个Boolean类型。

   

**WeakMap的遍历：**

1. WeakMap也是不能遍历的。
2. 因为没有forEach方法，也不支持通过for of方式进行遍历。

## 4.2.WeakMap和Map区别

1. WeakMap的key只能使用对象类型，不接受其它类型的值做为key。
2. WeakMap的key对对象的引用是弱类型引用，如果没有其它引用引用这个对象，那么GC可以回收该对象。
3. 注意：GC是会忽略弱类型引用的，但是弱类型的引用里面还是包含着销毁的对象。

## 4.3.WeakMap使用

```javascript
// 1. 不是使用基本数据类型
const obj = {name:'why'}

var weakMap = new WeakMap();
// Invalid value used as weak map key
// weakMap.set(1,'aaaa');

var map = new Map();
map.set(obj,'aaaa');
map.set(1,'bbbb')
console.log(map)     // Map(2) {{…} => 'aaaa', 1 => 'bbbb'}

// 2. WeakMap是弱引用，Map是强引用。
console.log(weakMap)

// 3. 【没看懂】WeakMap有什么用呢？
const targetMap = new WeakMap();
function getDep(target,key){
  // (1).根据对象target取出对应的Map对象
  let depsMap = targetMap.get(target);
  if(!depsMap){
    depsMap = new Map();
    targetMap.set(target,depsMap);
  }

  //（2）.取出具体的dep对象
  let dep = depsMap.get(key);
  if(!dep){
    dep = new Dep()
    depsMap.set(key,dep);
  }
  return dep;
}
```



# 14.【ES7】相关点

---

## 1.方法includes和indexOf区别

**includes：判断数组是否包含某个元素（注意includes后面是有s的）。**

- ES7以前，判断数组中是否包含某个元素，使用的是indexOf()方法，判断是否为-1。
- ES7中，使用includes方法判断数组中是否包含某一个元素，包含返回true，否则返回false。



**indexOf和includes方法区别：**

1. indexOf判断数组中是否包含某个元素，数组中如果存在NaN是判断不出来的。
2. includes判断数组中是否包含某个元素，数组中如果存在NaN是可以判断出来的。

```javascript
var str = ['aaa','ddd','ccc','ddd',NaN,undefined];
if(str.indexOf('aaa') !== -1){
  console.log('包含元素');
}

if(str.indexOf(undefined) !== -1){
  console.log('包含undefined');
}else{
  console.log('不包含undefined');
}

// indexOf不能判断出NaN元素是否在数组中
if(str.indexOf(NaN) !== -1){
  console.log('包含NaN');
}else{
  console.log('不包含NaN');        // 不包含
}

// includes是能判断出NaN元素是否在数组中的
if(str.includes(NaN)){
  console.log('包含NaN');         // 包含
}else{
  console.log('不包含NaN');
}
```

## 2.新增乘方运算符

1. ES5中使用的是：Math.pow(3,3)
2. ES7新增了一个运算乘法的方式。 ** 运算符

```javascript
var es5 = Math.pow(3,3);
const es7 = 3 ** 3;
console.log(es5,es7)    // 27 27
```



# 15.【ES8】相关点

---

## 1.Object.keys和Object.values

1. Object.keys：通过Object.keys方法获取对象中的所有key值。
2. Object.values：通过Object.value方法来获取对象中的所有value值。

```javascript
var info = {
  name:'yang',
  age:18,
  job:'攻城狮',
  like:'发呆'
}
console.log(Object.keys(info))   // (4) ['name', 'age', 'job', 'like']
console.log(Object.values(info)) // (4) ['yang', 18, '攻城狮', '发呆']

// 如果传进来的是一个数组，则返回该数组 (4) ['aaa', 'bbb', 'ccc', 'ddd']
console.log(Object.values(['aaa','bbb','ccc','ddd']));

// 如果传进来的是字符串，字符串会拆分成数组 (4) ['a', 'b', 'c', 'd']
console.log(Object.values('abcd'))
```

## 2.Object.entries()

1. ES8新增：Object.entries可以获取到一个数组，数组中存放着枚举属性键值对形式。

```javascript
var obj = {
  name:'yang',
  age:18,
  like:'发呆'
}
// 1. 对象转换成entries格式
// {['name', 'yang'],['age', 18],['like', '发呆']}
// console.log(Object.entries(obj))

const enItems = Object.entries(obj);
enItems.forEach(item=>{
  // 取到对应的键值对
  console.log(item[0],item[1])
});

// 2. 数组转换成entries格式（会将index索引值作为key的值）
// {['0', 'aaa'],['1', 'bbb'],['2', 'ccc'],['3', 'ddd']}
console.log(Object.entries(['aaa','bbb','ccc','ddd']));

// 3. 字符串也可以使用entries转换成数组
// {['0', 'y'],['1', 'a'],['2', 'n'],['3', 'g']}
console.log(Object.entries('yang'))
```

## 3.字符串填充

1. 从开始字符串的位置填充：padStart()。
2. 从字符串结束的位置填充：padEnd()。

```javascript
var name = 'yang'
// padStart(参数1：预计填充后新字符串的长度,参数2：用什么填充[第二个参数不填默认用空格填充])
console.log(name.padStart(10,'*'))  // ******yang

console.log(name.padEnd(10,'*'))    // yang******

// 案例：
let carsNum = '2345678902345678932323'
let newNum = carsNum.slice(-4) 
let finalNum = newNum.padStart(carsNum.length,'*')
console.log(finalNum)   // ******************2323 银行卡号处理
```

## 4.【不重要】结尾逗号

> Trailing Command 结尾逗号

1. 参数结尾多了一个逗号，这样是不会报错的，没有什么意义，只是为了兼容一些其它的语言。
2. 有些语言是参数末尾加逗号的，再来写js很不习惯，就是为了兼容其它语言开发着的习惯而添加的。

```javascript
function test(a,b,c,){
  console.log(a,b,c,)
}
console.log(1,2,3,)
```

## 5.获取对象描述

1. Object.getOwnPropertyDescriptor(obj,prop)。
2. 参数：

- 参数1：obj  需要查找的目标对象。
- 参数2：prop 目标对象内属性名称。

3. 返回值：如果指定的属性存在于对象上，则返回其属性描述符对象（property descriptor），否则返回 undefined。

4. 描述：

- writable：当且仅当属性的值可以被改变时为 true。(仅针对数据属性描述有效)
- enumerable：当且仅当指定对象的属性可以被枚举出时，为 true。
- configurable：当且仅当指定对象的属性描述可以被改变或者属性可被删除时，为 true。

```javascript
var info = {
  name:'yang',
  age:18
}

// {value: 'yang', writable: true, enumerable: true, configurable: true}
// console.log(Object.getOwnPropertyDescriptor(info,'name'))

const descriptor1 = Object.getOwnPropertyDescriptor(info, 'name');
console.log(descriptor1.configurable);     // true
console.log(descriptor1.value);            // yang
```

## 6.异步函数

1. async 函数是使用async关键字声明的函数。 async 函数是AsyncFunction构造函数的实例， 并且其中允许使用await关键字。
2. async和await关键字让我们可以用一种更简洁的方式写出基于Promise的异步行为，而无需刻意地链式调用promise。

```javascript
/**
 * 语法分析：
 *  1. async 声明函数关键字
 *  2. name  声明函数的函数名
 *  3. param 传递的函数参数
 *  4. statements函数主体内容，还可以使用 await 机制
 * 
 *  async function name([param[, param[, ... param]]]) {
 *     // statements
 *  }
 */
```



# 16.【ES10】相关点

---

## 1.flat方法

1. flat()方法会按照一个可以指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
2. 参数，默认为1，需要降的维度。

```javascript
// 1.flat()方法
const numArr = [10,20,[5,8],[[2,3],[9,22]],100];
// 使用的是flat方法的默认值1，结果如下（当前的numArr是三维数组，降1维就变成2维）。
const newNum1 = numArr.flat();
// 当前的numArr是三维数组，降2维就变成1维。结果如下。
const newNum2 = numArr.flat(2)

console.log(newNum1)   // (7) [10, 20, 5, 8, Array(2), Array(2), 100]
console.log(newNum2)   // (9) [10, 20, 5, 8, 2, 3, 9, 22, 100]
```

## 2.flatMap方法

1. flatMap()方法首先使用映射函数映射每一个元素，然后将结果压缩成一个数组。

2. 注意1：flatMap是先进行map操作，再做flat操作。

3. 注意2：flatMap中的flat相当于深度为1。

   

**flatMap参数:**

- 参数1：回调函数
- 参数2：为绑定this，可以省略。

```javascript
// 2.flatMap()方法（在二维数组中使用确实降了一维）
// const message = ['hello world','你好 李银河','my name is why',['yang','x','yang']];
// const newMessage = message.flatMap(item=>{
//   console.log(item)  // hello world  你好 李银河 my name is why (3) ['yang', 'x', 'yang']
// });

// 3.flatMap()应用场景：
// 需求将字符串按照空格进行分割，分隔后放入数组中形成一个一维数组
const message = ['hello world','你好 李银河','my name is why'];

// 方式1：需要遍历2次
var newArr = [];
for(const item of message){
  var  world = item.split(" ");

  for(let elem of world){
    newArr.push(elem);
  }
}
console.log(newArr)

// 方式2：这个就只需要遍历一次
const newMessage = message.flatMap(item=>{
  return item.split(' ');
})
// console.log(newMessage)   // (8) ['hello', 'world', '你好', '李银河', 'my', 'name', 'is', 'why']
```

## 3.Object的fromEntries

1. 作用：遍历Entries格式的数据，将Entries格式数据转换成对象。

   

**注意事项：**

1. Object.Entries将对象转换成Entries格式数据【ES8】。
2. Object.fromEntries将Entries格式转换成对象【ES10】。

```javascript
const obj={
  name:'yang',
  age:18,
  job:'攻城狮'
}
// 1.将对象格式转换成entries格式  
var entries = Object.entries(obj);
console.log(entries)   // (3) [['name', 'yang'],['age', 18],['job', '攻城狮']]

// 2. 那么怎么将entries格式转换成对象呢？
// 需要遍历 entries 
var newObj = {}
for(var item of entries){
  newObj[item[0]] = item[1];
}
console.log(newObj)      // {name: 'yang', age: 18, job: '攻城狮'}

// 3. ES10后直接使用Object.fromEntries就可以了
var newObj1 = Object.fromEntries(entries);
console.log(newObj1)    // {name: 'yang', age: 18, job: '攻城狮'}
```

## 4.Object的fromEntries应用场景

```javascript
// Object.fromEntries应用场景：
var strHttps = 'https://wwww.baidu.com?user=yang&pwd=123456';
var [newHttps,newQuery] = strHttps.split('?');

var queryParam = new URLSearchParams(newQuery);
// for(var param of queryParam){
//   console.log(param) 
// }
// 1. queryParam 是一个对象
// 2. param 是一个数组 ： {['user', 'yang'],['pwd', '123456']}
console.log(Object.fromEntries(queryParam))  // {user: 'yang', pwd: '123456'}
```

## 5.去首尾空格

1. 字符串.trimStart：去除首空格。
2. 字符串.trimEnd：  去除尾空格。



**ES5：中的trim()**

- 字符串.trim() 去除左右两边空格。



**trimLeft**和**trimRight**和ES10新增的达到的效果是一样的，只不过这两个会存在浏览器兼容性问题。

1. 字符串.trimLeft()
2. 字符串.trimRight()

```javascript
var name = '      yang        ';
console.log(name)
console.log(name.trimStart())
console.log(name.trimEnd().trimStart()) 

console.log(name.trim())

console.log(name.trimLeft().trimRight())
```



# 17.【ES11】相关点

---

## 1.BigInt

1. BigInt：ES11（ES2020）新增的数据类型（大数字）。
2. ES11前最大int型数字是：Number.MAX_SAFE_INTEGER

- console.log(Number.MAX_SAFE_INTEGER)  9007199254740991

```javascript
// 1. console.log(Number.MAX_SAFE_INTEGER)

// 2. BigInt和int（number）类型的数字相加是会报错的。
// BigInt称为大数字整型，int（number）称为小数字整型。
const maxNum = 100;
const bigNum = 9007199254740991n;

// Cannot mix BigInt and other types, use explicit conversions
// (1).不能混合使用BigInt和其它类型
// console.log(maxNum+bigNum)

// (2).BigInt和int类型两个数字相加，必须得给小数字类型转换成大数字类型
console.log(BigInt(maxNum)+bigNum)

// (3).还可以加int类型的数字后面加一个n，表示将小数字转换成大数字。
console.log(10n+bigNum)

// (4).也可以将BigInt类型的数字转换成Number类型，这样就会造成溢出，不确定数字。
// 因为int类型最大数字是Number.MAX_SAFE_INTEGER，如果在它的基础上再进行假发运算就会造成数字溢出，也就是不确定数字。
const newNum =Number(bigNum)

console.log(maxNum,bigNum)
```

## 2.空值操作运算符

> Nullish coalescing Operator 空值操作运算符。
>
> 语法：??

```javascript
// 案例1：
var a = 0;

// 1. 使用或运算符（||），只要前面为假，它就会返回后面的
// undefined，null，0，'',false 都是假。
var num1 = a||'default value';
console.log(num1)  // default value


var b = '';        
// 2. 使用空值运算符是只有在null和undefined的时候是false，其余的时候都是true，包括（''，' '，0）三种情况都是真。
var num2 = b ?? 'default value';
console.log(num2)  // 0
```

## 3.可选链的使用

1. 可选链运算符的使用：Optional chaining。
2. ES11新增特性：主要作用是让我们的代码在进行null和undefined判断时更加清晰和简介。
3. 语法：**?.**。

```javascript
var info = {
  name:'yang',
  friendOne:{
    name:'li'
  },
  // friendTwo:{
  //   name:'wang'
  // }
}
// 1. 获取info对象下面的对象属性
console.log(info.friendOne)       // {name: 'li'}

// 2. 获取info对象中不存在的属性
console.log(info.friendTwo)       // undefined

// 3. 获取不存在的对象属性，获取不存在的对昂返回undefined，然后undefined.name就直接报错了。
// 这样一来就阻塞下面代码的执行了。
//  error：Cannot read properties of undefined (reading 'name')
// console.log(info.friendTwo.name)  

// 4.使用可选链操作符 (?.)操作符
// 使用可选链操作符后，获取对象下面不存在的属性返回undefined，如果获取的对象存在就返回，不会阻塞下面的代码执行。
console.log(info?.friendTwo?.name)

onsole.log('我是其它代码块......')
```

##  4.globalThis

1. globalThis：获取某一个环境下的全局变量（对象）。



**浏览器中的全局：**

1. 使用 window 获取全局变量。
2. 也可以使用 this 获取全局变量，this是指向 window 的。



**node.js全局环境：**

1. window在node环境下会报错。
2. node中全局变量是global。



**这样每一个环境下，的全局都不一样，不兼容就会造成很多的不便？**

- globalThis：关键字是获取全局变量，而且还兼容所有的环境 

```javascript
// 分别在控制台node.js环境和浏览器中测试，是OK的。
console.log(globalThis)          // 咦，真香，这新增的特性果然好用。
console.log(globalThis===window) // true
```

## 5.for-in规范化

1. for in 和 for of两者的使用：

- for in 中的item返回的是index（key）值，在ES11前，不同的浏览器item返回的结果是不一样的，以至于很多时候都混淆了for of。
- ES11中名且规定item返回的是index（key）值。
- for of返回的是value值。

```javascript
var numArr = [20,30,40,78,12,21,34,89,12];
for(var item in numArr){
  console.log(item)    // 返回的是index
}

for(var item of numArr){
  console.log(item)    // 返回的是value
}
```



# 18.【ES12】相关点

---

## 1.FinalizationRegistry

> ES12:如果出现不兼容环境，需要升级浏览器版本或者node.js环境的版本。
>
> 之前我们说对象监听不到，现在就可以使用FinalizationRegistry进行对象监听，对销毁对象进行监听。

1. FinalizationRegistry：监听对象销毁。
2. FinalizationRegistry是一个类，需要实例化的。
3. FinalizationRegistry对象可以让你在对象被垃圾回收时请求一个回调。
4. FinalizationRegistry提供了这样的一个方法：当一个在注册表中注册的对象被回收时，请求在某个时间点上调用一个清理回调。清理回调时被称为 finalizer。
5. 你可用通过调用register方法，注册任何你想要清理回调的对象，传入该对象和所含的值。



**FinalizationRegistry实例化：**

```javascript
// 1. FinalizationRegistry是一个类，需要实例化
let fr = new FinalizationRegistry(callback)
```



**FinalizationRegistry基本使用：**

```javascript
var info = {
  name:'yang',
  age:18
}

var obj = {
  name:'杨小样',
  age:17
}

// 1.实例化类
let fr = new FinalizationRegistry((value)=>{
  console.log('对象销毁了！',value);
})

// 2. 将对象注册到实例对象的方法中register()方法中
// 参数1：注册对象
// 参数2：注册对象标识（在上面类实例化中的回调函数中接收标识，就可以知道哪一个对象被回收了）
fr.register(info,'info');
fr.register(obj,'obj');

// 3. 销毁info对象
info = null;
obj = null;
```

## 2.WeakRef

1. 如果我们默认将一个对象赋值给另一个对象引用，那么这个引用时一个强引用。
2. 如果我们希望是一个弱引用，可以使用WeakRef。



**WeakRef.prototype.deref()方法：**

1. 如果原对象没有销毁，可以获取到原对象的属性。
2. 如果原对象已经销毁，获取到的就是undefined。



**WeakRef基本使用：**

```javascript
var info = {
  name:'yang',
  age:18
}
// 1. 强引用 strong reference
// 1.1. 在这种情况下下面使用 info = null info这个对象还是不会被销毁，因为有一个obj对象也指像这个info的引用地址。
// var obj = info           

// 2.弱引用 Weak reference
// 2.1. 我们使用weakRef方式，你就会发现info=null的时候对象立刻销毁。
var obj = new WeakRef(info); 

let fr = new FinalizationRegistry((value)=>{
  console.log('对象销毁了！',value);
})

fr.register(info,'info');
info = null;

// 在info对象销毁后10秒再获取info对象中的name属性，看是否可以获取
// 获取不到：Uncaught TypeError: Cannot read properties of undefined (reading 'name')
setTimeout(()=>{
// 注意：这里尽量使用可选链运算符，当原对象销毁时候直接返回undefined，否则会报错。
 	console.log(obj.deref()?.name)          
},10000);
```



## 3.逻辑赋值运算符

1. ||=  逻辑或赋值运算符
2. &&=  逻辑与赋值运算符
3. ??=  逻辑空赋值运算符



**逻辑赋值运算符基本使用：**

```javascript
// 1. 逻辑或赋值运算符
let message = 'hello world';
// message = message || 'default value'
message ||= 'default value';
console.log(message);

// 2. 逻辑与赋值运算符（很少使用，很别扭）
var info = {
  name:'yang'
}
console.log(info &&=info.name)

// 3.逻辑空赋值运算符
// '',0,false,true 都会返回
// undefined,null 不会返回，返回默认值default value
var str = true;
str ??= 'default value'
console.log(str)
```



# 19.【ES13=2022】相关点

---

## 1.at方法

1. at()方法：

- 在数组和字符串中通过下标查找元素。
- at()方法存在兼容性问题。



**at方法的基本使用：**

```javascript
var arr = ['a','b','c','d','e'];
    console.log(arr.at(3))   // d


    var str =  'abcdefgh';
    console.log(str.at(5))   // f
    
```

## 2.Object.hasOwn

1. Object.hasOwn(obj,propertyKey)
- 对象属性判断。

- 判断属性在对象本身是否存在，而不是原型上。

- Object.hasOwn()方法是用于替换hasOwnProperty()的。

  


2. Object.hasOwn(obj,propertyKey)和hasOwnProperty(propertyKey)两者区别：
- Object.hasOwn()是通过类对象调用的，也就是Object对象调用的。
- hasOwnProperty()是通过对象实例调用的。

```javascript
// 1. Object.hasOwn 拿不到原型上的job属性
function Info(name,age){
  this.name = name
  this.age = age

  console.log(name,age)
}
Info.prototype.job = '攻城狮';

var info = new Info('张三',18);

console.log(Object.hasOwn(info,'name'))  // true
console.log(Object.hasOwn(info,'job'))   // false

// 2. hasOwnProperty(propertyKey)拿不到原型上属性
console.log(info.hasOwnProperty('name')) // true
console.log(info.hasOwnProperty('job'))  // false
```

## 3.ES13中新增类成员字段

  1. Instance public fields     公共实例字段
  2. static public fields       类属性static公共的
  3. Instance private fields    私有实例字段
  4. static private fields      静态私有字段
  5. static block               静态代码块









