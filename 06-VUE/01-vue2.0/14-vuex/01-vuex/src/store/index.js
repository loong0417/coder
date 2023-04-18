// 1. 引入 vue及vuex
import Vue from 'vue'
import Vuex from 'vuex'

// 2. 使用Vuex
Vue.use(Vuex)

// 3. 导出Vuex.store，在mian.js文件中引入及挂载
export default new Vuex.Store({
  state: {
    counter:1000,
  }, 
  mutations: {
    // 4. 方法 mutations 是同步操作的
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    }
  },
  // 5. 如果有异步操作还需要使用 actions
  actions: {
  },
  modules: {
  }
})
