<template>
  <ol>
    <li v-for="(item,index) in uList" :key="item.name">
      <span class="order">{{index+1}}</span>
      <a href="#" class="avatar"><img :src="item.img" alt=""></a>
      <div class="textCon">
        <h4>{{item.name}}</h4>
        <p>
          <span>{{item['read-num']}}</span>
          <span>{{item['thumb-num']}}</span>
        </p>
      </div>
    </li>
  </ol>
</template>

<script>
export default {
  props:{
    uList:Array
  }
}
</script>

<style>

</style>