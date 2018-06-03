<template>
  <div id="discover">
    {{msg}}
  </div>
</template>
<script>
export default {
  name: 'discover',
  data: function () {
    return {
      msg: 'Radio Page'
    }
  },
  methods: {
  },
  mounted () {
    console.log('loaded')
  }
}
</script>
<style scoped>

</style>
