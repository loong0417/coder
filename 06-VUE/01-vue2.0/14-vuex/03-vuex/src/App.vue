<template>
  <div id="app">
  <h1>App组件内容：</h1>
  <p>{{$store.state.number}}</p>
  <button @click="addCount(5)">+5</button>
  <button @click="addCount(10)">+10</button>

  <h2>{{$store.state.info}}</h2>
  <button @click="updateinfo()">修改信息</button>
  <hello/>
  </div>
</template>
<script>
import Hello from './components/Hello.vue'
import {INCREMENTS, UPDATEINFO} from './store/mutations_type.js'
export default {
  name:'App',
  components:{
    Hello,
  },
  methods:{
    // 1. 普通的提交风格
    // addCount(num){
    // return this.$store.commit('increments',num);
    // },

    // 2. 特殊的提交风格 
    addCount(num){
      return this.$store.commit({
        type:INCREMENTS,
        num:num,
      })
    },
    // 3. 修改信息
    updateinfo(){
      // return this.$store.commit(UPDATEINFO)

      // 4. actions方式异步修改信息，是通过dispatch
      // this.$store.dispatch('aupdateinfo');

      // 5. actions 携带信息
      // this.$store.dispatch('aupdateinfo',{
      //   message:"我是一个携带的字符串信息",
      //   success:()=>{
      //     console.log("里面数据已经完成修改！！");
      //   }
      // })

      // 6. 使用promise方式 
      this.$store.dispatch('aupdateinfo','我是携带的字符串信息')
      .then(res=>{
        console.log(res,"里面修改数据完成");
      })
    }
  }
}
</script>
<style>
</style>
