# 01. 前置知识

---

## 1. 小白眼中的前端

1. 会写HTML+CSS+Javascript就会前端开发。
2. 需要美化页面样式，就拽一个bootstrap过来。
3. 需要操作DOM或者发起Ajax请求，在拽一个jQuery。
4. 需要快速实现网页布局效果，就拽一个Layui过来。

## 2. 实际的前端开发

> 现代前端的开发的四化。

1. 模块化：js的模块化，css的模块化，资源的模块化。
2. 组件化：复用现有的UI结构，样式，行为。
3. 规范化：目录结构的划分，编码规范化，接口规范化，文档规范化，Git分支管理。
4. 自动化：自动化构建，自动部署，自动化测试。

# 02. 认识 webpack
---

## 1. 什么是 webpack

1. webpack 是一个模块打包器（构建工具）。它的主要目标是将 javascript 文件打包在一起，打包后的文件用于在浏览器中使用，但它也能够胜任转换（transform）、打包（bundle）或包裹（package）任何资源（resource or asset）。

2. 官网：https://webpack.js.org/ 

3. 中文文档：https://webpack.docschina.org/

   

## 2. 了解webpack的原理和概念

1. 树结构：在一个入口文件中引入所有资源，形成所有依赖关系树状图。
2. 模块：模块就是模块可以是ES6模块，也可以是commonjs或者AMD模块，对于webpack来说，所有的资源(css，img......)。
3. chunk：打包过程中呗操作的模块文件叫做 chunk，例如异步加载一个模块就是一个 chunk。
4. bundle： bundle 是最后打包的文件，最终文件可以和chunk长得一模一样，但大部分情况下它是多个 chunk 的集合。
5. 为了优化最后产出的bundle数量可能不等于chunk的数量，因为有可能多个chunk被组合到一个bundle中。


# 03. webpack的安装

---

## 1. webpack安装步骤

1. 安装 webpack 首先需要安装 node.js ，node.js 自带了软件包管理工具；

2. 安装完 node.js 后通过命令查看 node 版本（命令：node -v）；


3. 全局安装 webpack（@后面是指定的版本号，也可以可以忽略不写）；

```js
npm install webpack@5.24.3  -g 
npm install webpack-cli  // 还需要安装脚手架
webpack -v 							 // 检测安装 
```


4. 局部安装 webpack（后续才需要）

```js
npm install webpack@5.24.3 --save--dev
```



## 2. webpack 全局安装后还需要局部安装

1. 在终端直接执行 webpack 命令，使用全局安装的 webpack。

2. 当在 package.json 中定义了 script 时，其中包含 webpack 命令，那么使用的是局部 webpack。

   

## 3. 安装方式之间区别




# 04.【重点】webpack的基本使用

---

## 1. 步骤1：创建列表隔行变色项目

1. 新建项目空目录，并运行**npm init -y**命令，初始化包管理配置文件**package.json**。
2. 新建src源代码目录。
3. 新建src目录中分别建一个index.html和index.js脚本文件。
4. 初始化首页基本的结构。
5. 运行安装**npm install jquery -S**命令，安装jQuery。
6. 通过ES6模块化的方式导入jQuery，实现列表渐变效果。

## 2. 步骤2：在项目中安装webpack

1. 指定版本安装webpack和webpack-cli。
2. **`如果不指定版本，默认安装最新版。`**

```terminal
npm install webpack@5.24.3 webpack-cli@4.7.2 --save-dev
```

## 3. 步骤3：在项目中配置webpack

1. 在项目根目录中，创建名为webpack.config.js的webpack配置文件，初始化如下配置。

```js
module.exports = {
  "mode": 'development' // mode用来指定构建模式。可选值：development和production。
}
```

2. 在package.json的scripts节点下新增一个dev脚本，如下。

```js
"scripts": {
    "dev": "webpack"
},
```

3. 在终端里面运行：**`npm run dev`**命令，启动webpack进行项目的打包构建。

## 4. 步骤4：展示代码文件

```js
// 1. 该文件为src目录中的index.js文件，在html中引入的不是这个文件，而是dist目录下面的main.js文件。
// 2. 更改代码之后，需要进行打包，npm run dev命令进行打包。
import $ from 'jquery'
(function(){
  $('li:odd').css('background-color','red');
  $('li:even').css('background-color','green');
})();
```



**webpack.config.js文件说明：**

1. webpack.config.js是webpack的配置文件。webpack在真正开始打包构建之前，会先读取配置文件，从而基于给定的配置，对项目进行打包。

2. 注意：由于webpack是基于node.js开发出来的打包工具，因此在它的配置文件中，支持node.js相关的语法和模块进行webpack的个性化配置。

   

## 6.【重点】webpack中的默认约定

> 在webpack4.x和webpack5.x中，有如下默认约定。

1. **默认的打包入口文件为src/index.js。**
2. **默认的输出文件路径为dist/main.js。**
3. 注意：可以在webpack.config.js中修改打包的默认约定。


