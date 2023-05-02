import Vue from 'vue'
import VueRouter from 'vue-router'

const Video = () => import('../components/Video')
const Home = () => import('../views/Home')
const All = () => import('../views/All')
const Weekly = () => import('../views/Weekly')
const History = () => import('../views/History')
// /* webpackChunkName:'rank-ground' */ 语法是webpack中的，将两个文件打包在一起，因为Douga是默认重定向组件，如果同时加载两个js文件会影响性能，打包在一起可以大大提高性能。
const Rank = () => import(/* webpackChunkName:'rank-ground' */ '../views/Rank')
const Douga = () => import(/* webpackChunkName:'rank-ground' */ '../views/rank/Douga')
const Music = () => import('../views/rank/Music')
const Dance = () => import('../views/rank/Dance')

Vue.use(VueRouter)

const routes = [
  {
    // 定义动态路由
    path: '/video/:id',
    name: 'video',
    component: Video
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/all',
    name: 'all',
    component: All
  },
  {
    path: '/weekly',
    name: 'about',
    component: Weekly
  },
  {
    path: '/history',
    name: 'history',
    component: History
  },
  {
    path: '/rank',
    name: 'rank',
    component: Rank,
    redirect:'/rank/douga',
    // redirect:()=>({name:gouga}),   // ES6中的使用方式
    // redirect:{     // 因为配置路由添加了name属性，所以重定向中可以直接使用name属性
    //   name: douga
    // },
    children:[
      {
        path: 'douga',
        name: 'douga',
        component: Douga
      },
      {
        path: 'music',
        name: 'music',
        component: Music
      },
      {
        path: 'dance',
        name: 'dance',
        component : Dance
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode:'history',
  linkActiveClass:'ac',
  linkExactActiveClass:'active'
})

export default router
