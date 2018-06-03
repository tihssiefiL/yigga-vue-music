<template>
  <div v-if="1" id="titles">
    <div id="tabs">
        <ul>
        <li @click="move('/music/discover')">发现</li>
        <li @click="move('/music/mine')">我的</li>
        <li @click="move('/music/radio')">电台</li>
      </ul>
    </div>
    <div id="pointers">
      <div id="pointer" :class="index"></div>
    </div>
  </div>
</template>
<script>
export default{
  name: 'titles',
  data: function () {
    return {
      index: 'zero'
    }
  },
  watch: {
  },
  methods: {
    move: function (url) {
      if (url === '/music/discover') {
        this.index = 'zero'
        this.$router.push({path: url})
      } else if (url === '/music/mine') {
        this.index = 'one'
        this.$router.push({path: url})
      } else if (url === '/music/radio') {
        this.index = 'two'
        this.$router.push({path: url})
      }
    }
  }
}
</script>
<style scoped>
*{
  background-color:#f1f5f6;
}
#titles{
  display: flex;
  flex-direction: column;
  height: 32px;
  width: 100%;
  margin: 0px;
  padding: 0px;
  background-color:#fff;
  text-decoration: none;
  list-style: none;
  padding-top: 50px;
}
#tabs ul{
  display: flex;
  list-style: none;
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 30px;
}
#tabs ul li{
  width: 33.333333%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
}
#pointers{
  width: 100%;
  height: 2px;
  align-self: center;
}
#pointer{
  width: 33.333333%;
  height: 2px;
  background-color: red;
  border-radius: 20px;
  transition: all 0.3s
}
.zero{
  transform: translate3d(0,0,0)
}
.one{
  transform: translate3d(100%,0,0)
}
.two{
  transform: translate3d(200%,0,0)
}
</style>
