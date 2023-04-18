<template>
  <div>
    <h1>------app组件的内容------</h1>
    <h2>{{message}}</h2>
    <!-- getters使用方式 -->
    <h2>{{$store.getters.powerCounter}}</h2>
    <h1>{{more20stu}}</h1>
    <p>{{$store.getters.more20stulen}}</p>
    <p>{{$store.getters.moreAgestu(40)}}</p>

    <!-- state状态访问 -->
    {{$store.state.number}}
    
    <!-- mutations使用方式 -->
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>

    <button @click="addStudent()">添加学生</button>

    <h1>{{$store.state.info}}</h1>
    <button @click="updateName">修改name属性</button>

    <h1>-----hello组件的内容-----</h1>
    <hello/>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'
export default({
  name:'App',
  data(){
    return{
      message:'我是App组件的message'
    }
  },
  components:{
    Hello
  },
  methods:{
    addCount(count){
      return this.$store.commit('increments',count);
    },
    addStudent(){
      const stu = {id:'1004',name:'吉吉国王',age:25}
      return this.$store.commit('addStudent',stu);
    },
    // updateName(){
    //  return this.$store.commit('updateName');
    // }

    // 使用action异步方式修改name属性，$store.dispatch 方式进行修改
    // aupdateStudent 是action里面的函数
    updateName(){
      return this.$store.dispatch('aupdateStudent');
    }
  },
  computed:{
    more20stu(){
      return this.$store.state.students.filter(s=>{
        return s.age>20
      })
    }
  }
})


</script>


<style>

</style>
