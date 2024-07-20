<template>
  <v-app id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </v-app>
</template>

<script>
import NavBar from './components/navigation/navigation.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style scoped>
#app {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'poppins';
  background-color: #151515;
}

</style>
