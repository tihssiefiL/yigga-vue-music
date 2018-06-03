<template>
  <div id="search">
      <div class="keyWords">
        <div class="back">
          <span>
          </span>
          </div>
        <div id="textArea">
          <input type="text" v-model="keyWord" placeholder="搜索点什么吧"><button @click="search">搜索</button>
        </div>
      </div>
      <div id="searchRes" v-if="songs != ''">
        <div class="searchResItems" v-for="(item, key) in songs" :key="key" >
          <div class="searchResItemNum">{{key + 1}}</div>
          <div class="searchSongDetail">
            <div class="searchResItemName" @click.stop="searchSongPlay">{{item.name}}</div>
            <div class="searchSongArAl">
              <div class="searchResItemAr">{{item.artists[0].name}}-</div>
              <div class="searchResItemAl">{{item.album.name}}</div>
            </div>
          </div>
          <div class="searchResItemMv" v-if="item.mvid">
            <img  @click.stop="getSearchSongMvPlay"  src="../../static/img/mv.svg">
          </div>
          <div class="searchResItemMore">
            <img src="../../static/img/more.svg" alt="">
          </div>
        </div>
        <div id="loadMore" @click="search">加载更多</div>
      </div>
  </div>
</template>
<script>
import Vue from 'vue'
import searchBox from '../components/child/searchbox'
export default{
  name: 'search',
  data () {
    return {
      num: 0,
      msg: 'hello',
      info: '',
      keyWord: '林俊杰',
      SongId: '',
      playingSongUrl: '',
      playingSongName: '网易云音乐',
      playingSongAr: '',
      playingSongAl: '',
      playingSongImg: '',
      playingSongLyric: [],
      searchLimit: 30,
      searchOffset: 0
    }
  },
  computed: {
    songs: function () {
      return this.$store.state.searchRes
    },
    playingNum: function () {
      return this.$store.state.playingSongNum
    }
  },
  methods: {
    search: function () {
      Vue.prototype.search(this.keyWord, this.$store.state.searchOffset, this.searchLimit)
    },
    getSearchSongMvPlay: function (e) {
      let id = this.$store.state.searchRes[e.target.parentNode.parentNode.childNodes[0].innerHTML - 1].mvid
      Vue.prototype.listMvPlay(id)
    },
    searchSongPlay: function (e) {
      this.$store.state.playingSongNum = e.target.parentNode.parentNode.children[0].innerHTML
    }
  },
  components: {
    searchBox
  },
  destroyed () {
    this.$store.state.searchRes = []
  },
  watch: {
    playingNum: function () {
      let id = this.$store.state.songs[this.$store.state.playingSongNum - 1].id
      Vue.prototype.getSongDetail(id)
      Vue.prototype.getSongUrl(id)
      Vue.prototype.getLyrics(id)
    }
  }
}
</script>
<style scoped>
#searchRes {
  color: black;
}
#textArea{
  width: 100%;
  display: flex;
}
#textArea input{
  flex-grow: 1;
  height: 30px;
  font-size: 18px;
  outline: none;
}
#textArea button{
  background-color: rgb(51, 160, 223);
  width: 60px;
  border-radius: 12px;
  font-size: 20px;
  font-weight: 900;
  color: rgb(49, 231, 119);
  outline: none;
}
#search {
  margin-top: 50px;
  font-size: 13px;
  margin-bottom: 50px;
}
.id {
  display: grid;
}
.searchResItems {
  position: relative;
  display: grid;
  grid-template-columns: 30px auto 40px 40px;
  grid-template-rows: 40px;
  border-bottom: 1px #fff solid;
}
.searchResItemNum {
  display: flex;
  justify-content: center;
  align-items: center;
}
.searchResItemMore {
  position: absolute;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.searchResItemMore img {
height: 40px;
width: 40px;
}
.searchSongDetail {
  display:flex;
  flex-direction: column;
  justify-content: center;
}
.searchSongArAl {
  display: flex;
}
.searchResItemNum {
  font-size: 15px;
}
#loadMore {
  font-size: 20px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
