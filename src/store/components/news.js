import axios from 'axios'

const path = "https://usznozersk.ru:81/api/v1/"

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
              .get(path+'news/first/5')
              .then(response => {
                context.commit('setFirstNews', response.data)
              })
              .catch(error => {
                context.commit('setError', error)
              })
          },
          async loadOneNews(context, id) {                                   // Действие для загрузки и мутации единичной новости
            await axios
              .get(path+'news/single/'+id)
              .then(response => {
                context.commit('setOneNews', response.data)
              })
              .catch(error => {
                context.commit('setError', error)
              })
          },
          async loadNewsPage(context, id) {
            await axios
              .get(path+'news/page/'+(id-1))
              .then(response => {
                context.commit('setNewsPage', response.data)
              })
              .catch(error => {
                context.commit('setError', error)
              })
          },
          loadNewsCount: (context) => {
            axios
              .get(path+'news/count/all')
              .then(response => {
                context.commit('setNewsPageCount', Math.ceil(response.data.count/10))
              })
              .catch(error => {
                context.commit('setError', error)
              })
          },
          insertNews: (context, newsdata) => {
            axios({
              method: 'POST',
              url: path+'private/news',
              data: {
                name: newsdata.news_name,
                text: newsdata.news_text,
                img: newsdata.news_img
              },
              headers: {
                "Token": context.getters.getJwtToken
              }
            })
            .then(response => {
              if (response.data.result == "ok") {
                context.dispatch('loadNewsPage', 1)
              }
            })
            .catch(error => {
              context.commit('setError', error)
            })
          },
          deleteNews: (context, newsdata) => {
            axios({
              method: "DELETE",
              url: path+'private/news',
              data: {
                id: parseInt(newsdata.news_id, 10)
              },
              headers: {
                "Token": context.getters.getJwtToken
              }
            })
            .then(response => {
              if(response.data.result == "ok") {
                context.dispatch('loadNewsPage', 1)
              }
            })
            .catch(error => {
              context.commit('setError', error)
            })
          },
          updateNews: (context, newsdata) => {
            axios({
              method: "PUT",
              url: path+'private/news',
              data: {
                id: parseInt(newsdata.news_id, 10),
                name: newsdata.news_name,
                text: newsdata.news_text,
                img: newsdata.news_img
              },
              headers: {
              "Token": context.getters.getJwtToken
              }
            })
            .then(response => {
              if(response.data.result == "ok") {
                context.dispatch('loadNewsPage', 1)
              }
            })
            .catch(error => {
              context.commit('setError', error)
            })
          }
    }
}