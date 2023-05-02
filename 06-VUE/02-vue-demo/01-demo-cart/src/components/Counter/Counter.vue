<template>
  <div class="counter">
    <button @click="sub">-</button>
    <span>{{num}}</span>
    <button @click="add">+</button>
  </div>
</template>

<script>
import bus from '@/components/eventBus.js'
export default {
	props:{
		// 商品id必须传值
		id:{
			require:true,
			type:Number
		},
		// 商品数量
		num:{
			default:1,
			type:Number
		}
	},
	methods:{
		add(){
			// 要发送给App的数据格式为{ id,value }
			// 其中，id是商品id，value是商品最新的购买数量
			const obj = {id:this.id,value:this.num+1}
			bus.$emit('addNum',obj)
		},
		sub(){
			const obj = {id:this.id,value:this.num-1}
			bus.$emit('subNum',obj)
		}
	}	
}
</script>

<style lang="less" scoped>
	.counter{
		button{
			width: 20px;
			text-align: center;
			outline: none;
			border: none;
			background-color: transparent;
			font-size: 18px;
		}
		span{
			display: inline-block;
			width: 20px;
			border: 1px solid #ddd;
			margin: 0 10px;
			text-align: center;
			font-size: 12px;
		}
	}

</style>