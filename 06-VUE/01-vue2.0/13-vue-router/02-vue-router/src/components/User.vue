<template>
  <div>
    <h2>用户</h2>
    <p>用户页面，用户页面</p>
    <h2>{{userId}}</h2>
  </div>
</template>

<script>
export default {
  name:'User',
  computed:{
    userId(){
      return this.$route.params.userId
      // [vue-router] Named Route 'Home' has a default child route. 名字route（路线），为 Home 默认的子路由。
      // When navigating to this named route (:to="{name: 'Home'"), the default child route will not be rendered.
      // Remove the name from this route and use the name of the default child route for named links instead.
      console.log(this.$route)
    }
  }
}
</script>

<style scoped>
  h2,p{
    color:orchid;
  }
</style>