**自定义打包的入口与出口：**

```js
const path = require('path');

module.exports = {
  entry: path.join(__dirname,'./src/index.js'),     // 打包入口文件的路径
  output: {
    path: path.join(__dirname,'./dist'),            // 输出文件的存放路径
    filename: 'bundle.js'                           // 输出文件的名称
  },
  "mode": 'development'      												// mode用来指定构建模式。可选值：development和production。
}
```

# 05.【重点】webpack中的插件

---

> 通过安装和配置第三方插件，可以扩展webpack的能力，从而让webpack用起来更方便，最常用的插件如下。

## 1. webpack-dev-serve

1. 类似于node.js阶段用到的nodemon工具。
2. **作用：每当修改了源代码，webpack会自动进行项目的打包和构建。**

```js
npm install webpack-dev-server@3.11.2 -D    // 不指定版本直接安装默认版本
```

```js
// 注意：package.json文件中的scripts节点的dev里面加一个 serve。
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
   "dev": "webpack serve"
},
```

3. 再次运行 **npm run dev** 命令，重新进行项目的打包。
4. 在浏览器中访问http://localhost:8080地址，查看自动打包的效果。
5. **注意：webpack-dev-serve会启动一个实时打包的http服务，终端也不会退出，是实时监听的。**

6. **引出下一个插件：**当生成访问地址：http://localhost:8080，这个地址指向的是文件根目录，而不是src中的index.html文件，这个时候还需要我们手动只想src目录中才可以访问index.html页面。`需要安装html-webpack-plugin插件。`

   

## 2. html-webpack-plugin

1. webpack中的html插件（类似于一个模板引擎插件）。
2. 可以通过此插件自定制index.html页面的内。

```js
npm install html-webpack-plugin -D          // 不指定版本直接安装默认版本
```

```js
// 注意：webpack.config.js文件中进行配置。
// 1. 导入html插件，得到一个构造函数
const HtmlPlugin = require('html-webpack-plugin');

// 2. 创建 html 插件的实例对象
const htmlPlugin = new HtmlPlugin({
  template: './src/index.html',                     // 指定原文件的存放路径
  filename: './index.html',                         // 指定生成文件的存放路径
});

module.exports = {
  entry: path.join(__dirname,'./src/index.js'),     // 打包入口文件的路径
  output: {
    path: path.join(__dirname,'./dist'),            // 输出文件的存放路径
    filename: 'bundle.js'                           // 输出文件的名称
  },
  // 3. 通过Plugins节点，使htmlPlugin插件生效
  plugins:[htmlPlugin],                             
  "mode": 'development'                              // mode用来指定构建模式。可选值：development和production。
} 
```

## 3. 解惑html-webpack-plugin

1. 通过html插件复制到项目根目录中的index.html页面，也是被放到内存中的。不然http://localhost:8080是无法访问到index.html页面的。

2. html插件在生成index.html页面，自动注入了打包的bundle.js文件，在dist目录下面（这个是存放在硬盘中的）。

3. 插件安装完成后，后在根目录中生成一个index.html文件，是一个隐藏的文件，存放在内存中的，后面通过生成的访问地址可以直接访问到index.html文件，而不需要向之前一样需要指定到src目录。


## 4. devServer节点

1. 在webpack.config.js配置文件中，可以通过devServer节点对webpack-dev-server插件进行更多的配置。

```js
module.exports = {
   devServer: {
     open: true,                                     // 初次打包完成自动浏览
     host: '127.0.0.1',                              // 实时打包所使用的主机地址
     port: 80                                        // 实时打包所使用的端口号，80端口可以省略
   },                        
  "mode": 'development'      												 // mode用来指定构建模式。可选值：development和production。
} 
```

2. 注意：凡是修改了webpack.config.js配置文件或者package.json配置文件，**必须重启实时打包服务器**，否则最新的配置文件无法生效。



# 06.【重点】webpack中常用loader

---

## 1. loader概述

1. 在实际开发过程中，webpack默认只能打包处理以.js后缀名结尾的模块。其它非.js后缀结尾的模块，webpack默认处理不了，**需要调用loader加载器才可以正常打包**，否则会报错。
2. **loader加载器的作用：协助webpack打包处理特定的文件模块：**

- css-loader可以打包处理.css相关的文件。

- less-loader可以打包处理.less相关的文件。

- babel-loader可以打包处理webpack无法处理的高级JS语法。

  

3. **loader调用的过程：**

![](D:\NOTES\markdown\images\webpack\loader.png)

## 2. 打包处理CSS文件

1. 安装打包处理CSS文件的插件**style-loader**和**css-loader**两个插件。

```js
npm install style-loader@3.0.0 css-loader@5.2.6 -D
```

2. 在webpack.config.js的module下面rules数组中，添加loader规则如下：

