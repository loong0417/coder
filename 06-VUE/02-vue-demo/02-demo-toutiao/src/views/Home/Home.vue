<template>
  <div class="home_container">
    <van-nav-bar title="杨小样随笔" fixed />
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" :disabled="finished">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <ArticleInfo v-for="item in artList" :key="item.art_id" :title="item.title" :author="item.aut_name
          " :count="item.comm_count" :date="item.pubdate" :cover="item.cover"></ArticleInfo>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import ArticleInfo from '@/components/Article/ArticleInfo.vue'
import { getArticleListAPI } from '@/api/articleAPI.js'
// lodash 提供很多好用的函数，节流，防抖，数组一些列函数，操作对象的函数（深拷贝，浅拷贝）
import _ from 'lodash'
let fn = null
export default {
  name: 'Home',
  data() {
    return {
      // 页码值
      page: 1,
      // 每页显示多少条数据
      limit: 10,
      // 文章数据，默认是一个空数组
      artList: [],
      // 是否正在加载下一页数据，如果loading为true，则不会反复触发load事件
      // 每当下一页数据请求回来之后，千万要记得，把loading从true改为false
      loading: true,
      // 所有数据是否加载完毕，如果没有更多数据了，一定要把finished改成true
      finished: false,
      // 是否正在下拉刷新
      isLoading: false

    }
  },
  components: {
    ArticleInfo
  },
  created() {
    this.initArticleList()
  },
  activated() {
    fn = this.recordTopHeadler()
    window.addEventListener('scroll', fn)
  },
  deactivated() {
    window.removeEventListener('scroll', fn)
  },
  methods: {
    // 封装获取文章列表数据的方法
    async initArticleList(isRefresh) {
      const { data: res } = await getArticleListAPI(this.page, this.limit)

      // 当isRefresh为true的时候，表示下拉刷新
      if (isRefresh) {
        // 如果是下拉加载更多，那么数据拼接应该是：this.artList = [新数据在前，旧数据在后]
        this.artList = [...res, ...this.artList]
        this.isLoading = false
      } else {
        // 如果是上拉加载更多，那么数据拼接应该是：this.artList = [旧数据在前，新数据在后]
        this.artList = [...this.artList, ...res]
        this.loading = false
      }

      if (res.length === 0) {
        // 证明没有下一页数据了，直接把finished改为true，表示数据加载完成
        this.finished = true
        this.isLoading = true
      }
    },
    // 只要onLoad被调用，就应该请求下一个数据
    onLoad() {
      // console.log('load 事件被触发！')
      // 当load事件触发，我们需要做两件事情（1. 页码加1，2. 重新请求接口加载数据）
      this.page++
      this.initArticleList()
    },
    // 下拉刷新的处理函数
    onRefresh() {
      // console.log('触发了下拉刷新！')
      // 下拉刷新主要做两件事情（1. 让页码加1，2. 重新请求接口加载数据）
      this.page++
      this.initArticleList(true)
    },
    recordTopHeadler() {
      return _.debounce(() => {
        this.$route.meta.to = window.scrollY
      }, 50, { trailing: true })
    }
  }
}

</script>

<style lang="less" scoped>
.home_container {
  padding: 46px 0 50px 0;

  .van-nav-bar {
    background-color: #1989fa;
  }

  /deep/ .van-nav-bar__title {
    color: white;
    font-size: 20px;
  }
}
</style>
