import Vue from 'vue'
import mHeader from'@/components/mHeader'
import mMain from '@/components/mMain'
import mGuide from '@/components/mGuide'
import Router from 'vue-router'
Vue.use(Router)

import test from '@/components/test'
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
    },
    {
      path:'/test',
      name:'测试',
      component:test
    }
  ]
})
