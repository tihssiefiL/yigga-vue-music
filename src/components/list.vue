<template>
  <div id="lists">
    <div id="listTop">
      <div id="listBack" @click="hideList">
        <img src="../../static/img/back.svg">
      </div>
      <div id="listType">歌单</div>
      <div id="listSearch">
        <img src="../../static/img/search_focus.svg" alt="">
      </div>
      <div id="listMore">
        <img src="../../static/img/listMore.svg" alt="">
      </div>
    </div>
    <div id="listDetail">
      <div id="listDetaillistT">
        <div id="listDetaillistTL">
          <div id="listImg">
            <img :src='listImgUrl'>
          </div>
        </div>
        <div id="listDetaillistTR">
          <div id="listsName">{{listName}}</div>
          <div id="listCreateUser">
            <div id="listCreateUserImg">
              <img :src='creatorImg' alt="">
            </div>
            <div id="listCreateUserName">
              <div>{{creatorName}}</div>
            </div>
            <div id="listCreateUserDetail">
              <img src="../../static/img/creatorDetailArrow.svg" alt="">
            </div>
          </div>
        </div>
      </div>
      <div id="listDetailBot">
        <div></div>
        <div id="listSubscribed">
          <img src="../../static/img/listSubscribe.svg" alt="">
        </div>
        <div></div>
        <div id="listComments">
          <img src="../../static/img/comments.svg" alt="">
        </div>
        <div></div>
        <div id="listShare">
          <img src="../../static/img/share.svg" alt="">
        </div>
        <div></div>
        <div id="listDownLoad">
          <img src="../../static/img/download.svg" alt="">
        </div>
        <div></div>
      </div>
    </div>
    <div id="listControl">
      <div id="playAllButton">
        <div id="playAllImg">
          <img src="../../static/img/play.svg" alt="">
        </div>
        <div id="playAll">
          <div>播放全部<span>(共{{songSum}}首)</span></div>
        </div>
      </div>
      <div id="listMultiSelect">
        <div id="MultiSelectImg">
          <img src="../../static/img/list.svg" alt="">
        </div>
        <span>多选</span>
      </div>
    </div>
    <div id="listsItems">
      <div class="listItem" v-for="(item, key) in lists" :key="key">
        <div class="listSongNumber">{{key + 1}}</div>
        <div class="listSongDetail">
          <div class="songName" @click.stop="listPlay">{{item.name}}</div>
          <div class="aboutListSong">
            <div v-if="0" class="listSongHighQuality">HQ</div>
            <div class="listSongAr">{{item.ar[0].name}}-</div>
            <div class="listSongAl">{{item.al.name}}</div>
          </div>
        </div>
        <div class="listSongMv" v-if="item.mvid != ' '">
          <img src="../../static/img/mv.svg" alt="" @click.stop="playListMv">
        </div>
        <div class="listSongMore">
          <img src="../../static/img/listMore.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
