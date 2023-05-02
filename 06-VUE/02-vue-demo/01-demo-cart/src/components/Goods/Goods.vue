<template>
  <div class="goodItem">
		<input type="checkbox" class="choose" :checked="state" @change="changeState">
		<img :src="pic" alt="">
		<div class="goodInfo">
			<h3>{{ title }}</h3>
			<div class="total">
				<span class="price">￥{{price}}</span>
				<div>
					<Counter :num="counter" :id="id"></Counter>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import Counter from '@/components/Counter/Counter.vue'
export default {
	props:{
		// goods:{
		// 	default:{},
		// 	type:Object
		// },
		id:{
			require:true,
			type:Number
		},
		// 商品名称
		title:{
			default:'',
			type:String
		},
		// 商品图片
		pic:{
			default:'',
			type:String
		},
		// 商品价格
		price:{
			default: 0,
			type: Number
		},
		// 商品勾选状态
		state:{
			default: true,
			type:Boolean
		},
		// 商品购买数量
		counter:{
			default:1,
			type:Number
		}
	},
	components:{
		Counter
	},
	methods:{
		changeState(e){
			const newState = e.target.checked
			this.$emit('stateChange',{id:this.id,value:newState})
		}
	}
}
</script>

<style lang="less" scoped>
.goodItem{
	display: flex;
	margin: 10px;
	padding-bottom: 10px;
	border-bottom: 1px solid #ddd;
	img{
		width: 100px;
		height: 100px;
		margin: 0 10px;
	}
	.goodInfo{
		width: 220px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		h3{
			flex-wrap: wrap;
			font-size: 16px;
		}
		.total{
			display: flex;
			justify-content: space-between;
			.price{
				color: #f40;
			}
		}
	}
}
</style>