import Vue from 'vue'
import router from './router/router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuetify);

const vuetify = new Vuetify({
  icons: {
    iconfont: "mdi"
  },
  theme: {
    themes: {
      light: {
        primary: '#ffffff',
        secondary: '#151515',
        buttonTextColor: '#ffffff',
        color1: '#FFEA9F',
        color2: '#FFBBC3',
        color3: '#B6FBFF',
        navDrawer: '#808782',
      },
    },
  },
})

new Vue({
  render: h => h(App),
  router,
  vuetify,
}).$mount('#app')
