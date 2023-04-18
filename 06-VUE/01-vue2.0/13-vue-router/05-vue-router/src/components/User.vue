<template>
  <div>
    <h2>用户</h2>
    <p>this is user page！！！</p>
    <p>标签里面直接展示：{{this.$route.params.username}}</p>
    <p>methods方式展示：{{showUser()}}</p>
    <p>computed方式展示：{{show}}</p>
  </div>
 
</template>

<script>
export default {
  name:'User',
  computed:{
    show(){
      return this.$route.params.username
    }
  },
  methods:{
    showUser(){
      return this.$route.params.username
    }
  }
}
</script>

<style>

</style>