export default{
  name: 'List',
  data: () => {
    return {
    }
  },
  methods: {
    hideList: function () {
      Vue.prototype.hideList()
    },
    showList: function () {
      Vue.prototype.showList()
    },
    listPlay: function (e) {
      this.$store.state.playingSongNum = e.target.parentNode.parentNode.childNodes[0].innerHTML
    },
    playListMv: function (e) {
      let listMvNum = e.target.parentNode.parentNode.childNodes[0].innerHTML - 1
      let mvId = this.$store.state.selectedList.tracks[listMvNum].mvid
      Vue.prototype.listMvPlay(mvId)
    }
  },
  computed: {
    listImgUrl: function () {
      return this.$store.state.selectedList.coverImgUrl
    },
    listName: function () {
      return this.$store.state.selectedList.name
    },
    creatorName: function () {
      return this.$store.state.selectedList.creator.nickname
    },
    creatorId: function () {
      return this.$store.state.selectedList.userId
    },
    creatorImg: function () {
      return this.$store.state.selectedList.creator.avatarUrl
    },
    songSum: function () {
      return this.$store.state.selectedList.trackCount
    },
    lists: function () {
      return this.$store.state.selectedList.tracks
    },
    playingNum: function () {
      return this.$store.state.playingSongNum
    }
  },
  watch: {
    playingNum: function () {
      if (this.$store.state.searchRes.length === 0) {
        let id = this.$store.state.selectedList.tracks[this.$store.state.playingSongNum - 1].id
        Vue.prototype.getSongDetail(id)
        Vue.prototype.getSongUrl(id)
        Vue.prototype.getLyrics(id)
      } else {
      }
    }
  }
}
</script>
<style scoped>
img {
  width: 100%;
  height: 100%;
}
#lists {
  color: #fff;
  background-color: rgb(214, 214, 214);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 30;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows:260px 40px auto;
  transform: translateX(-100%);
  transition: 500ms;
}
#listTop {
  background-color: rgb(214, 214, 214);
  position: fixed;
  top: 10px;
  z-index: 100;
  height: 40px;
  width: 100vw;
  display: grid;
  grid-template-columns: 40px auto 40px 40px;
  grid-template-rows: 40px;
  z-index: 200;
}
#listBack,#listSearch,#listMore img{
  width: 40px;
  height: 40px;
}
#listType {
  padding-left: 20px;
  line-height: 40px;
}
#listDetail {
  margin-top: 50px;
  padding-top: 10px;
  display: grid;
  grid-template-rows: 150px 50px;
  grid-template-columns: 1fr;
}
#listDetaillistT {
  display: grid;
  grid-template-columns: 150px auto;
}
#listDetaillistTR {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 90px 60px;
}
#listDetailBot {
  display: grid;
  grid-template-columns: 30px auto auto auto auto auto auto auto 30px;
  grid-template-rows: 30px;
}
#listCreateUser {
  display: flex;
}
#listCreateUserImg{
  height: 30px;
  width: 30px;
}
#listCreateUserImg img{
  border-radius: 50%;
}
#listCreateUserName{
  padding-left: 10px;
  height: 30px;
  line-height: 30px;
}
#listCreateUserDetail{
  height: 30px;
  width: 30px;
  line-height: 30px;
}
#listImg {
  display: flex;
  justify-content: center;
  align-items: center;
}
#listImg img{
  height: 80%;
  width: 80%;
}
#listsName {
  padding: 20px;
}
#listCreateUserName {
  font-size: 12px;
}
#listControl {
  display: grid;
  grid-template-columns: auto 75px;
  grid-template-rows: 30px;
  border-bottom: 1px solid #fff;
}
#playAllImg img{
  padding-left: 5px;
}
#listsItems {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 50px;
}
#playAll {
  padding-left: 10px;
  display: flex;
  align-items: center;
  color: #000;
  font-size: 15px;
}
#playAll span{
  font-size: 12px;
  color: rgb(212, 212, 212);
}
#playAllButton {
  display: grid;
  grid-template-columns: 50px auto;
  grid-template-rows: 30px;
}
#listMultiSelect {
  display: grid;
  grid-template-columns: 30px 45px;
  grid-template-rows: 30px;
  font-size: 12px;
}
#listMultiSelect span{
  padding-left: 5px;
  padding-right: 10px;
  line-height: 30px;
  color: #000;
}
.listSongNumber {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: rgb(122, 122, 122);
}
.listItem {
  overflow: hidden;
  height: 50px;
  width: 100vw;
  border-bottom: 1px solid #fff;
  display: grid;
  grid-template-columns: 20px auto 40px 40px;
  line-height: 50px;
  color: #000;
}
.listSongDetail {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 30px 20px;
}
.songName {
  font-size: 12px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  padding-left: 10px;
  overflow: hidden;
}
.aboutListSong {
  padding-left: 10px;
  display: flex;
  flex-direction: row;
}
.listSongHighQuality {
  font-size: 12px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.listSongAr {
  font-size: 12px;
  display: flex;
  align-items: center;
}
.listSongAl {
  font-size: 12px;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.listSongMv {
  display: flex;
  justify-content: center;
  align-items: center;
}
.listSongMore {
  position: absolute;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.listSongMv img{
  height: 30px;
  width: 30px;
}
.listSongMore img{
  margin-top: 10px;
  height: 30px;
  width: 30px;
}
</style>
