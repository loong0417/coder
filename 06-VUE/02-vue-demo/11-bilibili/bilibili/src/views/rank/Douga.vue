<template>
  <div class="douga">
    <List :listData="listData"/>
  </div>
</template>

<script>
import List from './List.vue'
export default {
  data(){
    return{
      listData:{}
    }
  },
  components:{
    List
  },
  created(){
    (async () =>{
      const res = await fetch('../douga.json');
      this.listData = await res.json();
      console.log(this.listData)
    })();
  }
}
</script>

<style>

</style>