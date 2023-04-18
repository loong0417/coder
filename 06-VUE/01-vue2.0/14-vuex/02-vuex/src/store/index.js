import { createStore } from 'vuex'

export default createStore({
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
  /**
   * 1. getters相当于vue中的计算属性computed
   */
  getters: {
    /**
     * 2. number的2倍
     * @param {*} state 
     * @returns 
     */
    powerCounter(state){
      return state.number * state.number
    },
    /**
     * 3. 过滤年龄大于20岁的
     * @param {*} state 
     * @returns 
     */
    more20stu(state){
      return state.students.filter(s=>{
        return s.age>20;
      })
    },
    /**
     * 4. 统计大于20岁学生的人数
     * @param {*} state 
     * @param {*} getters 参数getters为getters对象
     * @returns 
     */
    more20stulen(state,getters){
      return getters.more20stu.length
    },
    /**
     * 5. 判断大于用户输入的年龄的学生
     * @param {*} state 
     * @returns age 用户输入的年纪
     * 
     * moreAgestu() 这个里面是不能输入第三个参数，具体能使用几个参数还得测试
     */
    moreAgestu(state){
      return function(age){
        return state.students.filter(s=>{
          return s.age > age
        })
      }
    }
  },
  mutations: {
    // payload 负载，后面携带的参数叫 payload 。count和stu都是的（一个是数字一个是对象）。
    increments(state,count){
      return state.number+=count;
    },
    addStudent(state,stu){
      return state.students.push(stu);
    },
    updateName(state){
      return state.info.name="光头强"
    }
    // 在mutations里面模拟异步请求，发现devTool中数据是没有更改的，只有界面发生了改变。
    // updateName(state){
    //   setTimeout(()=>{
    //     return state.info.name="光头强"
    //   },1000)
    // }
  },
  actions: {
    // context：解释成上下文，在这里它表示的是 store 对象。（在不同的位置表示的意义不一样，所以这里可以理解成 store）
    aupdateStudent(context){
      setTimeout(() => {
        context.commit('updateName');
      }, 1000);
    }
  },
  modules: {
  }
})
