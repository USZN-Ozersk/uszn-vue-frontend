import Vue from 'vue'
import Vuex from 'vuex'
import dataMenu from '@/assets/menu.json' // Заглушка АПИ меню
import dataNews from '@/assets/news.json' // Заглушка АПИ новостей

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Вкл\Выкл режим адаптированный для слабовидящих
    isBadVision: false,
    //Параметры режима для слабовидящих
    bvParams: {
      bvFont: "medium", //Размер шрифта small, medium, large
      bvBackground: "blue-grey lighten-5", //Цвет фона white, black, blue accent-1, blue-grey lighten-5
      bvText: "black--text", //Цвет текста black--text, white--text
      bvColor: "black", //Цвет кнопок и пр. black, white
      bvImages: true //Вкл\Выкл изображения
      },
    fullMenu: [], // Массив элементов основного меню
    drawer: false, // Состояние боковой панели навигации
    allNews: [], //Массив элементов новостей
  },
  getters: {
    getBadVision: state => {return state.isBadVision}, //Геттер режима для слабовидящих
    getBvParams: state => {return state.bvParams}, // Геттер параметров режима для слабовидящих
    getMainMenu: state => {return state.fullMenu.filter(menu => menu.parent_id == null)}, // Геттер пунктов основного меню
    getSubMenu: state => id => {return state.fullMenu.filter(menu => menu.parent_id == id);}, //Геттер пунктов подменю
    getDrawer: state => {return state.drawer}, // Геттер состояния боковой панели навигации
    getAllNews: state => {return state.allNews}, // Геттер новостей
  },
  mutations: {
    setBadVision: (state, payload) => {state.isBadVision = payload}, // Мутация режима для слабовидящих
    setBvParams: (state, payload) => {state.bvParams[payload.param] = payload.value}, // Мутация параметров режима для слабовидящих
    setFullMenu: (state, payload) => {state.fullMenu = payload}, // Мутация пунктов основного меню
    setDrawer: (state, payload) => {state.drawer = payload}, // Мутация состояния пуктов бокового меню
    setAllNews: (state, payload) => {state.allNews = payload}, // Мутация объектов новостей
  },
  actions: {
    setBadVision: (context, payload) => {context.commit('setBadVision', payload)}, // Действие для мутации режима для слабовидящих
    setBvParams: (context, payload) => {context.commit('setBvParams', payload)}, // Действие для мутации параметров режима для слабовидящих
    loadMainMenu: (context) => {                                        // Действие для загрузки и мутации массива элементов основного меню
      return new Promise((resolve) => {                                 // !Тут будет axios ajax запрос к API
        context.commit('setFullMenu', dataMenu)
        resolve()
      }, 1000)
    },
    loadAllNews: (context) => {                                                 // Действие для загрузки и мутации массива элементов новостей
      return new Promise((resolve) => {                                 // !Тут будет axios ajax запрос к API
        context.commit('setAllNews', dataNews)
        resolve()
      }, 1000)
    },
    setDrawer: (context, payload) => {context.commit('setDrawer', payload)} // Действие для мутации состояния боковой панели
  },
  modules: {
  }
})
