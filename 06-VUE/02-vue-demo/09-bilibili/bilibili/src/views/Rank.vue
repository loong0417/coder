<template>
  <div class="rank">
    <!-- 排行榜 -->
    <ul class="rankTab">
      <!-- 动态绑定to属性值，是因为路由中添加了name属性，当路由嵌套比较深的时候name优势就体现了。 -->
      <!-- <router-link :to="{name:'douga'}" tag="li">动画</router-link>
      <router-link :to="{name:'music'}" tag="li">音乐</router-link>
      <router-link :to="{name:'dance'}" tag="li">舞蹈</router-link> -->

      <li v-for="item in routers" :key="item.id" @click="toUrl(item.path)" :class="{active:$route.path.indexOf(item.path)!=-1}">
        {{item.name}}
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{
      routers:[
        {name:'动画',path:'/douga',id:6},
        {name:'音乐',path:'/music',id:7},
        {name:'舞蹈',path:'/dance',id:8}
      ]
    }
  },
  methods:{
    toUrl(path){
      this.$router.push('/rank'+path).catch(()=>{})
    }
  }
}
</script>

<style scoped>
  .rankTab{
    padding-bottom: 18px;
    display: flex;
    align-content: center;
  }

  .rankTab li{
    cursor: pointer;
    font-size: 14px;
    padding: 3px 8px;
  }

  .rankTab li.active{
    background: #00a1d6;
    color: #fff;
    border-radius: 12px;
  }
</style>