/*
 * @Author: yang_xiaoyang
 * @Date: 2022-03-18 16:25:38
 * @LastEditTime: 2022-03-22 23:21:03
 * @LastEditors: Please set LastEditors
 */
import axios from 'axios'

/**
 * Encapsulation axios (4) 拦截器（请求拦截和响应拦截）
 * @param {*} config config 
 * @returns back is promise
 */
export function request(config){
    let instance = axios.create({
      baseURL:'http://123.207.32.32:8000',
      timeout:5000
    })
   
    // 请求拦截
    instance.interceptors.request.use(
      // 请求成功返回
      config=>{
        console.log(config)
        // 1. 比如config中的一些信息不符合服务器要求。我们需要在这里拦截下来进行更改。
        // 2. 比如每次发送网络请求时，希望有网络请求加载动画，这门可以在这个地方进行加载。在响应完成前拦截取消动画。
        // 3. 某些网络请求（比如登录 token），必须携带一些特殊信息，如果没有携带在这里进行提示。
        return config;   // 拦截完以后需要返回去，否则main.js里面是拿不到结果的。
      },
      // 请求失败返回
      err=>{
        console.log(err)
    });

    instance.interceptors.response.use(res=>{
      console.log(res.data)
      return res
    },err=>{
      console.log(err)
    });
    return instance(config)  // back is promise
}


/**
 * Encapsulation axios (4) promise方式简写形式
 * 1. 简单封装axios方式就是这样了，即便是这样简单封装，如果出现axios不再维护，也不会对其它代码造成影响。
 * 2. axios放弃维护，我只需要改变这里的代码即可。
 * use promise 
 * @param {
 * } config 
 * @returns 
 */
// export function request(config){
//   // 这里不需要包装promise，因为axios实例返回的就是一个promise
//   let instance = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })
  
//   return instance(config)
// }


/**
 * Encapsulation axios (3) promise方式
 * use promise 
 * @param {
 * } config 
 * @returns 
 */
// export function request(config){
//   return new Promise((resolve,reject)=>{
//     let instance = axios.create({
//       baseURL:'http://123.207.32.32:8000',
//       timeout:5000
//     })
//     instance(config)
//     .then(res=>{
//       resolve(res)
//     })
//     .catch(err=>{
//      reject(err)
//     })
//   })
// }


/**
 * Encapsulation axios (2) 回调函数方式
 * @param {*} config config object type
 */
// export function request(config){
//   let instance = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })
//   instance(config.baseConfig)
//   .then(res=>{
//     config.success(res)
//   })
//   .catch(err=>{
//     config.failure(err)
//   })
// }


/**
 * Encapsulation axios (1) 回调函数方式
 * @param {*} config config
 * @param {*} success success callback function
 * @param {*} failure failure callback function
 */
// export function request(config,success,failure){
//   // create axios instance
//   let instance = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout : 5000,
//   })
//   // send network request
//   instance(config)
//   .then(res=>{
//     success(res)
//   })
//   .catch(err=>{
//     failure(err)
//   })
// }