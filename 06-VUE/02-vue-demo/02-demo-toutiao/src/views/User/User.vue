<template>
  <div class="user_container">
    <div class="userUp">
      <!-- 用户信息 -->
      <div class="userInfo">
        <van-image width="100" height="100" src="https://img01.yzcdn.cn/vant/cat.jpeg" round />
        <div class="title">
          <h3 class="userName">杨小样随笔</h3>
          <span class="tag">申请认证</span>
        </div>
      </div>
      <!-- 动态/关注/粉丝 -->
      <div class="action">
        <div class="action item">
          <span>0</span>
          <span>动态</span>
        </div>
        <div class="follow item">
          <span>0</span>
          <span>关注</span>
        </div>
        <div class="like item">
          <span>0</span>
          <span>粉丝</span>
        </div>
      </div>
    </div>
    <!-- 编辑资料/小样同学/推出登录 -->
    <div class="userDown">
      <div>
        <van-cell icon="label-o" is-link>编辑资料</van-cell>
      </div>
      <div>
        <van-cell icon="chat-o" is-link>小样同学</van-cell>
      </div>
      <div>
        <van-cell icon="warning-o" is-link>退出登录</van-cell>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.user_container {
  .userUp {
    background-color: #1989fa;
    padding: 20px;
    color: white;

    .userInfo {
      display: flex;
      margin-bottom: 30px;

      .title {
        margin-left: 20px;

        .tag {
          display: inline-block;
          width: 60px;
          height: 16px;
          line-height: 16px;
          background-color: white;
          color: #1989fa;
          font-size: 12px;
          text-align: center;
          border-radius: 5px;
        }
      }

    }

    .action {
      display: flex;
      justify-content: space-around;

      .item {
        display: flex;
        flex-direction: column;
        text-align: center;
      }
    }
  }

  .userDown {
    margin-top: 10px;

    /deep/ .van-icon {
      font-size: 20px;
      margin-right: 6px;
    }

    /deep/ .van-cell {
      font-size: 16px;
    }
  }

  //
}
</style>
