<template>
    <div id="music">
      <Title></Title>
      <router-view></router-view>
  </div>
</template>
<script>
import Title from '../components/titles.vue'
export default{
  name: 'music',
  data: function () {
    return {

    }
  },
  mounted () {
    this.init()
  },
  components: {
    Title
  },
  methods: {
    init: function () {
      this.$router.push('/music/discover')
    }
  }
}
</script>
<style scoped>

</style>
