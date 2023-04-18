import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


createApp(App).use(store).use(router).mount('#app')


// 还是没有解决 devtools 的问题
// createApp.config.devtools = true
// createApp.prototype.devtools = true


// 报错：还是没有解决，vue脚手架3中的 devTool 依然调不出来啊。console控制台中。
// （backend.js:1337 Uncaught (in promise) TypeError: Cannot read property 'length' of undefined）
// const win = window

// if (process.env.NODE_ENV === 'development') {
//   if ('__VUE_DEVTOOLS_GLOBAL_HOOK__' in win) {
//       win.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app
//   }
// }
