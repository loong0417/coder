import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
Vue.config.productionTip = false



// 0. 可以使用：https://httpbin.org 模拟网络请求
new Vue({
  render: h => h(App),
}).$mount('#app')

/**
 * 1. 请求方法，默认是get请求
 * axios(config)  config 配置项是一个对象类型，默认是get请求
 * http://123.207.32.32:8000/home/multidata 王元红提供的接口
 */
axios({
  url:'http://123.207.32.32:8000/home/multidata'
}).then(res=>{
  console.log(res);   // Object
}).catch(err=>{
  console.log(err);
})

/**
 * 2. 请求别名方法 get
 * axios.get('url').then((res)=>{
 *    console.log(res);
 * })
 */
axios.get('http://123.207.32.32:8000/home/multidata').then((res)=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})

/**
 * 3. params 用于get请求的参数拼接（拼接完成后：data?type=pop&page=1）就不需要在地址上作拼接
 */
axios({
  url:'http://123.207.32.32:8000/home/data',
  params:{
    type:'pop',
    page: 1
  }
}).then(res=>{
  console.log(res);
}).catch(err=>{
  console.log(err);
});

/**
 * 4. 并发请求
 * 1. 并发请求使用 axios.all方法完成
 */
 axios.all[{},{}]

/**
 * 5.创建axios实例
 * 1. 两个请求使用同一个实例完成。
 * 2. 如果请求的home数据，multidata在一个服务器中，而data又在另一个服务器中呢？那这样写是不行的。
 */
const instance = axios.create({
  baseURL:'http://123.207.32.32:8000',
  timeout:5000
})
instance({
  url:'home/multidata',
}).then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})

instance({
  url:'/home/data',
}).then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})



