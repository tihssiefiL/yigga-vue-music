<template>
<div id='player'>
  <div id="bottomPlayer" @click="hideFullScreenPlayer">
    <img id="btImg" :src="imgSrc" alt="" srcset="">
    <div id="control">
      <audio ref="player" id="audio" :src="songUrl" autoplay @ended="nextSong"></audio>
      <div id="songDetial">
        <div id="songName">{{songName}}</div>
        <div id="songLyric"></div>
      </div>
      <div id="buttons">
        <div class="prveSong" @click="prevSong">
          <img class="buttonImg" src="../../static/img/prev.svg" alt="" srcset="">
        </div>
        <div class="playPause" @click="songPlayPause">
          <img class="buttonImg" :src='isplay' alt="" srcset="">
        </div>
        <div class="nextSong" @click="nextSong">
          <img class="buttonImg" src="../../static/img/next.svg" alt="" srcset="">
        </div>
      </div>
    </div>
    <!-- <div id="btPlayerPlayList"></div> -->
  </div>
  <div id='fullScreenPlayer'>
  <div v-if="0" id='discuss'>
    <img @click="discussHide" id="discussHide" src='../../static/img/back.svg'>
    <div>
      1
    </div>
  </div>
  <div id='top'>
    <div id='back' @click='hideFullScreenPlayer'>
      <img id="backImg" src='../../static/img/back.svg'>
    </div>
    <div id='songDetial'>
      <div>{{songName}}</div>
      <div>{{ar}}</div>
    </div>
    <div id='share'>
      <img src='../../static/img/share.svg'>
    </div>
  </div>
  <div id='mid'>
    <div id='frame1' v-show='frame1' @click='changeFrame'>
      <div id='stick'>
        <div id='hover'></div>
        <img src='../../static/img/stick_bg.png'>
      </div>
      <div id='disk'>
        <div id='wrapper'>
          <img src='../../static/img/cd_wrapper.png'>
        </div>
        <div id='cover'>
          <img :src='imgSrc'>
        </div>
      </div>
      <div v-if="0" id='options'>
        <div id='like' @click.stop='downLoad'>
          <img src='../../static/img/like.svg'>
        </div>
        <div id='downLoad' @click.stop='downLoad'>
          <img src='../../static/img/download.svg'>
        </div>
        <div id='comments' @click.stop='downLoad'>
          <img src='../../static/img/comments.svg'>
        </div>
        <div id='more' @click.stop='downLoad'>
          <img src='../../static/img/more.svg'>
        </div>
      </div>
    </div>
    <div id='frame2' v-show='frame2' @click='changeFrame'>
      <div id='volume'></div>
      <div id='lyric'>
        <div v-for="(lyric, key) in lyrics" :key="lyric.id">
          <span v-show="false">{{key}}</span>
          <div v-finger:touch-move="touchMove"
          >{{lyric.replace(lyric.match(/\[.+?\]/),'')}}</div>
        </div>
      </div>
      <div id='fit' @click.stop='downLoad'><img src='../../static/img/morer.svg'></div>
    </div>
    </div>
  <div id='bot'>
    <div id='progress' @click="changeSongPlayingPercent">
      <div :style="{width: songPercent + '%'}"></div>
    </div>
    <div id='controler'>
      <div v-if="0" id='playMode'>
        <img src='../../static/img/single.svg'>
      </div>
      <div id='prev' @click="prevSong">
        <img src='../../static/img/prev.svg'>
      </div>
      <div id='playAndPause' @click="songPlayPause">
        <img id="playImg" :src='isplay'>
      </div>
      <div id='next' @click="nextSong">
        <img src='../../static/img/next.svg'>
      </div>
      <div v-if="0" id='playList'>
        <img src='../../static/img/list.svg'>
      </div>
    </div>
  </div>
