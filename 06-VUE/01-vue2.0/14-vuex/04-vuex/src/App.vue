<template>
  <div id="app">
    <h2>App组件的内容</h2>
    <p>{{$store.state.number}}</p>
    <hello/>

    <h2>访问模块modules里面的内容</h2>
    <!-- 
      1. 访问modules里面的内容有点奇怪，$store.state.模块名字.属性。
         为什么会是这样访问呢？因为modules里面的state都放到了对象的state（$store.state）里面，所以就需要这样访问。
     -->
    <p>{{$store.state.a.name}}</p>
    <!-- 2. 调用modules下面的getters和调用store下面的getters是一样的，尽量保证函数名字不重复。 -->
    <p>{{$store.getters.updateString}}</p>
    <p>{{$store.getters.updateString1}}</p>

    <!-- 3. modules 里面的mutations修改名字 -->
    <button @click="updateName()">修改名字</button>

    <!-- 4. modules 里面的actions使用 -->
    <h1>{{$store.state.a.infos}}</h1>
    <button @click="updateInfo()">修改信息</button>
  </div>
</template>
<script>
  import Hello from './components/Hello.vue'
  export default{
    name:'App',
    components:{
      Hello
    },
    methods:{
      updateName(){
        this.$store.commit('updateName','杨小样');
      },
      updateInfo(){
        this.$store.dispatch('updateInfos')
      }
    }
  }
</script>
<style>

</style>
