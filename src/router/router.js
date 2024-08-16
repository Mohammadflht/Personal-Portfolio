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
            children: [
                { path: 'about', name: 'About', component: MainPage },
                { path: 'education', name: 'Education', component: MainPage },
                { path: 'experience', name: 'Experience', component: MainPage },
                { path: 'projects', name: 'Projects', component: MainPage },
              ]
        }
    ],
    // scrollBehavior(to, from, savedPosition) {
    //     if (to.hash) {
    //       return { selector: to.hash };
    //     }
    //     return { x: 0, y: 0 };
    //   }
})