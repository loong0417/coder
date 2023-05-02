<template>
  <div class="box">
    <Head :uTitle="users.title"/>
    <List :uList="users.data"/>
  </div>
</template>

<script>
import Head from './Head.vue'
import List from './List.vue'
export default {
  name:'Box',
  props:{
    users:Object
  },
  components:{
    Head,
    List
  },
}
</script>

<style scoped>
  .box{
    width: 240px;
    height: 400px;
    background: #fff;
    box-shadow: 0 6px 14px rgba(158, 172, 182, .25);
    border-radius: 6px;
    overflow: hidden;
    margin: 20px;
  }
</style>
