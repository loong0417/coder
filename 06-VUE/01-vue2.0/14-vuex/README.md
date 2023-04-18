# 01-vuex文件中
1. vuex的基本使用

# 02-vuex文件中
vuex的5个核心分别运用。
1. state  state里面的数据是响应式的，是通过Dep=>watcher监测的(一个Dep对应好多个watcher)，
2. state里面的数据都会被加入到响应式系统中，而响应式系统会监听属性的变化，当属性发生变化时，会通知所有界面中用到该属性的地方，让界面发生刷新。

state{
  <!-- 每一个属性都对应一个Dep，Dep属于观察者模式 -->
  info:{
    name:'yang',   Dep=>[watcher,watcher]
    sex:'female',  Dep=>[watcher]
    age:18         Dep=>[watcher]
  }
  如果在info对象中再添加一个属性 job 这个时候 job 是不会响应式的。因为它没有被加入到响应式系统中。
}
2. getgers

# 03-vuex文件中
3. mutations

mutations参数

4. actions

actions是异步操作，需要经过actions，否则在mutations里面没有办法监测改变步骤。
而且，mutations使用异步操作会界面发生改变（多次触发事件后才能做到数据响应），devTools是没办法监测到数据的。里面的state触发事件一次也是不会和界面一样，跟着改变的。

5. modules
可以再modules里面分模块，进行公共数据管理。
modules里面可以包含：
  1). state
  2). getgets
  3). mutations
  4). actions
  5). modules 这个很少在modules里面再继续嵌套使用。


  6. store目录布局：

  store文件
   -- index.js （state是推荐直接存放在本文件中的，其余的对象全部抽取出来。）
   -- getters.js
   -- mutations.js
   -- actions.js
   -- modules文件（因为模块可能有多个，所以在这里需要建立一个modules文件夹）
      -- modulesA.js
         -- state{}
         -- getters{}
         -- mutations{}
         -- actions{}
         -- modules{} （可以包含modules嵌套，只是这样会使模块变得臃肿）
      -- modulesB.js
         -- state{}
         -- getters{}
         -- mutations{}
         -- actions{}
         -- modules{}
      -- modulesC.js
         -- state{}
         -- getters{}
         -- mutations{}
         -- actions{}
         -- modules{}