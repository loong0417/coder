function animate(obj,target,callback){
  clearInterval(obj.timer);
  obj.timer = setInterval(function(){
    if(target == obj.offsetLeft){
      clearInterval(obj.timer);
      // if(callback){
      //   // 执行回调函数
      //   callback();
      // }
      callback&&callback();
    }
    var step = (target - obj.offsetLeft) / 10;
    step = step > 0 ? Math.ceil((target-obj.offsetLeft) / 10) : Math.floor((target-obj.offsetLeft) / 10);
    obj.style.left = obj.offsetLeft + step + 'px';
  },30);
}