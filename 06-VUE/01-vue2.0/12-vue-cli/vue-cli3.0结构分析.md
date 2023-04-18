# vue cli 3.0 分析

## 1. 文件目录分析

node_modules：存放 npm 命令下载的开发环境和生产环境的依赖包。
public 文件夹，相当于static 文件夹，里面的内容会原封不动的复制到打包的文件中。
- index.html 文件移入到 public 文件夹中，设置项目的一些meta头信息和提供html元素节点，用于挂载 vue。
- favicon.ico 图标文件

src: 存放项目源码及需要引用的资源文件。
- src下 assets：存放项目中需要用到的资源文件，css、js、images 等。
- src下 componets：存放 vue 开发中一些公共组件。
- src下 router：vue-router vue 路由的配置文件。
- src下 vuex：存放 vuex 为vue专门开发的状态管理器。
- src下 App.vue：整个工程的 vue 根组件。
- src下 main.js：工程的入口文件。

.babel.config.js 文件，对ES代码进行转换，需要读取的配置。
package-lock.json 记录 node_modules 安装真实版本。
package.json：对项目的描述以及对项目部署和启动、打包的 npm 命令管理
README.md 文档相关的。


.editorconfig文件，定义编码及空格换行规范。（可以自己新建一个）


## 2. vue cli3 安装
1. 安装 vue 脚手架：npm install vue/cli -g  
2. 初始化项目：vue create my-project

## 3. vue-cli3 安装细节说明