```js
// 所有第三方插件模块匹配规则module是放在module.exports对象里面的。 
module:{
  // 文件后缀匹配规则
  rules:[
    {test:/\.css$/,use:['style-loader','css-loader']}
  ]
}
```

- 其中，test表示匹配的文件类型，use表示要调用的loader插件。
- use数组中指定的loader顺序是固定的。
- 多个loader的调用顺序是：**从后往前调用**。

**执行步骤分析：**

1. webpack默认只能打包处理.js结尾的文件，处理不了其它后缀的文件。

2. 由于代码中包含了index.css这个文件，因此webpack默认处理不了。

3. 当webpack发现某个文件处理不了的时候，会查找webpack.config.js这个配置文件，看module.rules数组中，是否配置了对应的loader加载器。

4. webpack把index.css这个文件，先转交给最后一个loader进行处理（先交给css-loader）。

5. 当css-loader处理完毕之后，会把错误处理结果，转交给下一个loader（再转交给style-loader）。

6. 当style-loader处理完毕之后，发现没有下一个loader了，于是就把处理的结果转交给webpack。

7. webpack把style-loader处理的结果，合并到/dist/bundle.js中，最终生成打包好的文件。


## 2. 打包处理less文件

1. 安装less-loader插件。

```js
npm install less-loader@10.0.1 less@4.1.1 -D    // 不指定版本号，下载最新版本
```

2. webpack.config.js的module中的rules数组中，添加loader规则。

```js
// 所有第三方插件模块匹配规则
module:{
  // 文件后缀匹配规则
  rules:[
    {test:/\.css$/,use:['style-loader','css-loader','less-loader']}
  ]
}
```

## 3. 打包处理样式表中与url路径相关

1. 安装打包图片插件。

```js
npm install url-loader@4.1.1 file-loader@6.2.0 -D
```

2. webpack.config.js的module中的rules数组中，添加loader规则。

```js
module:{
  // 文件后缀匹配规则
  rules:[
    {test:/\.jpg|png|gif$/,use:'url-loader?limit=400'}
  ]
}
```

3. 其中?之后的是loader参数项。

- limit用来指定图片的大小，单位是字节（byte）。

- 只有<=limit大小的图片，才会被转换为base64格式的图片。

- 注意：因为base64图片比没转换之前还要大，在一些大图使用中通常不会使用转化成base64格式（例如：轮播图）。


## 4. 打包处理js的高级语法

> webpack只能打包处理一部分高级的javascript语法。对于那些webpack无法处理的高级js语法，需要借助babel-loader进行打包处理。例如webpack无法处理ES6及以上的很多代码部分。

1. 安装打包高级js语法的插件。

```js
npm install babel-loader -D     // 不指定版本安装最新版本
```

2. 配置babel-loader，在webpack.config.js文件里面。

```js
module:{
  // 文件后缀匹配规则
  rules:[
    // 在配置babel-loader的时候，只需要转换我们自己书写的代码，一定要排除node_modules目录中的js文件
    {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
  ]
}
```

3. 配置babel-loader，在项目根目录下，创建babel.config.js的配置文件，定义babel配置项。

```js
module.exports = {
  // 声明babel可用的插件
  // webpack在调用babel-loader插件的时候，会先加载plugins插件来使用
  plugins:[['@babel/plugin-proposal-decorators',{legacy:true}]]
}
```

4. 详情参考Babel官网：https://babeljs.io/docs/en/babel-plugin-proposal-decorators

## 5. 配置webpack的打包发布

1. 在package.json文件scripts节点下新增build命令。

```js
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev": "webpack server",                // 开发环境中，运行dev命令，dev打包是存放在内存中的。
  "build": "webpack --mode production"    // 项目发布时，运行build命令，项目发布的时候是需要打包到磁盘。
}
```

2. --mode 是一个参数项，用来指定webpack的运行模式。production代表生产环境，会对打包生成的文件进行**代码压缩和性能优化**。
3. 注意：**通过--mode指定的参数项，会覆盖webpack.config.js中的mode选项**。

4. 把javascript文件统一生成到js目录中。

```js
//（1）在webpack.config.js配置文件的output节点中进行配置。
output: {
  path: path.join(__dirname,'./dist'),            // 输出文件的存放路径
  filename: 'js/bundle.js'                        // 输出文件的名称
}

// 所有第三方插件模块匹配规则
module:{
  // 文件后缀匹配规则
  rules:[
    //（2）多个参数之间使用&间隔，outputPath=images 文件打包后存放在dist目录中的images目录中。
    {test:/\.jpg|png|gif$/,use:'url-loader?limit=400&outputPath=images'}
  ]
}
```

## 6. 自动清理dist目录下的旧文件

> 为了在每次打包发布的时自动清理掉dist目录中的旧文件，可以安装并配置clean-webpack-plugin插件。

1. 安装clean-webpack-plugin插件。

