import Vue from 'vue'
import Router from 'vue-router'
import search from '@/components/search'
import index from '@/components/index'
import houseInfo from '@/components/houseInfo'
import mine from '@/components/mine'
import mineCollect from '@/components/mineCollect'
import houseManage from '@/components/houseManage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
    	path: '/houseInfo/:houseid',
    	name:'houseInfo',
    	component: houseInfo
    },
    {
    	path: '/mine',
    	name:'mine',
    	component: mine
    },
    {
    	path: '/mine/collect',
    	name:'mineCollect',
    	component: mineCollect
    },
    {
    	path: '/mine/houseManage',
    	name:'houseManage',
    	component: houseManage
    }
  ]
})
