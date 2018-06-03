<template>
  <div id="request">
    <input type="text" v-model="keyWord">
    {{keyWord}}
    <!-- <button @click="search">Search</button> -->
    <audio src="" controls="" autoplay="" style="width: 100%;"></audio>
    <div id="res" v-if="res != ''">
      <div v-for="(song, key) in songs" :key="song.id">
        {{key + 1}}-{{song.name}}--{{song.ar[song.ar.length - 1].name}}--{{song.al.name}}
      </div>
    </div>
  </div>
</template>
<script>
import Data from '../components/data'
import { search } from '../../static/js/ajax'
export default {
  name: 'request',
  data () {
    return {
      info: '',
      keyWord: 'numb',
      res: '',
      SongId: '',
      songs: ''
    }
  },
  methods: {
    search: function () {
      var key = this.keyWord
      this.res = search(key)
      this.songs = this.res.result.songs
      // this.songs.push(JSON.stringify(this.res.result.songs))
      // console.log(this.songs)
      // console.log(this.res.code)
      // // console.log(this.res)
      // console.log(this.res.result)
      // console.log(this.res.result.songs)
      // console.log(this.res)
    }
  },
  watch: {
    res: function () {
      console.log('changed')
    },
    components: {
      Data
    }
  },
  mounted: function () {
    Data.$on('getTxt', function (msg) {
      console.log(msg)
    })
  }
}
</script>
<style scoped>
#request{
  padding-top: 80px;
}
ul{
  padding: 0px;
  margin: 0px;
  width: 100%;
}
li{
  list-style: none;
  /* border-bottom: 1px solid red; */
  width: 100%;
  height: 25px;
  padding: 10px;
  line-height: 25px;

}
</style>