</div>
</div>
</template>
<script>
var dis = 0
export default {
  data: function () {
    return {
      isPlay: true,
      playImg: '../../static/img/play.svg',
      frame1: true,
      frame2: false,
      playerShow: false,
      audio: {},
      deg: 0,
      timer: ''
    }
  },
  mounted: function () {
    this.audio = document.getElementById('audio')
    this.addEventListeners()
  },
  beforeDestroyed () {
    this.removeEventListeners()
  },
  computed: {
    songName: function () {
      return this.$store.state.player.playingSongName
    },
    songUrl: function () {
      return this.$store.state.player.playingSongUrl
    },
    imgSrc: function () {
      return this.$store.state.player.playingSongImg
    },
    ar: function () {
      return this.$store.state.player.playingSongAr
    },
    isplay: function () {
      return this.playImg
    },
    lyrics: function () {
      return this.$store.state.player.playingSongLyric
    },
    songPercent: function () {
      return this.$store.state.player.songPlayingPercent
    },
    lyricPercent: function () {
      return -this.$store.state.player.playingSongLyricPercent
    }
  },
  watch: {
    songUrl: function () {
      this.playImg = '../../static/img/pause.svg'
    },
    songPercent: function () {
      document.getElementById('lyric').style.transform = 'translateY(' + -this.$store.state.player.songPlayingPercent + '%)'
    }
  },
  methods: {
    discussHide: function () {
      let el = document.getElementById('discussHide')
      console.log(el)
    },
    nextSong: function () {
      if (this.$store.state.searchRe !== '' || this.$store.state.recommendedList !== '') {
        if (this.$store.state.playingSongNum < 1) {
          this.$store.state.playingSongNum = 2
        } else {
          ++this.$store.state.playingSongNum
        }
      }
    },
    prevSong: function () {
      if (this.$store.state.searchRe !== '' || this.$store.state.recommendedList !== '') {
        if (this.$store.state.playingSongNum < 1) {
          this.$store.state.playingSongNum = 1
        } else {
          --this.$store.state.playingSongNum
        }
      }
    },
    touchMove: function (e) {
      dis = dis + e.deltaY
      if (-dis <= 0) {
        dis = 0
      }
      this.$store.state.player.playingSongLyricPercent = parseInt(dis / e.target.parentNode.parentNode.clientHeight * 100)
      document.getElementById('lyric').style.transform = 'translateY(' + this.$store.state.player.playingSongLyricPercent + 'px)'
      // this.audio.currentTime = -this.$store.state.player.playingSongLyricPercent
    },
    downLoad: function () {
      console.log('下载')
    },
    changeFrame: function () {
      [this.frame1, this.frame2] = [this.frame2, this.frame1]
    },
    hideFullScreenPlayer: function (e) {
      if (e.target.id === 'bottomPlayer' || e.target.id === 'btImg' || e.target.id === 'songName' || e.target.id === 'songLyric' || e.target.id === 'backImg') {
        this.$store.state.player.playerHide = !this.$store.state.player.playerHide
        if (this.$store.state.player.playerHide) {
          document.getElementById('player').style.transform = 'translateY(100%)'
        } else {
          document.getElementById('player').style.transform = 'translateY(0%)'
        }
      }
    },
    songPlayPause: function () {
      let audio = document.getElementById('audio')
      if (audio.paused && this.$store.state.player.playingSongUrl !== '') {
        this.isPlay = true
        this.playImg = '../../static/img/pause.svg'
        audio.play()
      } else {
        audio.pause()
        this.isPlay = false
        this.playImg = '../../static/img/play.svg'
        if (this.$store.state.player.playingSongUrl !== '') {
        }
      }
      // audio.currentTime = 100
    },
    addEventListeners: function () {
      const self = this
      self.$refs.player.addEventListener('timeupdate', self._currentTime)
      self.$refs.player.addEventListener('canplay', self._durationTime)
    },
    removeEventListeners: function () {
      const self = this
      self.$refs.player.removeEventListener('timeupdate', self._currentTime)
      self.$refs.player.removeEventListener('canplay', self._durationTime)
    },
    _currentTime: function () {
      const self = this
      self.$store.state.player.playingSongCt = parseInt(self.$refs.player.currentTime)
      // console.log('当前歌曲已播放' + self.$store.state.player.playingSongCt + '秒')
      self.$store.state.player.songPlayingPercent = parseInt(self.$refs.player.currentTime / self.$refs.player.duration * 100)
      // console.log('当前歌曲进度' + self.$store.state.player.songPlayingPercent + '%')
    },
    _durationTime: function () {
      const self = this
      self.$store.state.player.playingSongDt = parseInt(self.$refs.player.duration)
      // console.log(self.$store.state.player.playingSongDt)
    },
    changeSongPlayingPercent: function (e) {
      // console.log(parseInt(e.offsetX / e.target.clientWidth * 100) + '%')
      this.audio.currentTime = this.$store.state.player.playingSongDt * e.offsetX / e.target.clientWidth
    }
  },
  components: {
  }
}
</script>
<style>
.buttonImg{
  width: 100%;
  height: 100%;
}
#discussHide {
  padding-top: 10px;
  padding-left: 10px;
  height: 50px;
  width: 50px;
  display: grid;
  grid-template-rows: 50px auto;
}
#bottomPlayer{
  position: absolute;
  top: -50px;
  left: 0px;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: rgb(134, 214, 194);
}
#btImg{
  width: 40px;
  height: 40px;
  margin-left: 20px;
}
#btImg img{
  width: 100%;
  height: 100%;
}
#control{
  display: flex;
  align-items: center;
  height: 40px;
  width: 75%;
  margin-left: 10px;
}
#songDetial{
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
}
#songName{
  color:rgb(0, 0, 0);
  font-size: 12px;
  height: 50%;
  width: 100%;
}
#songLyric{
  height: 50%;
  width: 100%;
}
#buttons{
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.prveSong{
  height: 35px;
  width: 35px;
}
.playPause{
  height: 35px;
  width: 35px;
}
.nextSong{
  height: 35px;
  width: 35px;
}
#player {
  position: relative;
  height: 100vh;
  width: 100vw;
  z-index: 100;
  display: flex;
  flex-direction: column;
  transition: 300ms;
  transform: translateY(100%)
}
#botPlayer {
  background-color: rgb(38, 216, 216);
  z-index: 200;
  height: 50px;
  width: 100vw;
}
#fullScreenPlayer {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100vw;
  background-color: indianred;
  z-index: 100;
  position: relative;
}
#discuss {
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0px;
  left: 0px;
  z-index: 999;
  background-color: bisque;
}
#top {
  width: 100%;
  height: 80px;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  border-bottom: rgb(212, 212, 212) 1px solid;
}
#back {
  margin-left: 20px;
  width: 40px;
  height: 40px;
  transform: rotate(-90deg)
}
#songDetial {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  height: 40px;
  width: 200px;
  justify-content: space-between;
}
#songName {
  width: 100%;
  height: 22px;
}
#ar {
  width: 100%;
  height: 22px;
}
#share {
  height: 40px;
  width: 40px;
  position: absolute;
  right: 20px;
}
#mid {
  height: 200px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
