<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/user">用户</router-link>
    <router-link to="/about">关于</router-link>

    <router-view></router-view>
  </div>
</template>

<style>
  a{
    margin-right: 30px;
  }
</style>
