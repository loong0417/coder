<template>
  <div id="app">
    <!-- 1. App组件的内容 -->
    <h2>{{$store.state.counter}}</h2>
    <!-- 但是不建议这样使用 -->
    <!-- <button @click="$store.state.counter++">+</button>
    <button @click="$store.state.counter--">-</button> -->

    <button @click="add">+</button>
    <button @click="sub">-</button>
    <!-- Hello组件的内容 -->
    <hello/>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'
export default({
  name:'App',
  components:{
    Hello
  },
  methods:{
    add(){
      this.$store.commit('increment');
    },
    sub(){
      this.$store.commit('decrement');
    }
  }
})
</script>

<style>
</style>
