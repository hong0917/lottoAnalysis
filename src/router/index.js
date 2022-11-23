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
      path: '/nomalRecNum',
      name: 'NomalRecNum',
      component: () => import('@/components/views/NomalRecNum')
    },
    {
      path: '/winner',
      name: 'Winner',
      component: () => import('@/components/views/Winner')
    },
    {
      path: '/aiRecNum',
      name: 'AIRecNum',
      component: () => import('@/components/views/AIRecNum')
    }
  ]
})
