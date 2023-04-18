<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/user">用户</router-link>
    <router-link to="/about">关于</router-link>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<style>
  a{
    margin-right: 30px;
  }
  .router-link-active{
   color: red;
  }
</style>
