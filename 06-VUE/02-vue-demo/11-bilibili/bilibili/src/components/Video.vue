<template>
  <div class="video">
    视频页面
    <iframe :src="'//player.bilibili.com/player.html?aid=514798786&bvid='+$route.params.id+'&cid=811243970&page=1'" 
    scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="800" height="600"> 
    </iframe>
  </div>
</template>

<script>
export default {
  created(){
    console.log(this.$route.params)
  }
}
</script>

<style>

</style>