<template>
  <div id="app">
    <ul class="head">

      <li v-for="(item,index) in routers" :key="item.id" @click="toUrl(item.path)" :class="{active:$route.path.indexOf(item.path) != -1}">
        <img :src="require('./assets/ico_0'+index+'.png')" alt="" />
        <a href="javascript:;">{{item.name}}</a>
      </li>

      <!-- <router-link to="/all" v-slot="{ href, navigate, isActive, isExactActive }">
				<li :class="[isActive && 'ac', isExactActive && 'active']">
					<img src="./assets/ico_01.png" alt="" />
					<a @click="navigate" :href="href">综合热门</a>
				</li>
			</router-link>

       <router-link to="/weekly" v-slot="{ href, navigate, isActive, isExactActive }">
				<li :class="[isActive && 'ac', isExactActive && 'active']">
					<img src="./assets/ico_02.png" alt="" />
					<a @click="navigate" :href="href">每周必看</a>
				</li>
			</router-link>

       <router-link to="/history" v-slot="{ href, navigate, isActive, isExactActive }">
				<li :class="[isActive && 'ac', isExactActive && 'active']">
					<img src="./assets/ico_03.png" alt="" />
					<a @click="navigate" :href="href">入站必刷</a>
				</li>
			</router-link>

       <router-link to="/rank" v-slot="{ href, navigate, isActive }">
				<li :class="[isActive && 'active']">
					<img src="./assets/ico_04.png" alt="" />
					<a @click="navigate" :href="href">排行榜</a>
				</li>
			</router-link> -->
    </ul>

    <div class="con">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import './assets/reset.css'
  export default {
    data(){
      return{
        routers:[
          {name:'首页',path:'/home',id:1},
          {name:'综合热门',path:'/all',id:2},
          {name:'每周必看',path:'/weekly',id:3},
          {name:'入站必刷',path:'/history',id:4},
          {name:'排行榜',path:'/rank',id:5}
        ]
      }
    },
    methods:{
      toUrl(path){
        // 连续点击导航栏两次以上就会报错的，这里的catch用于捕获错误。
        this.$router.push(path).catch(()=>{});
      }
    }
  }
</script>
<style scoped>
#app {
	width: 1000px;
	margin: 0 auto;
}
.head {
	display: flex;
	align-items: center;
	border-bottom: 1px solid #e7e7e7;
}
.head li {
	display: flex;
	align-items: center;
	margin-right: 40px;
	height: 84px;
}
.head li img {
	width: 36px;
	height: 36px;
	margin-right: 10px;
}
.head li a {
	font-size: 16px;
	color: #212121;
	transition: color 0.3s;
}
.head li a:hover {
	color: #00a1d6;
}
.con {
	padding-top: 20px;
}
.head li.active {
	border-bottom: 2px solid #00a1d6;
}
</style>

