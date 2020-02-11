import Vue from 'vue'
import Vuex from 'vuex'
//import dataMenu from '@/assets/menu.json' // Заглушка АПИ меню
//import dataNews from '@/assets/news.json' // Заглушка АПИ новостей
import axios from 'axios'

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
    firstNews: [], //Массив элементов новостей для главной страницы
    oneNews: '',
    currentPage: '',
    error: '',
  },
  getters: {
    getBadVision: state => {return state.isBadVision}, //Геттер режима для слабовидящих
    getBvParams: state => {return state.bvParams}, // Геттер параметров режима для слабовидящих
    getMainMenu: state => {return state.fullMenu.filter(menu => menu.menu_parent == 0)}, // Геттер пунктов основного меню
    getSubMenu: state => id => {return state.fullMenu.filter(menu => menu.menu_parent == id);}, //Геттер пунктов подменю
    getDrawer: state => {return state.drawer}, // Геттер состояния боковой панели навигации
    getFirstNews: state => {return state.firstNews}, // Геттер новостей
    getOneNews: state => {return state.oneNews},
    getOnePage: state => {return state.currentPage}, // Геттер содержимого страницы
    getError: state => {return state.error}
  },
  mutations: {
    setBadVision: (state, payload) => {state.isBadVision = payload}, // Мутация режима для слабовидящих
    setBvParams: (state, payload) => {state.bvParams[payload.param] = payload.value}, // Мутация параметров режима для слабовидящих
    setFullMenu: (state, payload) => {state.fullMenu = payload}, // Мутация пунктов основного меню
    setDrawer: (state, payload) => {state.drawer = payload}, // Мутация состояния пуктов бокового меню
    setFirstNews: (state, payload) => {state.firstNews = payload}, // Мутация объектов новостей
    setOneNews: (state, payload) => {state.oneNews = payload},
    setCurrentPage: (state, payload) => {state.currentPage = payload}, // Мутация состояния содержимого страницы
    setError: (state, payload) => {state.error = payload},
  },
  actions: {
    setBadVision: (context, payload) => {context.commit('setBadVision', payload)}, // Действие для мутации режима для слабовидящих
    setBvParams: (context, payload) => {context.commit('setBvParams', payload)}, // Действие для мутации параметров режима для слабовидящих
    loadMainMenu: (context) => {                                        // Действие для загрузки и мутации массива элементов основного меню
      axios                                                             // Запрос к АПИ 
        .get('http://192.168.141.150:8080/api/v1/menu')
        .then(response => {
          context.commit('setFullMenu', response.data)
        })
        .catch(error => {
          context.commit('setError', error)
        })
    },
    loadFirstNews: (context) => {                                                 // Действие для загрузки и мутации массива элементов новостей
      axios
        .get('http://192.168.141.150:8080/api/v1/news/first/5')
        .then(response => {
          context.commit('setFirstNews', response.data)
        })
        .catch(error => {
          context.commit('setError', error)
        })
    },
    loadOneNews: (context, id) => {
      axios
        .get('http://127.0.0.1:8080/api/v1/news/single/'+id)
        .then(response => {
          context.commit('setOneNews', response.data)
        })
        .catch(error => {
          context.commit('setError', error)
        })
    },
    loadOnePage: (context, id) => {                                             // Действие для загрузки и мутации содержимого страницы
      axios
        .get('http://192.168.141.150:8080/api/v1/page/'+id)
        .then(response =>{
          context.commit('setCurrentPage', response.data)
        })
        .catch(error => {
          context.commit('setError', error)
        })
    },
    setDrawer: (context, payload) => {context.commit('setDrawer', payload)}, // Действие для мутации состояния боковой панели
    setError: (context, payload) => {context.commit('setError', payload)},
  },
  modules: {
  }
})
