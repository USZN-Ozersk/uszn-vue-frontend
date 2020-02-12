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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
