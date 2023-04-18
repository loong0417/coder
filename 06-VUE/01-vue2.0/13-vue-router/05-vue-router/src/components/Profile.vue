<template>
  <div>
    <h2>档案</h2>
    <p>this is profile page！！！</p>
    <p>标签里面直接拿参数：{{$route.query.name}}</p>
    <p>{{$route.query.age}}</p>
    <p>{{$route.query.female}}</p>
    <hr/>
  </div>
</template>

<script>
export default {
  name:'Profile',
  data(){
    return{
      name:'',
      age:'',
      female:''
    }
  },
  computed:{
    showInfo(){
      this.name = this.$route.query.name
      this.age = this.$route.query.age
      this.female = this.$route.query.female
    }
  }
}
</script>

<style>

</style>