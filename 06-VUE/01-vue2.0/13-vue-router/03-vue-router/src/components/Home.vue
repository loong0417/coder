<template>
  <div>
    <h2>首页</h2>
    <p>首页内容</p>

    <router-link to="news">新闻</router-link>
    <router-link to="message">消息</router-link>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name:'Home',
  created(){
    document.title = "首页"
  }
}
</script>

<style>

</style>