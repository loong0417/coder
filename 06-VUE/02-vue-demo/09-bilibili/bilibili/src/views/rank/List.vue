<template>
	<div class="list">
		<p class="listTitle">{{ listData.note }}</p>
		<ol>
			<li v-for="(article, index) in listData.list" :key="article.aid">
				<div class="num">{{ index + 1 }}</div>
				<div class="img">
					<a href="javascript:;" target="_blank" @click="toUrl(article.bvid)">
						<img
							src="https://dummyimage.com/114x70/00a1d6/fff.png&text=%E5%8D%A0%E4%B8%AA%E4%BD%8D%E7%BD%AE" />
					</a>
				</div>
				<div class="content">
					<h4>
						<a :href="'/video/'+article.bvid" target="_blank" >{{ article.title }}</a>
					</h4>
					<div class="info">
						<p class="detail">
							<span class="data-box">播放：{{ toThousand(article.stat.view) }}万</span>
							<span class="data-box">弹幕：{{ article.stat.danmaku }}万</span>
							<span class="data-box up-name">作者：{{ article.owner.name }}</span>
						</p>
						<div class="pts">
							<p>{{ article.score }}</p>
							<p>综合得分</p>
						</div>
					</div>
					<div class="other" v-if="article.others">
						<a target="_blank" href="//www.bilibili.com/video/BV1Zv411x7hY"
							class="other-link">{{article.others?article.others[0].title:''}}</a>
					</div>
				</div>
			</li>
		</ol>
	</div>
</template>

<script>
export default {
	props: {
		listData: {
			type: Object,
			required: true,
		},
	},
	methods: {
		toThousand(num) {
			return parseFloat((num / 10000).toFixed(1));
		},
		toUrl(id){
			// 这个位置的name是在路由的时候定义的
			this.$router.push({name:'video',params:{id:id}});
		}
	},
};
</script>

<style>
.listTitle {
	font-size: 14px;
	color: #505050;
	margin-bottom: 14px;
	display: flex;
	align-items: center;
}
.list ol {
	transition: 0.2s;
	border-bottom: 1px solid #e5e9ef;
	position: relative;
}
.list ol li {
	display: flex;
	padding: 20px 0 0 0;
	border-bottom: 1px solid #e5e9ef;
}
.list ol .num {
	width: 70px;
	height: 70px;
	top: 20px;
	left: 0;
	line-height: 70px;
	text-align: center;
	font-size: 36px;
	font-weight: 700;
	color: #b8c0cc;
}
.img img {
	width: 114px;
	height: 70px;
	border-radius: 4px;
}
.content {
	margin-left: 20px;
	position: relative;
	flex: 1 1 auto;
}
.content h4 a {
	line-height: 20px;
	font-weight: bold;
	font-size: 14px;
	color: #222;
	transition: 0.3s;
}
.content h4 a:hover {
	color: #00a1d6;
}
.info {
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
	color: #99a2aa;
	font-size: 12px;
}
.detail span {
	margin-right: 20px;
}
.pts {
	text-align: center;
	margin-bottom: 10px;
}
.pts p:nth-child(1) {
	color: #00a1d6;
	font-weight: 700;
	font-size: 16px;
	margin-bottom: 10px;
}
.pts p:nth-child(2) {
	color: #b8c0cc;
	font-size: 12px;
}
.other {
	line-height: 52px;
	border-top: 1px solid #e5e9ef;
	font-size: 14px;
}
.other a {
	color: #222;
}
</style>
