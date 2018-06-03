import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    player: {
      timer: 0,
      searchKeyWord: '',
      playingSongId: '',
      playingSongUrl: '',
      playingSongName: 'SONG',
      playingSongLyric: '',
      playingSongAr: '',
      playingSongAl: '',
      playingSongImg: '../../static/img/init.png',
      playingMvName: 'MV',
      playingMvId: '',
      playingMvUrl: '',
      playingMvAr: '',
      playingMvAl: '',
      playingMvPublishTime: '',
      playingMvCommentSum: '',
      playingMvLikeSum: '',
      playingMvPlayedSum: '',
      playingMvSubSum: '',
      playingMvImg: '../../static/img/videoInit.png',
      playingMvShareSum: '',
      playingMvComments: '',
      playerHide: true,
      playingSongCt: 0,
      playingSongDt: 0,
      songPlayingPercent: 0,
      playingSongLyricPercent: 0
    },
    searchOffset: 0,
    searchRes: [],
    songDiscuss: [],
    playingSongNum: 0,
    listSongPlayingNum: 0,
    songs: [],
    searchResSelectedId: 0,
    recommendedList: [],
    selectListId: '',
    selectedList: {
      adType: 0,
      anonimous: false,
      artists: '',
      cloudTrackCount: 0,
      commentCount: 0,
      coverImgUrl: '',
      createTime: 0,
      creator: {},
      description: '',
      highQuality: false,
      id: 0,
      name: '',
      playCount: 0,
      shareCount: 0,
      subscribed: false,
      tags: [],
      trackCount: 0,
      trackNumberUpdateTime: 0,
      trackUpdateTime: 0,
      tracks: [],
      updateDate: 0,
      userId: 0
    }
  },
  mutations: {
    consolev (state) {
      console.log(state.player.playingSongName)
    }
  }
})
export default store
