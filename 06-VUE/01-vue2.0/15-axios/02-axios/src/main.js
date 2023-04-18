/*
 * @Author: yang_xiaoyang
 * @Date: 2022-03-18 16:25:38
 * @LastEditTime: 2022-03-22 22:57:00
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import { request } from './network/request'
new Vue({
  render: h => h(App),
}).$mount('#app')

// 1. 方式1：
// request({
//   url:'home/multidata'
// },res=>{
//   console.log(res)
// },err=>{
//   console.log(err)
// })

// 2. 方式2：
// request({
//   baseConfig:{
//     url:'home/multidata'
//   },
//   success:function(res){
//     console.log(res)
//   },
//   failure:function(err){
//     console.log(err)
//   }
// });

// 3. 方式3：
request({
  url:'home/multidata'
}).then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})