```js
npm install clean-webpack-plugin@3.0.0 -D
```

2. 按需求导入插件，得到插件构造函数之后，创建插件的实例对象。

```js
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const cleanWebpackPlugin = new CleanWebpackPlugin();
```

3. 把创建的cleanWebpackPlugin插件实例对象，挂载到plugins节点中。

```js
plugins:[cleanWebpackPlugin]     // 挂载插件，多个插件之间用逗号隔开
```

# 07.【了解】Source Map

---

## 1. 什么是Source Map

> Source Map是信息文件，里面存储的位置信息，定位错误行号。

1. Source Map就是一个信息文件，里面存储的位置信息。也就是说Source Map文件中存储这压缩混淆后的代码，所对应的转换前的位置。
2. 有了它，出错的时候，除错工具将直接显示原始代码，而不是换行后的代码，能够极大方便后期的调式（也就是说代码压缩后，错误显示的行号和没压缩的显示的行号不是一一对应的，是不一样的）。

## 2. 默认Source Map的问题

1. 在开发环境下默认生成的Source Map，记录的是生成后的代码位置（打包后的代码位置）。会导致运行时报错的行数与源代码行数不一样的问题。

![source map](D:\NOTES\markdown\images\webpack\source map.png)


## 3. 解决默认Source Map的问题

`开发环境下`，推荐webpack.config.js中添加如下配置，即可保证运行时报错的行数与源代码的行数一致。

```js
module.exports = {
  mode: 'development',
  // 1. eval-source-map 仅限在开发模式下使用，不建议在生产模式下使用。
  // 此选项生成的Source Map能够保证"运行时报错的行数"与"源代码的行数"保持一致。
  // 如果这个模式使用在生成环境中，则需要注意防止源代码通过Source Map暴露。
  // devTool: 'eval-source-map'
  
  // 2. 只定位行数不暴露源代码。或者直接不写 Source Map 不用配置devTool。
  // 此选项在生产模式下使用，只定位报错的源代码具体函数，且不暴露源代码。
  devTool: 'nosource-source-map'
  
  // devTool: 'source-map'  不推荐使用，暴漏源码，定位错误行号。
}
```

## 4.【重点】Source Map最佳实战

1. 开发环境下：

- 建议把devTool的值设置为eval-source-map。
- 好处：可以精准定位到具体的错误行。

2. 生产环境下：

- 建议关闭Source Map或者将devTool的值设置为nosource-source-map。
- 好处：防止源码泄露，提高网站的安全性。

## 5. @符号配置

```js
module.exports = {
  resolve:{
    alias:{
      // 告诉webpack，程序员写的代码中，@符号表示src这一层目录
      '@': path.join(__dirname,'./src/')
    }
  }
}

// 在其它js文件中导入文件的语法
import msg from '@/msg.js'
```

# 08.【重点】webpack的核心概念

---

## 1. webpack的5个核心概念

1. **entry**：入口，指示 webpack 以哪个文件作为入口起点开始打包，分析构建内部依赖图。

2. **output**：输出，指示 webpack 打包后的资源 bundles 输出到哪里，以及如何命名。

3. **loader**：loader让webpack 能够去处理那些非 javascript 资源css、img等，将它们处理成 webpack 能够识别的资源，可以理解成一个翻译的过程（webpack自身只能理解js和json ）。

4. **plugins**：插件，可用于执行范围更广的任务。插件范围包括，从打包优化和压缩，一直到重新 定义环境中的变量等。

5. **mode**：模式，指示 webpack 使用相应模式的配置：（都会自动启用一些插件，生产模式启用插件更多）

- 开发模式（development）：配置比较简单，能让代码本地调试运行的环境。
- 生产模式（production）：代码需要不断优化达到性能最好。能让代码优化上线的环境。

## 2. 开发模式和生产模区别

1. 开发模式（development）：打包的文件含注释文件，完成打包后文件较大，**打包耗时短**。
2. 生产模式（production）：打包文件不含注释，**完成打包后的文件比开发模式小近4倍**，耗时长。
3. 使用场景：开发模式一般用于开发阶段，在开发阶段并不注重文件大小，而更注重打包的效率。生产模式在项目上线的时候使用，项目上线不会在意打包的时常，而更在意打包生成文件的大小。



## 3. 简单体验打包

> 简单打包体验：
1. webpack --mode development （开发环境）
2. webpack --mode production
3. webpack ./src/index.js -o ./build/build.js  --mode development（index.js 开始打包文件，-o 输出目录及文件）
4. webpack ./src/index.js -o ./build/build.js  --mode production（index.js 开始打包文件，-o 输出目录及文件）

# 09.【详情】webpack配置及使用
---

## 1. entry

