<template>
  <div id="app">
    <Box v-for="item in list" :key="item.title" :users="item"/>
  </div>
</template>

<script>
// import axios from 'axios'
import './assets/reset.css'
import Box from './components/Box.vue'
export default {
  name: 'App',
  data(){
    return{
      list:{}
    }
  },
  components: {
    Box
  },
  created(){

    // 方式一：使用axios方式进行数据请求
    // axios({
    //   url:'data.json'
    // }).then(res=>{
    //   this.list = res.data;
    // }).catch(err=>{
    //   console.log(err);
    // });

    // 方式二：使用fetch方式进行数据请求
    (async ()=>{
      const res = await  fetch('data.json');
      const result = await res.json();
      this.list = result;
      console.log(this.list)
    })();
  }
}
</script>

<style scoped>
#app{
  display: flex;
}
</style>
