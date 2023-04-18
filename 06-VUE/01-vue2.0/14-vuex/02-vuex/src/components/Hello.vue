<template>
  <div>
    {{message}}
    <h2>{{$store.state.number}}</h2>
    <p>大于20岁的学生：{{$store.getters.more20stu}}</p>
    <p>大于20岁学生人数：{{$store.getters.more20stulen}}</p>
    <p>输入年龄：{{$store.getters.moreAgestu(40)}}</p>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data(){
    return{
      message:'Hello组件的message'
    }
  }
}
</script>
<style scoped>
</style>
