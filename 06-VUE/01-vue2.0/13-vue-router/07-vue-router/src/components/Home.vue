<template>
  <div>
    <h2>首页</h2>
    <p>首页页面 this is home page !!!</p>

    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>

  
    <router-view></router-view> 

  </div>
</template>

<script>
/**
 * 全局导航守卫：改变 title 标题的方式。
 *  1. 方式一：监听生命周期函数 created(){ document.title="首页"}，
 *  2. 方式二：在router/index.js文件中配置全局导航守卫。router.beforeEach()函数
 *    
 */
export default {
  name:'Home',
  data(){
    return{
      path:'/home/news'
    }
  },
  created(){
    console.log("home created")
    // document.title="首页"
  },
  // destroyed(){
  //   console.log('home destroyed')
  // },
  activated(){
    // console.log('home activated')
    this.$router.push(this.path)
  },
  // deactivated(){
  //   console.log('home deactivated')
  // },
  // 组件内导航守卫
  beforeRouteLeave(to,from,next){
    console.log(this.$route.path)
    this.path = this.$route.path
    next()
  }
}
</script>

<style>
  a{
    margin-right: 30px;
  }
</style>