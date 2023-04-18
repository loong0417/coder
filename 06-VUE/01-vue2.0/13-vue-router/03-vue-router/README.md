# vue-router 参数传递

传递参数的方式一共有两种：

## 1. params（传递简单的数据使用 params）



## 2. query (传递一个对象数据使用 query)


# 导航首位

## 全局导航首位
> 全局导航守卫提供三个钩子函数。

1. 在路由跳转之前触发钩子函数 beforeEach()
router.beforeEach()   

2. 在路由跳转之前触发，beforeResolve() 
router.beforeResolve()


beforeEach和beforeResolve都是在路由跳转之前执行，它们两的区别的前后顺序不一样，
beforeEach在beforeResolve之前执行，但在这之间还会执行一些其它的函数。

3. 在路由跳转之后触发 afterEach() 函数
router.afterEach()



## 路由独享守卫
> 路由独享守卫只有一个钩子函数。
1. 进入路由前触发的钩子函数。 
beforeEnter()     


## 组件内的守卫
> 组件内守卫也是有三个方法：
> 组件内导航守卫在组件内进行配置，调用组件（组件复用）的地方都会触发钩子函数。
<!-- 1. beforeRouterEnetr会在beforeEach和beforeResolve之间触发-->
1. 进入组件前触发的钩子函数
beforeRouteEnetr()

<!-- 2. 动态路由参数变化的时候会触发该函数，使用比较少 -->
2. 更新组件前触发的钩子函数
beforeRouteUpdate()

<!-- 3. 比较常用的钩子函数 -->
3. 离开组件前触发的钩子函数
beforeRouteLeave()




## 完整导航解析流程

1. 导航被触发。
2. 在失活的组件里调用 beforeRouteLeave 守卫。
3. 调用全局的 beforeEach 守卫。
4. 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
5. 在路由配置里调用 beforeEnter。
6. 解析异步路由组件。
7. 在被激活的组件里调用 beforeRouteEnter。
8. 调用全局的 beforeResolve 守卫 (2.5+)。
8. 导航被确认。
10. 调用全局的 afterEach 钩子。
11. 触发 DOM 更新。
12. 调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。

beforeRouteLeave → beforeEach → beforeRouteUpdate → beforeEnter → beforeRouteEnter → beforeResolve → afterEach。
从 beforeEach 到 beforeResolve 中间有三个环节。


# keep-alive



# 路由路径别名配置
