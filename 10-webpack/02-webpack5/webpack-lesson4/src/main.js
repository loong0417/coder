require("./js/b");

console.log("this id main.js");

// 依赖 css 文件
require('./css/style.css');

// 依赖 less 文件
require('./css/index.less');


// 依赖 vue 进行开发
import Vue from 'vue';
/**
 * 在开发中我们不会经常改 index.html 文件，所以就需要在 vue 实例里面添加一个 template 模板，
 * 这个模板在运行的时候会替换 el #app 里面的内容，相当于将 template 内容复制到 el #app 中；
 */
const app = new Vue({
  el: "#app",
  template: `
    <div>
      <h2>{{message}}</h2>
      <button @click="btnClick">按钮</button>
      <h2>{{name}}</h2>
    </div>
  `,
  data: {
    message: "hello webpack",
    name: "杨小样",
  }
});