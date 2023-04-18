<template>
  <div>
    <h2>首页</h2>
    <p>this is home page！！！</p>
    
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:"Home"
}
</script>

<style>

</style>