```javascript
/* webpack.config.js 文件 */

const {resolve} = require('path');
module.exports = {
// 1. entry：入口，指示 webpack 以哪个文件作为入口起点开始打包，分析构建内部依赖图；
    
/* ①.单入口，如果只有一个入口，使用字符串，指定一个入口文件，打包一个 chunk，输出一个 bundle，chunk的名称是默认的；*/
entry: './src/index.js',
    
/* ②.Array，多入口，写多个入口文件，所有入口文件形成一个 chunk ，名称是默认的，输出也是一个 bundle；*/
// entry: ['./src/index.js','./src/main.js'],

/* ③.Object，多入口，有几个入口文件就会生成几个 chunk ，并输出几个 bundle，chunk的名称是 key值，
//对应的 output 中的 filename: '[name].js' 也需要修改 */
    
// entry: {
//   index: './src/index.js',
//   main: './src/main.js',
// },

/*④.特殊用法，多入口，有几个入口文件就会生成几个 chunk ，并输出几个 bundle，chunk的名称是 key值;
*/
// entry: {
// Array，多入口，写多个入口文件，所有入口文件形成一个 chunk ，名称是默认的，输出也是一个 bundle；
//   onea: ['./src/main.js','./src/index.js'],
//   twob: './src/index.js',
// },

// 2. output：输出，指示 webpack 打包后的资源 bundles 输出到哪里，以及如何命名；
// output: {
//   filename: '[name].js',   // 输出文件名,多个名字的情况下使用
//   path: resolve(__dirname,'build'),    // 输出文件及地址
// },

output: {
	filename: 'build.js',   // 输出文件名，固定名字
	path: resolve(__dirname,'build'),    // 输出文件及地址
},

mode: 'development',

}
```

## 2. plugins

1. 使用插件（plugins）对HTML文件进行处理（html-webpack-plugin）

2. 使用步骤：
   - 第一步：下载
   - 第二步：引入
   - 第三步：使用 

3. 下载安装：npm install html-webpack-plugin -D
   - 查看安装：npm html-webpack-plugin -v

4. 引入插件：const HtmlWebpackPlugin = require('html-webpack-plugin');

5. 使用插件：

```javascript
plugins: [
    // 默认会创建一个空的，目的就是为了自动引入打包的资源（js/css）
    // new HtmlWebpackPlugin(),
    
    //通过参数可以输出有结构的html资源,有多少个页面就需要实例化多少次
    new HtmlWebpackPlugin({
    	// 复制 ‘./src/index.html’文件，并自动引入打包输出的所有资源（js/css） 
    	template:'./src/index.html',
    	// 默认是 index.html 名称，通过 filename 设置名称	
    	filename:'demo.html', 
        chunks: ['index','common'],   //指定使用的 js 文件
         // 压缩 html
      	minify: {
         // 移除空格
       	 collapseWhitesspace: true,
       	 // 移除注释
       	 removeComments: true
      }
    }),
  ],
```

6. html-webpack-plugin 插件生成的内存中的页面已帮我们创建正确引用了打包编译生成的资源（js/css）;

## 3. 打包 css 资源

1. 需要使用 npm 下载安装两个 loader 帮我们完成打包：

   - css-loader 的作用是处理 css 中的 import 和 url 真央的外部资源；
   - style-loader 的作用是把样式插入到 Dom 中，方法是在 head 中插入一个标签，并把样式写入到这个标签的 innerHTML 里； 

2. 命令：npm install css-loader style-loader -D

3. 代码案例：

```javascript
module: {
    rules:[
        {
        	test: /\.css$/,
			// 这个位置前后一定不能错，因为是从右向左，从下到上加载的
			// css-loader  加载 CSS 文件并解析 import 的 CSS 文件，最终返回 CSS 代码 
            // style-loader 将模块导出的内容作为样式并添加到 DOM 中
        	use: ['style-loader','css-loader'],    
        }
    ]
}
```

## 4. 打包less和scss

1. 因为 css 只是单纯的属性描述，它并不具有变量、条件语句等，css 的特性导致了它难组织和保护；

   

2. sass 和 less 都属于 css 预处理器，定义了一种新的语言，其基本思想是用一种专门的编程语言，为 css 增加一些编程特性，将 css 作为目标生成文件，然后开发者使用这种语言进行 css 编码工作；

   

3. less 需要使用 npm 下载 less 包和 less-loader； 

- npm install less-loader -D （加载文件）

- npm install less -D （转换成CSS）

  

4. sass 需要使用 npm 下载 node-sass 包和 sass-loader；

- npm install node-sass sass-loader -D

```javascript
module: {
    rules:[
      {
        // 这个位置前后一定不能错，因为是从右向左，从下到上加载的 
        test: /\.css$/, use: ['style-loader','css-loader'],  
        test: /\.less$/, use: ['style-loader','css-loader','less-loader'],
        test: /\.scss$/, use: ['style-loader','css-loader','sass-loader'],
      }
	]
}
```

## 5. 提取 css 为单独文件

css 内容是打包在 js 文件中的，可以使用 mini-css-extract-plugin 插件提取成单独的 css 文件；

