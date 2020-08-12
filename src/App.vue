<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="app_img">
      <div>

      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3306/'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted () {
    axios({
      method: 'GET',
      url: 'api/user',
      params: {},
      dataType: 'json'
    }).then((res) => {
      console.log(res)
    })
  }
}
</script>

<style lang="scss">
@import './styles/mixin.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app_img {
  width: 100px;
  height: 200px;
  border: 1px solid red;
  div {
    @include multi-ellipsis();
  }
}
</style>
