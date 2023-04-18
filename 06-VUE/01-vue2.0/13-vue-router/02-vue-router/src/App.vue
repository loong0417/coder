<template>
  <div id="app">
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <!-- 
      动态路由使用步骤：
        1. 在 router 文件夹下面 index.js 文件中进行配置。
        2. 在 router-link 的 to 属性中进行绑定，使用 v-bind 进行绑定，前面的路径是字符串，用引号括起来，后面是变量，使用动态绑定形式。
        案例：http://localhost:8080/user/zhangshan

     
      需求：将用户名（userId）在User组件下面进行显示。
        1.使用 $route 方式。
        2.完整语法：this.$route.params.userId

      
      注意事项：
        1. $router 和 $route 两个是有区别的。
          $router 是实例化的那个 router。
          $route 是router配置路由映射关系路径，哪个映射关系属于激活状态 $route 就是哪个的。
     -->
    <router-link :to="'/user/'+userId" tag="button">用户</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userId:'yangxiaoyang'
    }
  }
}
</script>

<style>
</style>
