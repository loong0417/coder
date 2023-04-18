<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- 
      插槽在设置属性的时候最好是在外面包装一层容器，例如：动态的绑定class，动态绑定属性不能直接绑定在插槽上面，
      因为插槽最终是会被覆盖的，如果直接将属性绑定在插槽上面最终会被覆盖。
    -->
    <div v-if="!isActive" >
       <slot name="item-icon"></slot>
    </div>

    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
   
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data(){
    return{
      // isActive: true
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !==-1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods:{
    itemClick(){
      // this.$router.replace(this.path) 两者需要深入研究
      this.$router.push(this.path) 
    }
  }
}
</script>


<style scoped>

  .tab-bar-item{
    flex: 1;
    text-align: center;
    font-size: 14px;
  }

  .tab-bar-item img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
    padding-bottom: 5px;
  }

  .active{
    color: red;
  }
  
</style>