import Vue from 'vue';
import router from 'vue-router';
import MainPage from '../pages/MainPage.vue'

Vue.use(router);

export default new router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: MainPage,
        }
    ]
})