import Vue from 'vue'
import mHeader from'@/components/mHeader'
import mMain from '@/components/mMain'
import mGuide from '@/components/mGuide'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mMain',
      component: mMain
    },
    {
    	path:'/guide',
    	name:'英灵图鉴',
    	component:mGuide
    }
  ]
})