1. 安装插件：npm install mini-css-extract-plugin -D

   

2. 在 webpack.config.js 文件中引入插件：const MiniCssExtractPlugin = require('mini-css-extract-plugin');

   

3. 在 plugins 抹模块中使用插件：plugins: [ new MiniCssExtractPlugin() ];

   或者通过参数 filename 重新命名提取的 css 文件

   new MiniCssExtractPlugin( { filename:'./css/demo.css' } ) 

4. 在 css 的 rules 中，使用 MiniCssExtractPlugin.loader 取代 style-loader，提取 js 中 css 内容为单文件：

```javascript
{test: /\.css$/, use:[MiniCssExtractPlugin.loader,'css-loader']}

//如果 sass 和 less 也提取成单独的 css 文件，也一样将 style-loader 换成 MiniCssExtractPlugin.loader
{test: /\.scss$/, use:[MiniCssExtractPlugin.loader,'sass-loader']}
```

## 6. 处理 css 的兼容性

需要使用 postcss 处理，下载两个包 post-loader 和 postcss-preset-env

1. 下载安装：npm install postcss-loader postcss-preset-env -D
2. postcss 会找到 package.json 中的 browserslist 里面的配置，通过配置加载 css 的兼容性；
3. 修改 loader 的配置，新版本需要写 postcss.config.js ，less 和 sass 兼容性同理；

```javascript
// 按配置顺序进行加载 module,postcss.config.js，package.json 
module: {
    rules:[
      {
        // 处理 css 兼容性的问题
        test: /\.css$/, use: [MiniCssExtractPlugin,'css-loader','postcss-loader'],  
        // test: /\.less$/, use: ['style-loader','css-loader','less-loader'],
        // test: /\.scss$/, use: ['style-loader','css-loader','sass-loader'],
      }
    ]
}

// 新建postcss.config.js配置文件
module.exports = {
    plugins: [
        require('postcss-preset-env')()
    ]
}

// package.json 文件，写浏览器兼容
"browserslist" :[
    "> 0.2%",
    "last 2 versions",
    "not dead"
]
```

## 7. 压缩 css

使用 optimize-css-assets-webpack-plugin插件压缩 css 内容：

1. 安装插件：npm optimize-css-assets-webpack-plugin -D

2. 引入插件：const OptimizeWebpackPlugin = require('optimize-css-assets-webpack-plugin');

3. 使用插件：plugins：[ new OptimizeWebpackPlugin() ];

## 8. 打包图片资源

> 图片有两种使用方式，一种是在 html 中使用，另一种实在 css 中使用；

1. 需要下载 url-loader 和 file-loader 两个包，依赖关系；（打包 css 里面的图片）
   npm install url-loader file-loader -D
2. url-loader 当图片大小小于 limit 时候使用，图片会转换成 base64(base64是一串数据)。
3. file-loader 图片大小大于 limit 的时候使用 file-loader 进行加载，图片尺寸大于 limit 尺寸，图片也会进行打包，图片打包存储就需要找一个位置存放，需要配置 publicPath 和 outputPath 路径。

> test: /\.(png|jpg|jpeg|gif)$/,use: ['url-loader',{loader:'file-loader',optinos:{}},]

2. 如果 html 里面的图片，下载 html-loader 插件 
   npm install html-loader -D

```javascript
module: {
    rules:[
        // 打包 css 里面的图片
        {
          test: /\.(png|jpg|jpeg|gif)/,
          loader: 'url-loader',
          optinos: {
            publicPath: './images/',
            outputPath: 'images/',
        	limit: 1024 * 8,
        	// name: '[name].[png]',  使用原名，统一 png 格式
        	// 使用原名 hash 格式,hash 名字太长，只留前十位
        	name: '[name][hash:10].[ext]',  
          }
        },
        // 如果 html 里面有图片，告诉它用上面的方式进行打包
        {
            test: '/\.html$/',
            loader: 'html-loader',
        }
    ]
},
```




## 9. 对js语法配置语法检查eslint

1. eslint 是一个开源的 js 代码检查工具，初衷是为了让程序可以创建自己的检测规则。实际生产中，团队内往往会制定一套统一的标准，让整个团队的编码风格达到一致。
2. eslint 其实与 webpack 没有任何关系，两者并不互相依赖，甚至一般情况下我们并不会在 webpack 中进行 eslint 的配置，可以单独使用。
3. 语法检查使用 eslint-loader，并基于 eslint 包，只用来检测 js 语法。
4. 注意只检查自己的 js 源码，第三方库是不用检测的，可以在 npmjs.com 查看规则。

5. 需要使用 js 来的规则库检查代码 "airbnb" ，需要两个包，命令如下： 

- 安装：npm install eslint-loader eslint-config-airbnb-base eslint-plugin-import -D
- 在 package.json 中加入：

```javascript
"eslintConfig":{
	"extends":"airbnb-base"
}
```

