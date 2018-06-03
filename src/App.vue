<template>
  <div id="app">
    <div id="header"  @click="menu">
    <div @testEvent='test'></div>
      <SearchBar></SearchBar>
      <router-view></router-view>
    </div>
    <div id="menu">
      <div id="menuSelfCtrl" @click="menuSelfCtrl">
      </div>
    </div>
    <player></player>
    <List></List>
  </div>
</template>
<script>
import Player from './components/player'
import SearchBar from './components/searchBar'
import Search from './components/search'
export default {
  name: 'app',
  data () {
    return {
      menuShow: false
    }
  },
  methods: {
    menu: function (el) {
      if (el.target.className === 'menuCtrl') {
        console.log(el.target.className)
        this.menuShow = !this.menuShow
        // console.log(this.menuShow)
        if (this.menuShow) {
          document.getElementById('menu').classList.add('menuShow')
          document.getElementById('menu').classList.remove('menuHide')
        } else {
          document.getElementById('menu').classList.add('menuHide')
          document.getElementById('menu').classList.remove('menuShow')
        }
        // console.log(document.getElementById('menu').classList)
      }
    },
    menuSelfCtrl: function () {
      this.menuShow = !this.menuShow
      document.getElementById('menu').classList.add('menuHide')
      document.getElementById('menu').classList.remove('menuShow')
    },
    test: function () {
      console.log('event!')
    }
  },
  components: {
    SearchBar,
    Search,
    Player
  }
}
</script>
<style scoped>
#player{
  position: fixed;
  bottom: 0px;
}
#menuSelfCtrl{
  height: 50px;
  width: 50px;
  background-color:#000;
  position: absolute;
  right: 0px;
  top: 0px;
}
#app{
  width: 100%;
  height: 100%;
  overflow: scroll;
}
#header{
  color: red;
  height: 50px;;
  width: 100%;
}
#menu{
  width: 260px;
  height: 100%;
  background-color:rgb(134, 214, 194);
  position: fixed;
  top: 0px;
  z-index: 300;
  left: -260px;
}
.menuShow{
  transform:translateX(260px);
  background-color: rgb(114, 106, 228);
  transition: 200ms;
}
.menuHide{
  transform:translateX(0px);
  transition: 200ms;
}
.init{
  transform:translateX(0px);
  transition: 200ms;
}
</style>
