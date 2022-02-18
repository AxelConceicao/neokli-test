import Vue from 'vue'
import VueRouter from 'vue-router'
import Page from '@/views/Page.vue'
import Dashboard from '@/views/Dashboard.vue'
import EssaisCliniques from '@/views/EssaisCliniques.vue'
import UnavailablePage from '@/views/UnavailablePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: Page,
    children: [
      {
        path: '/',
        name: 'Tableau de bord',
        component: Dashboard,
      },
      {
        path: 'essais-cliniques',
        name: 'Essais cliniques',
        component: EssaisCliniques,
      },
      {
        path: 'element-A',
        name: 'Element A',
        component: UnavailablePage,
      },
      {
        path: 'element-B',
        name: 'Element B',
        component: UnavailablePage,
      },
      {
        path: 'element-C',
        name: 'Element C',
        component: UnavailablePage,
      },
      {
        path: 'element-D',
        name: 'Element D',
        component: UnavailablePage,
      },
      {
        path: 'element-E',
        name: 'Element E',
        component: UnavailablePage,
      },
      {
        path: 'settings',
        name: 'Paramètres',
        component: UnavailablePage,
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || 'Klineo'
  })
})

export default router
