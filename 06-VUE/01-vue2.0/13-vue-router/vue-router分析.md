# vue-router
1. 路由的安装方式有两种：
1）. 创建项目时候直接安装。
2）. npm install vue-router --save 包管理工具方式直接安装


## 1. 路由的基本使用

<!-- == 01-vue-router文件 == -->

1. 路由的基本使用

2. 默认路由设置

3. router-link属性
- to   跳转路由。
- tag    改变标签形式，默认是 a 标签。
- replace 让路径没有histroy，历史记录。
- class   改变 class 属性，router-link 属于激活状态的时候会默认添加 class 属性。

4. router-view  占位


## 2. 动态路由

<!-- == 02-vue-router文件 == -->

1. 动态路由
2. 路由懒加载
3. 路由嵌套
4. $router和route区别

## 3. 导航守卫

<!-- == 03-vue-router文件 == -->

1. 全局导航守卫


## 4. vue-router路由参数
<!-- == 05-vue-router文件 == -->
1. parmas
2. query


## 5. 导航守卫
<!-- == 06-vue-router文件 == -->

1. 全局导航守卫

> 因为我们使用的是单页面富应用，所有只有一个 index.html 页面，然后页面中只会有一个 title 结构，如果不更改就会一直显示一个，默认的 title 。

> 更改标题的方式有哪些呢？

1）. 方式一：可以使用 created() 生命周期函数，然后在 dom 加载完成后更改 title 
document.title = "首页"
> 这样的更改的方式不好的点是，需要在每一个组件中都要去监听函数 created() 每个页面都要改。

<!-- 前置钩子函数  -->
2）. 方式二：router.beforeEach((to,from,next)=>{
  // metched可以取到嵌套地址，也可以取不嵌套的地址
  document.title=to.matched[0].meta.title 
  next()
})