- webpack.config.js 文件中配置：

```javascript
module: {
    rules:[
		{
			test:'/\.js$/',
			exclude:'./node_modules/',
			loader:'eslint-loader',
			optinos:{
				fix:true
			}
		}
    ]
  },
```

6. 在 js 文件中加入 //**eslint-disable-line**下一行 eslint 所有规则失效。

# 10. browsersync

---

## 1.browsersync

> 浏览器同步测试工具

1. 浏览器自动刷新
2. 多端同步

## 2.使用步骤

1. 安装方式
   npm install -g browser-sync


2. 命令进入到对应的文件夹 

3. 启动

>  \*代表监听所有的文件

browser-sync start --server --files "\*"   

>  监听所有的CSS文件

browser-sync start --server --files "css/\*.css"  

>  监听所有的css文件和html文件，多个文件之间用逗号隔开

browser-sync start --server --files "css/\*.css,\*.html"  

# 11.【工程化】npm

---

## 1.什么是前端工程化

1. 前端工程化指的是：在企业的前端项目开发中，把前端开发工具、技术、流程、经验等进行规范化。
2. 企业中的Vue项目和React项目，都是基于工程化的方式进行开发的。
3. 好处：前端开发自成体系（开发有体系），有一条标准的开发方案和流程。

## 2.工程化解决方案

**早期前端工程化解决方案：**

1. grunt（https://www.gruntjs.net/）
2. gulp（https://www.gulpjs.com/）



**目前主流前端工程化解决方案：**

1. webpack（https://www.webpackjs.com/）
2. parcel（https://zh.parceljs.org/）

## 3.安装npm工具 

https://www.npmjs.com 官网

> node packages manager Node的包管理工具。

1. npm 是 node.js 默认的软件包管理系统。

2. 安装完 node 后，会默认安装好 npm。

3. npm 本身也是基于 node.js 开发的软件。

## 4.安装步骤

1. 先安装 node.js https://nodejs.org；（node.js 是基于 chrome V8 javascript引擎）

   

2. 检测命令：window+r 调出cmd界面。

- node -v 查看 node 的版本

- npm -v 查看 npm 的版本

  

3. 查看镜像的配置结果

- npm config get registry

- npm config get disturl

  

4. 如果安装文件报错或安装较慢可以切换到国内淘宝镜像（或者在搭建环境的时候就将 npm 设置为淘宝镜像）

- npm config set registry https://registry.nmp.taobao.org --global

- npm config set disturl https://registry.nmp.taobao.org --global


- 设置当前默认地址：npm config set registry https://registry.npmjs.org/

   

5. 使用 nrm 工具切换淘宝源，语法：npx nrm use taobao

6. 如果之后需要切换回官方源可使用，语法：npx nrm use npm

   

## 5.使用npm工具管理包

> 安装模块可以分为全局安装和局部安装。
>
> npm install moduleName -g (或者 -global) 全局安装

1. npm -v 通过查看版本，看npm是否安装成功
2. npm init 初始化 npm ，会生成一个 package.json 文件，再使用 npm install <Module Name\> 安装模块
3. npm install [Module Name] 使用npm命令安装模块
4. npm install [Module Name] -g 使用npm命令安装模块 -g全局安装
5. npm -g install npm@5.9.1 (@后面跟版本号)指定版本安装或更新
6. npm update ModuleName 更新模块
7. npm update ModuleName -g 升级全局安装的模块
8. npm uninstall ModuleName 卸载安装模块
9. npm uninstall ModuleName -g 卸载全局安装模块
10. npm list -g 查看所有全局安装的模块
11. npm list vue 查看某个模块的版本号
12. npm root -g 查看全局安装路径
13. npm config set prefix '目录' 修改全局安装目录
14. npm help 查看npm的命令（npm -l）详细命令用法

## 6.模块安装依赖

1. npm -v 通过查看版本，看npm是否安装成功
2. npm install [Module Name] 使用 npm 命令安装模块
3. npm list g 查看所有全局安装模块
4. npm list vue 查看某个模块的版本号
5. npm -g install npm@5.9.1 （@后面跟版本号）这样我们就可以更新npm版本
6. npm install -save moduleName  # -save 在package文件的dependencies节点写入依赖
7. npm install -save-dev moduleName # -save-dev在package文件中的devDependencies节点写入依赖
8. dependencies：运行时的依赖环境，发布后，即生产环境下还需要用的模块。
9. devDependencies:开发依赖，里面的模块是开发时用的，发布时用不到它。

## 7.package.json文件

> package.json    包文件描述，用来描述包信息的。
> package.json    文件是一个对象

语法：npm init --yes （生成 package.json文件，加上--yes是忽略信息）
	       npm init （不写 --yes 根据提示一步步完成）



**package.json 文件分析：**

1. package name   包的名字
2. version        包的版本号

