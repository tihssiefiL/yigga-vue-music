<template>
<div>
<video id="video" :src="mvUrl" controls></video>
    <div v-show="this.$store.state.player.playingMvUrl">
      <div>MV: {{this.$store.state.player.playingMvName}}</div>
      <div>发行时间: {{this.$store.state.player.playingMvPublishTime}}</div>
      <div>播放量：{{this.$store.state.player.playingMvPlayedSum}}</div>
      <div>点赞人数： {{this.$store.state.player.playingMvLikeSum}}</div>
      <div>收藏人数： {{this.$store.state.player.playingMvSubSum}}</div>
      <div>评论人数： {{this.$store.state.player.playingMvCommentSum}}</div>
      <div>分享人数： {{this.$store.state.player.playingMvShareSum}}</div>
    </div>
    <div>
      <!-- <div v-for=""></div> -->
    </div>
</div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
  },
  computed: {
    mvUrl () {
      return this.$store.state.player.playingMvUrl
    }
  },
  methods: {
  },
  components: {
  }
}
</script>
<style scoped>
#video {
  margin-top: 50px;
  width: 100vw;
}
</style>
