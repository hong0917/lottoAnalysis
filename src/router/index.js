import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/views/Home')
    },
    {
      path: '/StatByNum',
      name: 'StatByNum',
      component: () => import('@/components/views/StatByNum')
    }
  ]
})
