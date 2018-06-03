<template>
  <div id="hello">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Hello World'
    }
  }
}
</script>

<style scoped>
#hello {
  font-size: 100px;
  color: red;
}
</style>