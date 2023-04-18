// 小红的代码
var ModuleA = (function(){

  var names = "小红"
  var age = 18
  var sex = 'female'

  var flag = true
  function sum(num1,num2){
    return num1 + num2
  }

  if(flag){
    console.log(sum(10,20))
  }

  var obj = {}

  obj.names = names
  obj.age = age
  obj.sex = sex
  obj.flag = flag
  obj.sum = sum


  return obj

})();



