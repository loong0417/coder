import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const modulesA = {
  state:{
    name:'zhangsan',
    infos:{
      name:'光头强',
      discript:'会砍树',
      eat:'臭豆腐馒头'
    }
  },
  getters:{
    /**
     * 注意：参数顺序一定是这样的，rootState一定是放在第三位的
     * @param {*} state 当前模块的 state
     * @param {*} getters 当前modulesA对象（getters指的是当前这个对象）
     * @param {*} rootState 上一级的state，也就是store.state中的state
     * @returns 
     */
    updateString(state,getters,rootState){
      console.log(rootState);
      return state.name + rootState.number
    },
    updateString1(state,getters,rootState){
      return state.name + getters.updateString + rootState.number
    }
  },
  mutations:{
    // updateName(state){
    //   return state.name = "杨小样";
    // },
    updateName(state,payload){
      return state.name = payload
    },
    updateInfos(state){
      return state.infos.name = "吉吉国王";
    }
  },
  actions:{
    // context指的是上下文，可以理解成对象，打印出来看就知道对象里面都有啥。
    // context 在不同的位置，指代的东西也是不一样的，这就是之前我们看到的 store 中的actions里面的context指向的是store这个对象。
    updateInfos(context){
      console.log(context)
      context.commit('updateInfos');
    }
  },
}

// const modulesB = {
//   state:{
//     name: '李四，模块b'
//   },
//   getters:{},
//   mutations:{},
//   actions:{},
// }

export default new Vuex.Store({
  state: {
    number:1000,
    students:[
      {id:'1000',name:'熊大',age:20},
      {id:'1001',name:'熊二',age:18},
      {id:'1002',name:'光头强',age:23},
      {id:'1003',name:'万恶的李老板',age:50}
    ],
    info:{
      name:'熊出没',
      sex:'female',
      age: 17
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    a: modulesA,
    // b: modulesB
  }
})
