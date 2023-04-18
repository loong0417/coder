<template>
  <div>
    <h2>首页</h2>
    <p>首页页面，首页页面</p>

    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'Home'
}
</script>

<style scoped>
  h2,p{
    color: green;
  }
</style>