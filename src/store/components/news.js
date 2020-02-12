import axios from 'axios'
export default {
    state: {
        firstNews: [], //Массив элементов новостей для главной страницы
        oneNews: '', 
    },
    getters: {
        getFirstNews: state => {return state.firstNews}, // Геттер новостей
        getOneNews: state => {return state.oneNews},
    },
    mutations: {
        setFirstNews: (state, payload) => {state.firstNews = payload}, // Мутация объектов новостей
        setOneNews: (state, payload) => {state.oneNews = payload},
    },
    actions: {
        loadFirstNews: (context) => {                                                 // Действие для загрузки и мутации массива элементов новостей главной страницы
            axios
              .get('http://192.168.141.150:8080/api/v1/news/first/5')
              .then(response => {
                context.commit('setFirstNews', response.data)
              })
              .catch(error => {
                context.commit('setError', error)
              })
          },
          loadOneNews: (context, id) => {                                   // Действие для загрузки и мутации единичной новости
            axios
              .get('http://127.0.0.1:8080/api/v1/news/single/'+id)
              .then(response => {
                context.commit('setOneNews', response.data)
              })
              .catch(error => {
                context.commit('setError', error)
              })
          },
    }
}