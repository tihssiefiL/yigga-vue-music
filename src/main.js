import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import List from './components/list'
import { search, getSong, getMv, mvPlay, getLyrics } from '../static/js/ajax.js'
import axios from 'axios'
import AlloyFinger from 'alloyfinger'
import AlloyFingerPlugin from 'alloyfinger/vue/alloy_finger.vue'
Vue.use(AlloyFingerPlugin, {
  AlloyFinger
})
Vue.component('List', List)
new Vue({// eslint-disable-line no-new
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {
    App,
    search,
    getSong,
    getMv,
    mvPlay,
    getLyrics
  }
})
Vue.prototype.hideList = function () {
  document.getElementById('lists').style.transform = 'translateX(-100%)'
}
Vue.prototype.showList = function () {
  document.getElementById('lists').style.transform = 'translateX(0%)'
}
Vue.prototype.getSongDetail = function (id) {
  let url = 'http://123.206.26.156:3000/song/detail?ids=' + id
  axios.get(url)
    .then((data) => {
      store.state.player.playingSongName = data.data.songs[0].name
      store.state.player.playingSongId = data.data.songs[0].id
      store.state.player.playingSongAr = data.data.songs[0].ar[0].name
      store.state.player.playingSongAl = data.data.songs[0].al.name
      store.state.player.playingSongImg = data.data.songs[0].al.picUrl
      store.state.player.playingSongDt = data.data.songs[0].dt
    })
    .catch(error => {
      alert(error)
    })
}
Vue.prototype.getSongUrl = function (id) {
  let url = 'http://123.206.26.156:3000/music/url?id=' + id
  axios.get(url)
    .then((data) => {
      store.state.player.playingSongUrl = data.data.data[0].url
    })
    .catch(error => {
      alert(error)
    })
}
Vue.prototype.search = function (keyWord, offset = 0, limit = 10) {
  let url = 'http://123.206.26.156:3000/search?&keywords=' + keyWord + '&offset=' + offset + '&limit=' + limit
  axios.get(url)
    .then((data) => {
      for (let i = 0; i < limit; i++) {
        store.state.searchRes.push(data.data.result.songs[i])
        store.state.songs.push(data.data.result.songs[i])
      }
    })
    .catch(error => {
      alert(error)
    })
  store.state.searchOffset = store.state.searchOffset + limit
}
Vue.prototype.getLyrics = function (id) {
  let url = 'http://123.206.26.156:3000/lyric?id=' + id
  axios.get(url)
    .then((data) => {
      store.state.player.playingSongLyric = data.data.lrc.lyric.split('\n')
    })
    .catch(error => {
      alert(error)
    })
}
Vue.prototype.listMvPlay = function (id) {
  getMv(id)
    .then(data => {
      if (data.data.data.playCount > 99999999) {
        data.data.data.playCount = data.data.data.playCount / 100000000 + '/亿'
      } else if (data.data.data.playCount > 9999999) {
        data.data.data.playCount = data.data.data.playCount / 10000000 + '/千万'
      } else if (data.data.data.playCount > 999999) {
        data.data.data.playCount = data.data.data.playCount / 1000000 + '/百万'
      } else if (data.data.data.playCount > 99999) {
        data.data.data.playCount = data.data.data.playCount / 100000 + '/十万'
      } else if (data.data.data.playCount > 9999) {
        data.data.data.playCount = data.data.data.playCount / 10000 + '/万'
      }
      store.state.player.playingMvName = data.data.data.name
      store.state.player.playingMvSubSum = data.data.data.subCount
      store.state.player.playingMvShareSum = data.data.data.shareCount
      store.state.player.playingMvPublishTime = data.data.data.publishTime
      store.state.player.playingMvCommentSum = data.data.data.commentCount
      store.state.player.playingMvLikeSum = data.data.data.likeCount
      store.state.player.playingMvPlayedSum = data.data.data.playCount
      store.state.player.playingMvImg = data.data.data.cover
      // console.log(store.state.player)
      // console.log(data.data.data)
      if (data.data.data.brs['1080']) {
        data = data.data.data.brs['1080']
      } else if (data.data.data.brs['720']) {
        data = data.data.data.brs['720']
      } else {
        data = data.data.data.brs['240']
      }
      store.state.player.playingMvUrl = mvPlay(data)
    })
    .catch(error => {
      alert(error)
    })
  setTimeout(() => {
    router.push('/media')
    Vue.prototype.hideList()
  }, 500)
}
