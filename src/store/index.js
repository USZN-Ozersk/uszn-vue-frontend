import Vue from 'vue'
import Vuex from 'vuex'
import drawer from './components/drawer'
import news from './components/news'
import menu from './components/menu'
import pages from './components/pages'
import vision from './components/vision'
import errors from './components/error'

Vue.use(Vuex)

export default new Vuex.Store({
  path = "http://127.0.0.1:8080/",
  modules: {
    drawer,
    news,
    menu,
    pages,
    vision,
    errors
  }
})
