import Vue from 'vue'
import App from './App'
// 导入router挂载到 vue 实例中
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


console.log(router)