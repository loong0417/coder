// 在这个模块里暴露一个对象
module.exports = {
  message:'这是模块一',
  fn(){
    console.log(this.message)
  }
}