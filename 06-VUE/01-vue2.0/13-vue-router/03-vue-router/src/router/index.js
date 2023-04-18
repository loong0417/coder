import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../components/Home.vue')
const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessage = () =>import('../components/HomeMessage.vue')

const About = () => import('../components/About.vue')
const Profile = () => import('../components/Profile.vue')

Vue.use(Router)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta:{
      title:'首页'
    },
    // 路由嵌套
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
    path: '/about',
    name: 'about',
    component: About,
    meta:{
      title:'关于'
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta:{
      title:'文档'
    }
  },
]

const router =  new Router({
  routes,
  mode:'history'
})

// console.log(router);

// 【1.全局导航守卫】全局导航首位，前置钩子函数（guard）
router.beforeEach((to,from,next)=>{
  // 导航钩子函数三个参数解析：
  // 1. to 即将进入的目标的路由对象。to 对应的是单个路径对象。
  // {                        例如：to 对应的是这个对象。
  //   path: '/profile',
  //   name: 'profile',
  //   component: Profile,
  //   meta:{
  //     title:'文档'
  //   }
  // },   
  // 2. from 当前导航即将离开的路由对象。
  // 3. next() 调用该方法后才能进入下一个钩子。

  // document.title = to.meta.title    // 这样写在有路由嵌套的情况下就会出现title为undefined情况。所以需要写成下面方式。 
  document.title = to.matched[0].meta.title

  console.log(to)  // to 对应每一条路由对象。
  console.log("*********************");
  next()

})


   router.afterEach((to,from)=>{
     console.log("++++++++++++++++++");
   }) //后置钩子函数（hook）

export default router







