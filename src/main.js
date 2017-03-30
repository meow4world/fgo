// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Index from './index.vue'
import router from './router'

// import VueRouter from 'vue-router';
// Vue.use(VueRouter);
import Vuex from 'vuex'
Vue.use(Vuex);
import VueResource from 'vue-resource'
Vue.use(VueResource)
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

//引入muse-ui 
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-carbon.css'
Vue.use(MuseUI)

Vue.config.productionTip = false
    //关闭生产模式下给出的提示

/* eslint-disable no-new */
new Vue({
    router,
    template: '<Index/>',
    components: {
        Index
    }
}).$mount('#app')
