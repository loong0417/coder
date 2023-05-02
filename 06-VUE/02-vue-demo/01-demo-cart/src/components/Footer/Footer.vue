<template>
  <div class="footer">
		<label><input type="checkbox" name="" id="" :checked="isFull" @change="allState">全选</label>
		<span>合计:<strong>￥{{ totalPrice.toFixed(2) }}</strong></span>
		<button>结算({{ totalNum }})</button>
  </div>
</template>

<script>
export default {
	props:{
		// 商品是否全选
		isFull:{
			type:Boolean,
			default:true
		},
		// 勾选商品总价格
		totalPrice:{
			type:Number,
			default:0
		},
		// 勾选商品总数量
		totalNum:{
			type:Number,
			default:0
		}
	},
	methods:{
		// 监听全选状态的变化
		allState(e){
			// this.$emit('changeAllState',this.isFull)
			this.$emit('changeAllState',e.target.checked)
		}
	}
}
</script>

<style lang="less" scoped>
.footer{
	height: 60px;
	width: 100%;
	display: flex;
	justify-content: space-around;
	position: fixed;
	bottom: 0;
	border-top: 1px solid #ddd;
	padding: 0 10px;
	background-color: #fff;
	z-index: 2;
	align-items: center;
	input{
		margin-right: 5px;
	}
	button{
		width: 80px;
		height: 30px;
		background-color: blue;
		color: #fff;
		outline: none;
		border: none;
		border-radius: 5px;
	}
	strong{
		font-weight: 700;
		color: #f40;
	}
}
</style>