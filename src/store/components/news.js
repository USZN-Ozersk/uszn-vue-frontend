import axios from 'axios'
export default {
    state: {
        firstNews: [''], //Массив элементов новостей для главной страницы
        oneNews: '', 
        newsPage: [''],
        newsPageCount: 0,
    },
    getters: {
        getFirstNews: state => {return state.firstNews}, // Геттер новостей
        getOneNews: state => {return state.oneNews}, //
        getNewsPage: state => {return state.newsPage}, //
        getNewsPageCount: state => {return state.newsPageCount}, //
    },
    mutations: {
        setFirstNews: (state, payload) => {state.firstNews = payload}, // Мутация объектов новостей
        setOneNews: (state, payload) => {state.oneNews = payload},
        setNewsPage: (state, payload) => {state.newsPage = payload},
        setNewsPageCount: (state, payload) => {state.newsPageCount = payload},
    },
    actions: {
          loadFirstNews: (context) => {                                                 // Действие для загрузки и мутации массива элементов новостей главной страницы
            axios
              .get('https://usznozersk.ru:81/api/v1/news/first/5')
              .then(response => {
                context.commit('setFirstNews', response.data)
              })
              .catch(error => {
                context.commit('setError', error)
              })
          },
          loadOneNews: (context, id) => {                                   // Действие для загрузки и мутации единичной новости
            axios
              .get('https://usznozersk.ru:81/api/v1/news/single/'+id)
              .then(response => {
                context.commit('setOneNews', response.data)
              })
              .catch(error => {
                context.commit('setError', error)
              })
          },
          loadNewsPage: (context, id) => {
            axios
              .get('https://usznozersk.ru:81/api/v1/news/page/'+(id-1))
              .then(response => {
                context.commit('setNewsPage', response.data)
              })
              .catch(error => {
                context.commit('setError', error)
              })
          },
          loadNewsCount: (context) => {
            axios
              .get('https://usznozersk.ru:81/api/v1/news/count/all')
              .then(response => {
                context.commit('setNewsPageCount', Math.ceil(response.data.count/10))
              })
              .catch(error => {
                context.commit('setError', error)
              })
          }
    }
}