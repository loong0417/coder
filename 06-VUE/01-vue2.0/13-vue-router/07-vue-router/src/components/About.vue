<template>
  <div>
    <h2>关于</h2>
    <p>关于页面 this is about page !!!</p>
  </div>
</template>

<script>
export default {
  name:'About',
  created(){
    // document.title="关于"
    console.log('about created')
  },
  destroyed(){
    console.log('about destoryed')
  }
}
</script>

<style>

</style>