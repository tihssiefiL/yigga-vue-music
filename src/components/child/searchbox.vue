<template>
  <div id="searchBox">
    <input class="searchBox" :placeholder="placeholder" v-model="query" type="text" name="searchbox">
  </div>
</template>
<script>
export default {
  props: {
    placeholder: {
      type: 'string',
      default: '搜索歌曲/歌手'
    }
  },
  data () {
    return {
      query: ''
    }
  }
}
</script>
<style scoped>
#searchBox{
  width: 100%;
  height: 30px;
}
.searchBox{
  width: 100%;
  height: 100%;
}
</style>
