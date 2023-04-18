require("./js/b");

console.log("this id main.js");

// 依赖 css 文件
require('./css/style.css');

// 依赖 less 文件
require('./css/index.less');


// 依赖 vue 进行开发
import Vue from 'vue';


/**
 * 1. 将 template 提取出来，形成一个组件 App
 */

const App = {
  template: `
    <div>
      <h2>{{message}}</h2>
      <button @click="btnClick">按钮</button>
      <h2>{{name}}</h2>
    </div>
  `,

  data(){
    return{
      message: "hello webpack",
      name: "杨小样",
    }
  },
  methods: {
    btnClick(){
      console.log("哈哈哈哈哈");
    }
  }
}

new Vue({
  el: "#app",
  template: '<App/>',
  data: {
  
  },
  components: {
    App,
  }
});