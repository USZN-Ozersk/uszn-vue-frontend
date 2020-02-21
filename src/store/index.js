import Vue from 'vue'
import Vuex from 'vuex'
import drawer from './components/drawer'
import news from './components/news'
import menu from './components/menu'
import pages from './components/pages'
import vision from './components/vision'
import errors from './components/error'
import auth from './components/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    drawer,
    news,
    menu,
    pages,
    vision,
    errors,
    auth
  }
})