- 版本号：主版本号.次版本号.build号
  （1）. ^              兼容版本
  （2）. ~              最新版本
  （3）. *              所有版本
  （4）. a-b            两个版本之间的版本

3. description        包的描述
4. entry point        入口文件
5. main               入口文件
6. test command       测试命令（系统对你的包测试一遍，你给个命令它就帮你测试）
7. git repository     git 地址
8. keywords           关键字（别人可以搜索到你，就是你发布的包文件，多个关键字之间用空格隔开）
9. author             作者名字
10. license           授权（一般回车就行）
11. dependencies      项目运行时依赖包（在包名字后面加 --save）
12. devDependencies   项目开发时依赖包（在包名字后面加 --save-dev）
13. script            可以通过命令运行文件

- npm start           运行 js
- npm stop            停止运行 js
- npm restart         重启 js 
- npm test            测试 js
  注意：这些命令后面的值为"node 文件名.js".

14. homepage           包的官网 url
15. contributors       包的其它贡献者名字

## 8.npm的辅助命令

1. npm 提供了很多辅助命令，例如install和publish，使用 **npm help** 可以查看所有命令。

2. 使用 **npm help [command]** 可以查看命令的详细帮助。例如：npm help install。

3. 在package.json所在目录下使用 npm install -g 可先在本地安装当前命令行程序，用于发布前的本地测试。

4. 使用 npm update [package] 可以把当前目录下 node_modules子目录里面的对应模块更新至最新版本。

5. 使用 npm update [package] -g 可以把全局安装的对应命令行程序更新至最新版本。

6. 使用 npm cache clear 可以清空本地缓存，用于对付吃用相同版本号发布新版本代码的人。

7. 使用 npm unpublish [package]@[version] 可以撤销发布自己发布过的某个版本代码。

   

# 12.【工程化】yarn

---

> yarn 和 npm 一样都是包管理工具。

## 1.yarn 简介

1. yarn是由Facebook，Google，Exponent和Tilde联合推出的一个新的JS包管理巩固，正如官方文档中写的，Yarn是为了弥补npm的一些缺陷而出现的。因为npm5以前出现下面的问题：

- npm install 的时候巨慢。特别是新的项目拉下来要等半天，删除node_modules，重新install的时候依旧如此。

- 同一个项目，多人开发时，由于安装的版本不一致出现 bug。

  

2. 官网：www.yarnpkg.com

## 2.yarn 安装

1. **下载node.js，使用npm安装**

- npm install -g yarn

- 查看版本：yarn --version

  

2. **安装node.js，下载yarn的安装程序**

- 提供一个.msi文件，在运行时将引导您在windows上安装Yarn。

  

3. **yarn淘宝源安装，分别赋值粘贴以下代码行到黑窗口运行即可**

- yarn config set registry https://registry.npm.taobao.org -g
- yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g

## 3.yarn 基本使用

1. yarn init  初始化项目，和npm init执行输入信息后，会生成package.json文件
2. yarn install  安装package.json里所有包，并将包及它的所有依赖向保存进yarn.lock
3. yarn install --flat 安装一个包的单一版本
4. yarn install --force  强制重新下载所有包
5. yarn install --production  只安装dependencies里的包
6. yarn install --no-lockfile  不读取或生成yarn.lock
7. yarn install --pure-lockfile  不生成yarn.lock
8. yarn add [package]  在当前的项目中添加一个依赖包，会自动更新到package.json和yarn.lock文件中
9. yarn add [package]@[version] 安装指定版本，这里指的是主要版本，如果精确到小版本，使用-E参数
10. yarn add [package]@[tag]  安装某个tag（比如beta，next或者latest）
11. yarn add --dev/-D  加到 devDependencies
12. yarn add --peer/-P 加到 peerDependencies
13. yern ass --optional/-O  加到 optionalDependencies

> 默认安装包的主要版本里的最新版本，下面两个命令可以指定版本：

14. yarn add --exact/-E  安装吧的精确版本。例如：yarn add foo@1.2.3会接收1.9.1版本，但是 yarn add foo@1.2.3 --exact 只会接收1.2.3版本
15. yarn add --tilde/-T 安装包的次要版本里的最新版。例如：yarn add foo@1.2.3--tilde 会接受1.2.9，但不会接收1.3.0
16. yarn publish 发布包
17. yarn reove \<packageName\> 可以用来查看某个模块的最新版本信息
18. yarn cache 缓存
19. yarn cache list 列出已缓存的每个包
20. yarn cache dir 返回全局缓存位置
21. yarn cache clean 清除缓存

## 4.yarn 优点

1. 速度快

-  npm yarn

2. 安装版本统一

- npm install yarn

3. 更简介的输出

- npm install react --save yarn add react
- npm install react --save yarn remove reat

4. 多注册来源处理

- npm install react --save-dev yarn add react --dev

5. 更好的语义化

- npm undata --save yarn upgrade













