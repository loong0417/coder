<template>
  <div>
    <h2>用户</h2>
    <p>用户页面 this is user page !!!</p>
  </div>
</template>

<script>
export default {
  name:'User',
  created(){
    // document.title="用户"
    console.log('user created')
  },
  destoryed(){
    console.log('user destoryed')
  }
}
</script>

<style>

</style>