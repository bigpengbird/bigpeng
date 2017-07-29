import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home'
import Search from '@/page/search'
import Ultrahigh from '@/page/ultrahigh'
import Store from '@/page/store'
import Me from '@/page/me'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/ultrahigh/:id',
      component: Ultrahigh
    },
    {
    	path: '/store',
      component: Store
    },
    {
    	path: '/me',
      component: Me
    }
  ]
})
