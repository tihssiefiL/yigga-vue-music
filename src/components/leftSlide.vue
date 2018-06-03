<template>
  <div id="leftSlide">
      <div class="leftHead">
          <div class="icon">
            
          </div>
          <div class="info">
            <div class="lvl"></div>
            <div class="checkIn"></div>
          </div>
      </div>

      <div class="leftBody">
        <ul>
          <li v-for="item in items">
            <span>{{item.value}}</span>
          </li>
        </ul>
      </div>
      <div class="leftFooter">

      </div>
  </div>
</template>
<script>
export default{
  name: 'leftSlide',
  data () {
    return {
      items: [
        {
          value: '发现',
          active: 'true'},
        {
          value: '我的',
          active: 'false'},
        {
          value: '电台',
          active: 'false'
        }
      ]
    }
  }
}
</script>
<style scoped>
#leftSlide ul li {
  list-style: none;
}
#leftSlide{
  z-index: 2;
  height: 100px;
  width: 400px;
  background-color: #000;
  color: #fff;
  position: absolute;
  left: 0px;
  top: 0px;
}
</style>
