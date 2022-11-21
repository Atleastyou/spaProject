import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _import = filePath => () => import('./views/' + filePath + '.vue')

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    // 首页
    {
      path: '/',
      name: 'index',
      component: _import('index')
    },
    // 关于霍普
    {
      path: '/about/',
      name: 'about',
      component: _import('about/index'),
    },
    {
      path: '/about/introduce/',
      name: 'introduce',
      component: _import('about/introduce')
    },
    {
      path: '/about/team/',
      name: 'team',
      component: _import('about/team')
    },
    {
      path: '/about/honor/',
      name: 'honor',
      component: _import('about/honor')
    },
    {
      path: '/about/partner/',
      name: 'partner',
      component: _import('about/partner')
    },
    {
      path: '/cases',
      name: 'cases',
      component: _import('cases/index')
    },
    {
      path: '/cases/detail',
      name: 'caseDetail',
      component: _import('cases/detail')
    },
    {
      path: '/cases/area/:id?',
      name: 'caseAreaList',
      component: _import('cases/areaList')
    },
    {
      path: '/information/',
      name: 'information',
      component: _import('information/index')
    },
    {
      path: '/information/detail',
      name: 'informationDetail',
      component: _import('information/detail')
    },
    // {
    //   path: '/join',
    //   name: 'join',
    //   component: _import('join/index')
    // },
    {
      path: '/contact',
      name: 'contact',
      component: _import('contact/index'),
      redirect: { name: 'contactWe' },
      children: [
        {
          path: 'we/',
          name: 'contactWe',
          component: _import('contact/contactWe')
        },
        {
          path: 'join/',
          name: 'join',
          component: _import('contact/join')
        }
      ]
    }
    
  ],
  scrollBehavior (to, from, saveTop) {
    if (saveTop) {
      return saveTop
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
