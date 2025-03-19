import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '@/pages/index.vue'
import SignIn from '@/pages/signIn.vue'
import Dark from '@/pages/dark.vue'
import CustomUi from '@/pages/customUi.vue'
import Permission from '@/pages/permission.vue'
import NestedDialog from '@/pages/nestedDialog.vue'
import RednerForm from '@/pages/rednerForm.vue'
import WalkIndex from '@/pages/walk/index.vue'
import WalkRecord from '@/pages/walk/record.vue'
import CountUp from '@/pages/countup.vue'
import plusTable from '@/pages/plusTable.vue'
import DeepCss from '@/pages/deepCss.vue'
import NestedData from '@/pages/nestedData.vue'
import LineLogin from '@/pages/lineLogin.vue'
import Oauth from '@/pages/oauth.vue'

const defaultLayout = 'defaultLayout'

const router = createRouter({
  history: import.meta.env.DEV ? createWebHashHistory() : createWebHistory(import.meta.env.VITE_BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
      }
    } else {
      return { top: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        layout: defaultLayout
      }
    },
    {
      path: '/lineLogin',
      name: 'lineLogin',
      component: LineLogin,
      meta: {
        layout: defaultLayout
      }
    },
    {
      path: '/oauth',
      name: 'oauth',
      component: Oauth,
      meta: {
        layout: defaultLayout
      }
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn,
      meta: {
        layout: 'OtherLayout'
      }
    },
    {
      path: '/dark',
      name: 'dark',
      component: Dark,
      meta: {
        layout: defaultLayout
      }
    },
    {
      path: '/customUi',
      name: 'customUi',
      component: CustomUi,
      meta: {
        layout: defaultLayout
      }
    },
    {
      path: '/permission',
      name: 'permission',
      component: Permission,
      meta: {
        layout: defaultLayout
      }
    },
    {
      path: '/nestedDialog',
      name: 'nestedDialog',
      component: NestedDialog,
      meta: {
        layout: defaultLayout
      }
    },
    {
      path: '/renderForm',
      name: 'renderForm',
      component: RednerForm,
      meta: {
        layout: defaultLayout
      }
    },
    {
      path: '/countup',
      name: 'countup',
      component: CountUp,
      meta: {
        layout: defaultLayout
      }
    },
    {
      path: '/walk',
      name: 'walkIndex',
      component: WalkIndex,
      redirect: '/walk/record',
      meta: {
        layout: defaultLayout
      },
      children: [
        {
          path: 'record',
          name: 'walkRecord',
          component: WalkRecord,
          meta: {
            layout: defaultLayout
          },
        }
      ]
    },
    {
      path: '/plusTable',
      name: 'plusTable',
      component: plusTable,
      meta: {
        layout: defaultLayout
      }
    },
    {
      path: '/deepCss',
      name: 'deepCss',
      component: DeepCss,
      meta: {
        layout: defaultLayout
      }
    },
    {
      path: '/nestedData',
      name: 'nestedData',
      component: NestedData,
      meta: {
        layout: defaultLayout
      }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

export default router
