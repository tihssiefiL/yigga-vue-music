<template>
  <div id="discover">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide><img class="cd" src="../../../static/img/1.png" alt=""></swiper-slide>
      <swiper-slide><img class="cd" src="../../../static/img/2.png" alt=""></swiper-slide>
      <swiper-slide><img class="cd" src="../../../static/img/3.png" alt=""></swiper-slide>
      <swiper-slide><img class="cd" src="../../../static/img/4.png" alt=""></swiper-slide>
      <swiper-slide><img class="cd" src="../../../static/img/5.png" alt=""></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
      <div class="options">
      <span><img src="../../../static/img/option1.gif" alt=""><p>私人FM</p></span>
      <span><img src="../../../static/img/option2.gif" alt=""><p>每日推荐</p></span>
      <span><img src="../../../static/img/option3.gif" alt=""><p>歌单</p></span>
      <span><img src="../../../static/img/option4.gif" alt=""><p>排行榜</p></span>
    </div>
    <hr>
      <div>
        <div class="listWarp">
          <span style="font-size:1rem;line-height:1rem;">推荐歌单</span>
          <img class="arrow" src="../../../static/img/arrows_right.png" alt="" srcset="">
          <div id="list">
          <div class="list" v-for="(item,key) in recommendedList" :key="item.key" @click="selectList">
            <img class="listImg" :src="item.bgImg">
            <div class="lisyKey" v-if="0">{{key}}</div>
            <div class="listId" v-show='0'>{{item.id}}</div>
            <div class="listName">{{item.name}}</div>
          </div>
        </div>
      </div>
        </div>
    <hr>
  </div>
</template>
<script>
import Vue from 'vue'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from 'axios'
export default {
  methods: {
    selectList: function (e) {
      let tag = e.target
      if (tag.className === 'list') {
        this.$store.state.selectListId = tag.children[1].innerHTML
      }
      if (tag.className === 'listImg') {
        this.$store.state.selectListId = tag.parentNode.children[1].innerHTML
      }
      if (tag.className === 'listKey') {
        this.$store.state.selectListId = tag.parentNode.children[1].innerHTML
      }
      if (tag.className === 'listId') {
        this.$store.state.selectListId = tag.parentNode.children[1].innerHTML
      }
      if (tag.className === 'listName') {
        this.$store.state.selectListId = tag.parentNode.children[1].innerHTML
      }
      this.getList(this.$store.state.selectListId)
      Vue.prototype.showList()
    },
    getList: function (id) {
      let url = 'http://123.206.26.156:3000/playlist/detail?id=' + id
      axios.get(url)
        .then((data) => {
          let listData = data.data.result
          this.$store.state.selectedList.adType = listData.adType
          this.$store.state.selectedList.anonimous = listData.anonimous
          this.$store.state.selectedList.artists = listData.artists
          this.$store.state.selectedList.cloudTrackCount = listData.cloudTrackCount
          this.$store.state.selectedList.commentCount = listData.commentCount
          this.$store.state.selectedList.coverImgUrl = listData.coverImgUrl
          this.$store.state.selectedList.createTime = listData.createTime
          this.$store.state.selectedList.creator = listData.creator
          this.$store.state.selectedList.id = listData.id
          this.$store.state.selectedList.name = listData.name
          this.$store.state.selectedList.playCount = listData.playCount
          this.$store.state.selectedList.shareCount = listData.shareCount
          this.$store.state.selectedList.subscribed = listData.subscribed
          this.$store.state.selectedList.tags = listData.tags
          this.$store.state.selectedList.trackCount = listData.trackCount
          this.$store.state.selectedList.trackNumberUpdateTime = listData.trackNumberUpdateTime
          this.$store.state.selectedList.trackUpdateTime = listData.trackUpdateTime
          this.$store.state.selectedList.tracks = listData.tracks
          this.$store.state.selectedList.updateDate = listData.updateDate
          // console.log(this.$store.state.selectedList)
          // console.log(listData)
        })
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        autoplay: true,
        speed: 400,
        loop: false,
        effect: 'fade',
        notNextTick: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 30,
        onSlideChangeEnd: swiper => {
          this.page = swiper.realIndex + 1
          this.index = swiper.realIndex
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }
      },
      recommendedList: []
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    this.swiper.slideTo(0, 0, false)
    axios.get('http://123.206.26.156:3000/personalized')
      .then(data => {
        this.$store.state.recommendedListNum = 6
        this.$store.state.recommendedList = []
        for (let i = 0; i < this.$store.state.recommendedListNum; i++) {
          let name = data.data.result[i].name
          let bgImg = data.data.result[i].picUrl
          let id = data.data.result[i].id
          if (data.data.result[i].playCount > 99999999) {
            data.data.result[i].playCount = data.data.result[i].playCount / 100000000 + '/亿'
          } else if (data.data.result[i].playCount > 9999999) {
            data.data.result[i].playCount = data.data.result[i].playCount / 10000000 + '/千万'
          } else if (data.data.result[i].playCount > 999999) {
            data.data.result[i].playCount = data.data.result[i].playCount / 1000000 + '/百万'
          } else if (data.data.result[i].playCount > 99999) {
            data.data.result[i].playCount = data.data.result[i].playCount / 100000 + '/十万'
          } else if (data.data.result[i].playCount > 9999) {
            data.data.result[i].playCount = data.data.result[i].playCount / 10000 + '/万'
          }
          let played = data.data.result[i].playCount
          // console.log(name)
          // console.log(bgImg)
          // console.log(id)
          // console.log(played)
          let obj = {
            name,
            bgImg,
            id,
            played
          }
          if (this.$store.state.recommendedList.length > 5) {
          } else {
            this.$store.state.recommendedList.push(obj)
          }
        }
        // console.log(this.$store.state.test.recommendedList)
      })
      .then(() => {
        this.recommendedList = this.$store.state.recommendedList
        // console.log(this.recommendedList)
      })
  }
}
</script>
<style scoped>
.listWarp{
  overflow: hidden;
}
#discover{
  /* margin-top: 50px; */
  padding-bottom: 50px;
}
*{
  color: #000000;
}
.cd{
  width: 100%;
  height: auto;
}
.cd img{
  width: 100%;
}
.options{
  display:flex;
  justify-content: space-around;
  align-items: center;
  margin: 0px;
  padding: 0px;
  height: 70px;
  width: 100%;background-color:#f1f5f6;
}
.options span {
  display: flex;
  height: 50px;
  width: 50px;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  background-color:#f1f5f6;
}
.options span p{
  margin-top: 5px;
  margin-bottom: 0px;
  padding: 0px;
  height: 15px;
  text-align: center;
  color: black;
  font-size: 10px;
}
img{
width: 100%;
}
hr{
  opacity: 0.2;
}
#list{
  display: flex;
  flex-wrap: wrap;
}
.list{
  width: 33.333333%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.list img{
  width: 100%;
}
.listName{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  transform: scale(0.8)
}
.arrow{
  height: 1rem;
  width: 1rem;
}
</style>
