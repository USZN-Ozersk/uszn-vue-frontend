import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'mainPage',
    component: () => import('../views/mainPage.vue')
  },
  {
    path: '/page/:id',
    name: 'page',
    component: () => import('../views/sitePage.vue'),
    props: true
  },
  {
    path: '/news/:id',
    name: 'news',
    component: () => import('../views/newsPage.vue'),
    props: true
  },
  {
    path: '/news/page/:id',
    name: 'listNews',
    component: () => import('../views/listNews.vue'),
    props: true
  },
  {
    path: '/admin',
    name: 'pageAdmin',
    component: () => import('../views/pageAdmin.vue'),
    props: true
  },
  {
    path: '/officials',
    name: 'officials',
    component: () => import('../views/customPages/officials.vue'),
  },
  {
    path: '/familychilds',
    name: 'familychilds',
    component: () => import('../views/customPages/familychilds.vue'),
  },
  {
    path: '/victory75years',
    name: 'victory75years',
    component: () => import('../views/customPages/victory75years.vue'),
  },
  {
    path: '/anniversary2020',
    name: 'anniversary2020',
    component: () => import('../views/customPages/anniversary2020'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
