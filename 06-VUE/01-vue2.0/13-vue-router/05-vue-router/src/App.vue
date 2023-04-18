<template>
  <div id="app">
    <span><router-link to="/home">首页</router-link></span>
    <!-- params传参的方式 -->
    <span><router-link :to="'/user/' + username">用户</router-link></span>
    <span><router-link :to="{path:'/profile',query:{name:'杨小样',age:'下次告诉你',female:'女'}}">档案</router-link></span>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'App',
  data(){
    return{
      username:'zhangsan'
    }
  }
}
</script>


<style>
  #app a{
    margin-right: 20px;
  }
</style>
