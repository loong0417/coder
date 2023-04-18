<template>
  <div id="app">
    <!-- 
      router-link 属性：
        1. to 指定路由地址。
        2. tag 通过 tag 指定标签类型，router-link 默认是一个 a 标签。
        3. replace 属性是无值的。添加后不会有历史返回，类似于 replaceState 函数。
        4. class 属性，当 router-link 属于活跃状态的时候会添加两个默认的class属性，router-link-exact-active 和 router-link-active（可以在dom中查看）。
        
        注意：这两个属性非常长，看着感觉有些代码冗余的感觉。 可以使用 active-class="active" 设置属性。

        1）. <router-link to="/home" active-class="active">首页</router-link> 如果router-link比较多会造成每一个router-link都需呀手动添加。
        2）. 在 router 实例中设置属性 linkActiveClass="active"
     -->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <br>
    <br>
    <!-- 
      如果我们这里使用的是 button 元素，那么怎么实现地址跳转呢？
        1. 只能在点击事件中通过代码的方式修改路径。
     -->
    <button @click="clickHome">首页</button>
    <button @click="clickAbout">关于</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    /**
     * 注意：这里的 this.$router是等于router/index.js文件中那个实例化的router的，
     * 我们在 main.js 中对router进行了打印，在clickHome方法中也对 this.$router 进行了打印
     * 比对内容是一样的。
     * 
     *   1. 通过代码修改路径，但不要通过 history 方式修改路径，这种方式是绕过 vue-router 路由的方式对路径进行修改。
     *   2. 我们通过代码修改地址的方式最终一定是通过 vue-router 方式修改路由的。
     *   3. 使用 this.$router.push()，this.$router.replace()
     *   4. history.pushState({},'','/home');
     */
    clickHome(){

      // this.$router.push('/home');   //相当于 history.pushState()
      this.$router.replace('/home');
      console.log(this.$router)
      console.log("clickHome");
    },
    clickAbout(){
      // history.pushState({},'','/about');

      // this.$router.push('/about');
      this.$router.replace('/about');  // 相当于 history.replaceState()
      console.log("clickAbout");
    }
  }
}
</script>

<style>

</style>
