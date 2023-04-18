import Vue from 'vue'
// 1. 配置路由相关的信息
import Router from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'

// 2. 使用路由
Vue.use(Router)

// 注意：这里再原型中添加了一个 push 方法，是因为在 App.vue 中通过 this.$router.push()会出现重复多次压入同一个地址进栈的错误。
// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location, onResolve, onReject) {
//   if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
//   return originalPush.call(this, location).catch(err => err)
// }

  // 3.1. 配置路径和组件的映射关系（这个可以放到 Router 对象里面，也可以单独抽取出来，和组件那个位置是一样的）
  // routes 名字是固定的，不能自定义的。否则在 router-view 时候不会显示。
  // redirect 重定向，设置一个默认页面首页
const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component : About
  }
]
// 3. 实例化路由对象
const router =  new Router({
  routes,
  mode:'history',
  linkActiveClass:'active'
})

// 4. 将router对象传入到vue实例中
export default router
