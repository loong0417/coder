import Vue from 'vue'
import Router from 'vue-router'



// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'


// 方式一：结合Vue的异步组件和webpack的代码分析(这是最早的懒加载方式，不推荐使用，知道就行)
// const Home = resolve => {require.ensure(['../components/Home.vue'],()=>{
//   resolve(require('../components/Home.vue'))
// })}

// const About = resolve => {require.ensure(['../components/About.vue'],()=>{
//   resolve(require('../components/About.vue'))
// })}

// const User = resolve => {require.ensure(['../components/User.vue'],()=>{
//   resolve(require('../components/User.vue'))
// })}

// 方式二：AMD写法
// const Home = resolve => require(['../components/Home.vue'],resolve)
// const About = resolve => require(['../components/About.vue'],resolve)
// const User = resolve => require(['../components/User.vue'],resolve)

// 方式三：在ES6中，我们可以有更简单的写法来组织Vue异步组件和webpack的代码分割
// 懒加载 推荐用法

const Home = () => import('../components/Home.vue')
const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessage = () => import('../components/HomeMessage.vue')

const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')

// 也可以使用这样的方式来写懒加载，但不推荐这样使用，这样代码会看着非常乱。
// component:() =>import('../components/Home.vue')

Vue.use(Router)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'',
        redirect: '/home/news'
      },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path:'/about',
    name:'About',
    component: About
  },
  {
    // 动态路由
    path:'/user/:userId',
    name:'User',
    component: User
  }
]


export default new Router({
  routes,
  mode:'history'
})
