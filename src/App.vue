<template>
  <v-app id="app">
    <div class="loader-box" v-if="isLoading">
      <span class="loader"></span>
    </div>
    <div v-else>
      <nav-bar></nav-bar>
      <router-view></router-view> <!-- Show router view only when loading is complete -->
    </div>
  </v-app>
</template>

<script>
import NavBar from './components/navigation/navigation.vue';

export default {
  name: 'App',
  components: {
    NavBar
  },
  data() {
    return {
      isLoading: true, // Track loading state
    };
  },
  mounted() {
    window.addEventListener('load', () => {
      this.isLoading = false
    })
  },
  beforeDestroy() {
    window.removeEventListener('load', () => {
      this.isLoading = false
    })
  }
}
</script>

<style scoped>
@font-face {
  font-family: "Poppin";
  src: url(assets/Fonts/Poppins-Regular.ttf);
}
#app {
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppin';
  background-color: #151515;
}

.loader-box {
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
}

.loader {
  box-sizing: border-box;
  display: inline-block;
  width: 50px;
  height: 80px;
  border-top: 5px solid #fff;
  border-bottom: 5px solid #fff;
  position: relative;
  background: linear-gradient(#ff4b60 30px, transparent 0) no-repeat;
  background-size: 2px 40px;
  background-position: 50% 0px;
  animation: spinx 5s linear infinite;
}
.loader:before, .loader:after {
  content: "";
  width: 40px;
  left: 50%;
  height: 35px;
  position: absolute;
  top: 0;
  transform: translatex(-50%);
  background: rgba(255, 255, 255, 0.4);
  border-radius: 0 0 20px 20px;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: 0 0px;
  animation: lqt 5s linear infinite;
}
.loader:after {
  top: auto;
  bottom: 0;
  border-radius: 20px 20px 0 0;
  animation: lqb 5s linear infinite;
}
@keyframes lqt {
  0%, 100% {
    background-image: linear-gradient(#ff4b60 40px, transparent 0);
    background-position: 0% 0px;
  }
  50% {
    background-image: linear-gradient(#ff4b60 40px, transparent 0);
    background-position: 0% 40px;
  }
  50.1% {
    background-image: linear-gradient(#ff4b60 40px, transparent 0);
    background-position: 0% -40px;
  }
}
@keyframes lqb {
  0% {
    background-image: linear-gradient(#ff4b60 40px, transparent 0);
    background-position: 0 40px;
  }
  100% {
    background-image: linear-gradient(#ff4b60 40px, transparent 0);
    background-position: 0 -40px;
  }
}
@keyframes spinx {
  0%, 49% {
    transform: rotate(0deg);
    background-position: 50% 36px;
  }
  51%, 98% {
    transform: rotate(180deg);
    background-position: 50% 4px;
  }
  100% {
    transform: rotate(360deg);
    background-position: 50% 36px;
  }
}
</style>