#bot {
  height: 100px;
  width: 100vw;
}
#frame1 {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#stick {
  height: 30%;
  width: 30px;
  position: absolute;
  top: 30px;
  z-index: 1;
}
img {
  height: 100%;
  width: 100%;
}
#stick img {
  height: 100%;
  width: auto;
}
#disk {
  height: 350px;
  width: 350px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#cover {
  position: absolute;
  height: 240px;
  width: 240px;
  border-radius: 50%;
}
#cover img{
  border-radius: 50%;
}
#options {
  height: 80px;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  bottom: 0px;
}
#like {
  height: 30px;
  width: 30px;
}
#downLoad {
  height: 30px;
  width: 30px;
}
#comments {
  height: 30px;
  width: 30px;
}
#more {
  height: 30px;
  width: 30px;
}
#frame2 {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  overflow: hidden;
}
#volume {
  margin-top: 5px;
  height: 10px;
  width: 90%;
}
#lyric {
  padding-top: 40%;
  padding-bottom: 40%;
  width: 70%;
  flex-grow: 1;
}
#fit {
  height: 30px;
  width: 30px;
  position: absolute;
  bottom: 10px;
  right: 10px;
}
#progress {
  height: 20px;
  width: 100%;
  margin-top: 0px;
  display: flex;
  align-items: center;
  background-color: brown;
}
#progress div {
  border-radius: 20px;
  height: 50%;
  background-color: #fff;
}
#controler {
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
#playMode {
  height: 50px;
  width: 50px;
}
#prev {
  height: 40px;
  width: 50px;
}
#playAndPause {
  height: 70px;
  width: 70px;
}
#next {
  height: 40px;
  width: 50px;
}
#playList {
  height: 50px;
  width: 50px;
}
</style>
