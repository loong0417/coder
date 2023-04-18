require("./js/b");

console.log("this id main.js");

// 依赖 css 文件
require('./css/style.css');

// 依赖 less 文件
require('./css/index.less');


// 依赖 vue 进行开发
import Vue from 'vue';

const app = new Vue({
  el: "#app",
  data: {
    message: "hello webpack",
  }
});