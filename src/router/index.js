import Vue from 'vue'
import Router from 'vue-router'

import Auth from '@/store/modules/auth'

import Root from '@/components/Root'
import Login from '@/components/Login'
import Member from '@/components/Member'
import ProductList from '@/components/Product/List'
import ProductDetail from '@/components/Product/Detail'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      component: Root,
      redirect: '/member/list',

      children: [
        {
          path: 'login',
          name: 'login',
          component: Login
        },
        {
          path: 'member',
          name: 'member',
          component: Member,
          meta: {
            requiresAuth: true
          },

          children: [
            {
              path: 'product/list',
              name: 'product/list',
              component: ProductList
            },
            {
              path: 'product/detail/:id',
              name: 'product/detail',
              component: ProductDetail
            }
          ]
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !Auth.state.loggedIn) {
    next({
      path: '/login'
    })
  } else {
    next()
  }
})

export default router
