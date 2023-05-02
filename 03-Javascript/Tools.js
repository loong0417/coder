 /**
 * 封装兼容性方法，求滚动轮滚动离 getScrollOffset()
 */
function getScrollOffset(){
    if(window.pageXOffset){
        return{
            x : window.pageXOffset,
            y : window.pageYOffset
        }
    }else{
        return{
            x : document.body.scrollLeft + document.documentElement.scrollLeft,
            y : document.body.scrollTop + document.documentElement.scrollTop
        }
    }
}


// 封装兼容性方法，返回浏览器视口尺寸 getViewportOffset()
function getViewportOffset(){
    if(window.innerWidth){
        return {
            w : window.innerWidth,
            h : window.innerHeight
        }
    }else{
        if(document.compatMode === "BackCompat"){
            return {
                w : document.body.clientWidth,
                h : document.body.clientHeight
            }
        }else{
            return {
                w : document.documentElement.clientWidth,
                h : document.documentElement.clientHeight
            }
        }
    }
}


// 封装兼容性方法 getStyle(elem,prop)
function getStyle(elem,prop){
    if(window.getComputedStyle){
        return window.getComputedStyle(elem,null)[prop];
    }else{
        return elem.currentStyle[prop];
    }
}
// var div = document.getElementsByTagName('div')[0];
// console.log(getStyle(div,'border'));


// this is test function 
function test(){
    console.log("aaa");
}