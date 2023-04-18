import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('views/home/Home.vue')
const Category = () => import('views/category/Category.vue')
const Shopcart = () => import('views/shopcart/Shopcart.vue')
const Profile = () => import('views/profile/Profile.vue')

Vue.use(Router)

// 添加这个之后，使用 this.$router.push(this.path) 方式改变路由不会报错，
// 如果使用的是 replace(this.path) 还是会报错的。
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path:'',
      redirect:'/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path:'/category',
      component:Category,
    },
    {
      path:'/shopcart',
      component:Shopcart
    },
    {
      path:'/profile',
      component:Profile
    }
  ],
  mode:'history'
})
