<template>
  <div id="app">
    <Header></Header>
    <Goods v-for="item in list" 
      :key="item.id" 
      :id="item.id"
      :title="item.goods_name" 
      :pic="item.goods_img" 
      :price="item.goods_price" 
      :state="item.goods_state"
      :counter="item.goods_count"
      @stateChange="getNewState">
    </Goods>
    <Footer :isFull="fullState" :totalPrice="totalPrice" :totalNum="totalNum" @changeAllState="changeAllState"></Footer>
  </div>
</template>

<script>
import axios from 'axios'
import Header from '@/components/Header/Header.vue'
import Goods from '@/components/Goods/Goods.vue'
import Footer from '@/components/Footer/Footer.vue'
import bus from '@/components/eventBus.js'

export default {
  data(){
    return{
      // 用来存储购物车列表数据，默认值为空数组
      list:[]
    }
  },  
  methods:{
    // 封装初始化购物车列表数据
    async initCarList(){
      const {data:res} = await axios.get('https://www.escook.cn/api/cart')
      if(res.status === 200){
        this.list = res.list
      }
    },
    // 接收子组件传递过来的数据
    getNewState(val){
      console.log('接收到子组件数据了！')
      // 使用some()遍历数组
      this.list.some(item=>{
        if(item.id == val.id){
          item.goods_state = val.value
          // 终止后续循环
          return true
        }
      })
    },
    changeAllState(val){
      this.list.forEach(item => {
        item.goods_state = val
      });
    }
  },  
  created(){
    // 调用请求数据的方法
    this.initCarList()

    // 商品数量增加
    bus.$on('addNum',(val)=>{
      this.list.some(item=>{
        if(item.id === val.id){
          item.goods_count = val.value
          return true
        }
      })
    })

		// 商品数量减少
		bus.$on('subNum',(val)=>{
			this.list.some(item=>{
				if(item.id === val.id){
					if(val.value<1){
						val.value = 1
					}
					item.goods_count = val.value
          return true
				}
			})
		})
  },
  components: {
   Header,
   Goods,
   Footer
  },
  computed:{
    // 动态计算出全选的状态是true和是false
    fullState(){
      // return this.list.every(item=>item.goods_state === true)
      return this.list.every(item=>item.goods_state)
    },
		// 商品的总价格
    totalPrice(){
      return this.list
        .filter(item=>item.goods_state)
        .reduce((total,item)=>(total+item.goods_price * item.goods_count),0)
    },
		// 商品的总数量
		totalNum(){
			return this.list
				.filter(item=>item.goods_state)
				.reduce((t,item)=>(t+=item.goods_count),0)
		}
  }
}
</script>

<style lang="less">
  *{
    padding: 0;
    margin: 0;
  }
  #app{
    padding: 50px  0;
  }
</style>
