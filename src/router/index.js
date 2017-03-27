import Vue from 'vue'
import mHeader from'@/components/mHeader'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mHeader',
      component: mHeader
    }
  ]
})
