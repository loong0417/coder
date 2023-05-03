<template>
  <div id="app">
    <keep-alive include="Home"><router-view></router-view></keep-alive>
    <van-tabbar route>
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

</script>

<style lang="less" scoped>
// #app {
//   padding: 46px 0 50px 0;
// }
</style>
