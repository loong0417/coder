import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../components/Home.vue')
const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessage = () => import('../components/HomeMessage.vue')
const User = () => import('../components/User.vue')
const Profile = () => import('../components/Profile.vue')


const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    name:'home',
    component:Home,
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
    path:'/user/:username',
    name:'user',
    component:User
  },
  {
    path:'/profile',
    name:'profile',
    component:Profile
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
