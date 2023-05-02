// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

// runtime-compiler 方式：
// template → ast → render → vdom → UI
// template 解析成 abstract syntax tree 抽象语法树
// 再编译成 render 函数 生成 vdom 最后渲染到 UI
