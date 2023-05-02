import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// runtime-only 方式：
// render → vdom → UI
// 性能跟高，代码量更少。

// 那么就是问题来了，我引用了一个 ./App.vue 文件，文件中有一个 
// <template></template>标签模板，这个时候这个模板会经过
// template 解析成 abstract syntax tree 抽象语法树 这两个步骤吗？

// 答：不会，引入进来./App.vue文件的时候，脚手架默认安装了一个 vue-template-compiler 
// 这个插件会将 .App.vue 文件中的 <template>内容</template> 转换成一个 render 函数。
