import Vue from 'vue'
import Vuex from 'vuex'
import {
  INCREMENTS,
  UPDATEINFO
} from './mutations_type.js'

Vue.use(Vuex)

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
  mutations: {
    // 1. 普通提交风格
    // increments(state,num){
    //   return state.number+=num;
    // }

    // 2. 特殊提交风格，payload是一个对象
    // 3. mutations里面的函数最好是抽成常量，这样在methods提交的时候也可以直接写成常量，避免错误，也是官方推荐。
    [INCREMENTS](state,payload){
      return state.number += payload.num;
    },

    // 4. 响应式修改数据
    [UPDATEINFO](state){
      // 1. 可以响应式修改
      // return state.info.name = "杨小样";  

      // 2. 不是响应式的修改，可以通过devTools查看state已经发生变化，但界面没有修改，所以不是响应式的
      // return state.info.address = "湖北武汉";  

      // 3. 可以通过set方法完成响应式，注意的是：在组件中我们是通过this.set方式调用set，在vuex中我们是通过Vue.set，是Vue方式调用的set.
      // return Vue.set(state.info,'address','湖北武汉')

      // 4. 不能完成响应式操作，可以通过devTools查看，state状态中数据已经删除，但是界面中仍然没有发生变化
      // delete state.info.age;

      // 5. 可以完成响应式操作。删除对象中的age属性，这里的age一定需要加上一个引号，否则是删不掉的，今天测试没有加引号，导致删除掉，也没有报错。
      // return Vue.delete(state.info,'age')

      // 6. 模拟异步操作，视图层虽然已经发生变化，但是devTools是没有改变的，多次点击后devTools也会发生改变，但这个和实际情况还是有区别的。（具体点击几次会发生改变不确定，测试中第一次点击的第二次devTools发生改变，第二次测试点击第二次还是没有发生变化。）
      // setTimeout(()=>{
      //   return state.info.name = "杨小样";  
      // },1000);

      // 7. 这里我用新对象替换就对象的方式完成对象响应式修改操作
      // return state.info = {
      //   name:'张飞',
      //   sex:'male',
      //   age: 30
      // }
      
    }

  },
  actions: {
    // 5. context：是上下文，在不同的位置代表的含义是不同的，这里代表的是 store。context是一个默认参数。
    // aupdateinfo(context){
    //   setTimeout(()=>{
    //     context.commit(UPDATEINFO)
    //   },1000);
    // }

    // 6. actions 里面携带参数，payload可以是字符串，也可以是对象，还可以是回调函数。
    // aupdateinfo(context,payload){
    //   setTimeout(()=>{
    //     // 只要这里提交了commit信息就修改成功了
    //     context.commit(UPDATEINFO);
    //     // 设置一个需求：里面数据修改完成之后告诉外面，数据修改完成。
    //     console.log(payload.message);
    //     payload.success();
    //   },1000);
    // }

    // 7. promise方式操作，里面修改数据成功通知外面
    aupdateinfo(context,payload){
       return new Promise((resolve,reject)=>{
          setTimeout(()=>{
            // 只要这里提交了commit信息就修改成功了
            context.commit(UPDATEINFO);
            // 设置一个需求：里面数据修改完成之后告诉外面，数据修改完成。
            console.log(payload);
            resolve("111111111111111");
          },1000);
       });
    }
  },
  modules: {
  }
})
