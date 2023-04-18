# vue cli 2.0 分析

## 1. 文件目录分析

build 文件夹：用于存放 webpack 相关配置和脚本。
- 
config 文件夹：主要存放配置文件，比如配置开发环境的端口号、开启热加载或开启gzip压缩等。
dist 文件夹：默认命令打包生成的静态资源文件。
node_modules：存放 npm 命令下载的开发环境和生产环境的依赖包。
src: 存放项目源码及需要引用的资源文件。
- src下 assets：存放项目中需要用到的资源文件，css、js、images 等。
- src下 componets：存放 vue 开发中一些公共组件。
- src下 router：vue-router vue 路由的配置文件。
- src下 vuex：存放 vuex 为vue专门开发的状态管理器。
- src下 app.vue：整个工程的 vue 根组件。
- src下 main.js：工程的入口文件。
.babelrc 文件，对ES代码进行转换，需要读取的配置。
.editorconfig文件，定义编码及空格换行规范。
static 文件夹：静态文件，例如图片如果存放在这里，打包的时候会原封不动的复制到 dist 文件夹中，不会存在将小于 limit 转换成base64，也不会存在大于 limit 需要安装一个 file-loader 去加载。

.postcssrc.js 针对css转化相关的东西。

index.html：设置项目的一些meta头信息和提供html元素节点，用于挂载 vue。
package-lock.json 记录 node_modules 安装真实版本。
package.json：对项目的描述以及对项目部署和启动、打包的 npm 命令管理
README.md 文档相关的。



## 2. vue cli2 安装

> 先安装脚手架，再创建项目。

1. 命令： npm install @vue/cli-init -g

2. 创建项目：vue init webpack my-project-name(项目名字)


## 3. vue-cli2 安装细节说明

1. Project name                         项目名字
2. Project description                  项目描述
3. Author                               作者
- 作者信息读取的是c/users/administrator/.gitconfig 文件，可以进行手动修改

4. Vue build (Use arrow keys)           选择 runtime-only 或者 runtime+compiler 编译方式
> Runtime + Compiler: recommended for most users 
  Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files - render functions are required elsewhere 

5. Install vue-router? (Y/n)  是否安装路由
6. Use ESLint to lint your code? (Y/n)   使用 ESLint 监听代码（监听ES代码，规范ES代码格式）
7. Set up unit tests (Y/n)   设置单元测试（单元测试一般都是不需要的，在实际项目中也很少使用单元测试）
8. Setup e2e tests with Nightwatch? (Y/n)  e2e 翻译过来就是 end to end 端到端测试。
- 是否设置端到端测试，依赖 Nightwatch.(一般都不会用)
9. Should we run `npm install` for you after the project has been created? (recommended) (Use arrow keys)
> Yes, use NPM
  Yes, use Yarn
  No, I will handle that myself
- 管理项目的时候是用 npm 还是 yarn 呢？









