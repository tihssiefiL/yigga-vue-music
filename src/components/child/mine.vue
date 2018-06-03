<template>
<div id="mine">
  <div class="mine" id="localMusic">
    <div class="mine_img"><img src="../../../static/img/localMusic.svg" alt=""></div>
    <div>
      <span>本地音乐</span>
    </div>
  </div>
  <div class="mine" id="playHistory">
    <div class="mine_img"><img src="../../../static/img/playHistory.svg" alt=""></div>
    <div>
      <span>播放历史</span>
    </div>
  </div>
  <div class="mine" id="downLoadSongs">
    <div class="mine_img"><img src="../../../static/img/downLoadSongs.svg" alt=""></div>
    <div>
      <span>下载管理</span>
    </div>
  </div>
  <div class="mine" id="myRadio">
    <div class="mine_img"><img src="../../../static/img/myRadio.svg" alt=""></div>
    <div>
      <span>我的电台</span>
    </div>
  </div>
  <div class="mine" id="myCollect">
    <div class="mine_img"><img src="../../../static/img/myCollect.svg" alt=""></div>
    <div>
      <span>我的收藏</span>
    </div>
  </div>
  <div class="mine" id="createList">
    <div class="mine_img"><img src="../../../static/img/localMusic.svg" alt=""></div>
    <div>
      <span>我创建的歌单</span>
    </div>
    <img class="arrow" src="../../../static/img/collapse.svg" alt="">
  </div>
  <div class="mine" id="collectList">
    <div class="mine_img"><img src="../../../static/img/localMusic.svg" alt=""></div>
    <div>
      <span>我收藏的歌单</span>
    </div>
    <img class="arrow" src="../../../static/img/collapse.svg" alt="">
  </div>
</div>
</template>
<script>
export default{
  name: 'mine',
  data () {
    return {
    }
  },
  computed: {
  },
  components: {
  },
  mounted () {
  }
}
</script>
<style scoped>
#mine {
  display: grid;
  grid-template-rows: 40px 40px 40px 40px 40px auto auto;
}
.mine {
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(143, 143, 143);
  position: relative;
}
.arrow {
  height: 40px;
  width: 40px;
  position: absolute;
  right: 0px;
}
.mine_img {
  height: 100%;
  width: 40px;
}
</style>
