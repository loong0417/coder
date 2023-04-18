import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../components/Home.vue')
const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessage = () => import('../components/HomeMessage.vue')

const User = () => import('../components/User.vue')
const About = () => import('../components/About.vue')

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    name:'home',
    component:Home,
    meta:{
      title:'首页'
    },
    children:[
      {
        path:'',
        redirect:'/home/news'
      },
      {
        path:'news',
        name:'news',
        component:HomeNews
      },
      {
        path:'message',
        name:'message',
        component:HomeMessage
      }
    ]
  },
  {
    path:'/user',
    name:'user',
    component:User,
    meta:{
      title:'用户'
    }
  },
  {
    path:'/about',
    name:'about',
    component:About,
    meta:{
      title:'关于'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/**
 * router.beforeEach(function(to,from,next){})
 * 1. 下面我们直接写成箭头函数
 * 2. next()是一个函数，我们在下面需要调用一个这个函数，不调用这个 next 函数path都不会跳转
 * 3. 这里是通过我的实现将他内部的实现覆盖了，beforeEach 函数
 */

// 前置钩子函数（guard），在路由跳转前回调
router.beforeEach((to,from,next)=>{
  // 从 from 跳转到 to
  // 第一种这样的取法 document.title = to.meta.title 当首页有路径嵌套的时候取的是undefined。
  // meta 取到的是一个嵌套的地址，所以拿不到 title，matched[]是一个数组，拿到是两个地址，
  // 一个home和一个home/new 嵌套的，取第一个即可。
  // document.title = to.meta.title   

  // console.log(to)   

  document.title=to.matched[0].meta.title   // metched可以取到嵌套地址，也可以取不嵌套的地址
  next()
})

// 后置钩子函数（Hook），在路由跳转后回调
router.afterEach((to,from)=>{

})

export default router
