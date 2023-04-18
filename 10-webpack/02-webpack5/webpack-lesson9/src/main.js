require("./js/b");

console.log("this id main.js");

// 依赖 css 文件
require('./css/style.css');

// 依赖 less 文件
require('./css/index.less');


// 1. 依赖 vue 进行开发
import Vue from 'vue';


/**
 * 1. 将 template 提取出来，形成一个组件 App
 * 2. 将组件提取成一个 js 文件在 src/vue/app.js 文件中
 * 3. 第二步提取成一个 js 文件，模板和 js 代码没有分离，现在需要进行分离
 * 4. 创建一个 App.vue （import App from './vue/App.vue'）
 * 5. npm install vue-loader vue-template-compiler --save-dev
 * 6. 在webpack.config.js 文件中 const VueLoaderPlugin = require('vue-loader/lib/plugin')
 * 7. 在 plugins 里面 new VueLoaderPlugin()
 */

// 2. 使用 vue 组件
// import App from './vue/app';

// 3. 使用 vue 组件 App.vue 文件
import App from './vue/App.vue';

new Vue({
  el: "#app",
  template: '<App/>',
  data: {
  
  },
  components: {
    App,
  }
});