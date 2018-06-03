<template>
  <div id="searchBar">
    <div class="menu">
      <div>
        <router-link tag="div" to="">
          <img class="menuCtrl" src="../../static/img/menu_focus.svg" alt="">
          <div ></div>
        </router-link>
      </div>
    </div>
    <div class="options">
      <div>
        <router-link to="/media">
          <img src="../../static/img/media_focus.svg" alt="">
        </router-link>
      </div>
      <div>
        <router-link to="/music/discover">
          <img src="../../static/img/home_focus.svg" alt="">
        </router-link>
      </div>
      <div>
        <router-link to="/contects">
          <img src="../../static/img/contents_focus.svg" alt="">
        </router-link>
      </div>
    </div>
    <div class="search">
      <div>
        <router-link to="/search">
          <img src="../../static/img/search_focus.svg" alt="">
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  name: 'searchBar',
  data () {
    return {
      isActive: false,
      msg: 'test'
    }
  },
  methods: {
    path: function (url) {
      console.log(url)
      this.$router.push(url)
    },
    searchBraRouterActive: function () {
    },
    changeBgimg: function (e) {
    }
  }
}
</script>
<style scoped>
#searchBar{
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  height:50px;
  width: 100%;
  background-color: rgb(134, 214, 194);
  font-size: 0px;
  color: #fff;
  z-index: 10;
}
.menu{
  height: 25px;
  width: 60px;
}
.menu div img{
  height: 25px;
  margin-left: 0px;
}
.options{
  height: 100%;
  width: 50%;
  display: flex;
  justify-content:space-around;
  align-items: center;
}
.options div img {
  height: 25px;
}
.search{
  width: 25px;
  height: 50px;
  margin-right: 20px;
  display: flex;
  align-items: center;
}
.search div img{
  width: 25px;
}
</style>
