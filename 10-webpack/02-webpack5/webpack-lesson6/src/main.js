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
 */

// 2. 使用 vue 组件
import App from './vue/app';

new Vue({
  el: "#app",
  template: '<App/>',
  data: {
  
  },
  components: {
    App,
  }
});