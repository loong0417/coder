<template>
  <div class="articleInfo">
    <van-cell>
      <!-- 标题插槽区域 -->
      <template #title>
        <div class="title-box">
          <span>{{ title }}</span>
          <!-- 一张封面 -->
          <img v-if="cover.type === 1" src="@/assets//icon/mysql.jpeg" alt="" class="thumb">
        </div>
        <!-- 三张封面 -->
        <div class="thumb-box" v-if="cover.type == 3">
          <img src="@/assets/icon/database.jpeg" alt="" class="thumb" v-for="item in cover.images" :key="item.images">
        </div>
      </template>

      <!-- 自定义标题下方 label 的内容 -->
      <template #label>
        <div class="label-box">
          <span>作者：杨小样随笔 &nbsp;&nbsp; 评论：{{ count }}&nbsp;&nbsp; 发布日期：{{ date }}</span>
          <!-- 关闭按钮 -->
          <van-icon name="cross" />
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script>

export default {
  name: 'ArticleInfo',
  props: {
    title: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    },
    count: {
      type: [Number, String],
      default: 0
    },
    date: {
      type: String,
      default: ''
    },
    cover: {
      type: Object,
      default: function () {
        return { type: 0 }
      }
    }
  }
  // created() {
  //   console.log(this.imgs)
  // }
}
</script>

<style lang="less" scoped>
.label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.thumb {
  // 矩形的黄金分割比例
  width: 113px;
  height: 70px;
  background-color: #f8f8f8;
  object-fit: cover;
}

.title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.thumb-box {
  display: flex;
  justify-content: space-between;
}
</style>
