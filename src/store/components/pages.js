import axios from 'axios'

const path = "https://usznozersk.ru:81/api/v1/"

export default {
    state: {
        currentPage: '',
        allPages: ['']
    },
    getters: {
        getOnePage: state => {return state.currentPage}, // Геттер содержимого страницы
        getAllPages: state => {return state.allPages}
    },
    mutations: {
        setCurrentPage: (state, payload) => {state.currentPage = payload}, // Мутация состояния содержимого страницы
        setAllPages: (state, payload) => {state.allPages = payload}
    },
    actions: {
        async loadOnePage(context, id) {                                             // Действие для загрузки и мутации содержимого страницы
            await axios
              .get(path+'page/'+id)
              .then(response =>{
                context.commit('setCurrentPage', response.data)
              })
              .catch(error => {
                context.commit('setError', error)
              })
        },
        loadAllPages: (context) => {
            axios
            .get(path+'private/pages', {
                headers: {
                    "Token": context.getters.getJwtToken
                }   
            })
            .then(response => {
                context.commit('setAllPages', response.data)
            })
        },
        insertPage: (context, pagedata) => {
            axios({
            method: 'POST',
            url: path+'private/page',
            data: {
                name: pagedata.page_name,
                text: pagedata.page_text,
                menu: parseInt(pagedata.page_menu, 10)
            },
            headers: {
                "Token": context.getters.getJwtToken
            }
            })
            .then(response => {
              if (response.data.result == "ok") {
                context.dispatch('loadAllPages')
              }
            })
            .catch(error => {
              context.commit('setError', error)
            })
        },
        deletePage: (context, pagedata) => {
            axios({
              method: "DELETE",
              url: path+'private/page',
              data: {
                id: pagedata.page_id
              },
              headers: {
                "Token": context.getters.getJwtToken
              }
            })
            .then(response => {
              if(response.data.result == "ok") {
                context.dispatch('loadAllPages')
              }
            })
            .catch(error => {
              context.commit('setError', error)
            })
          },
        updatePage: (context, pagedata) => {
            axios({
              method: "PUT",
              url: path+'private/page',
              data: {
                id: parseInt(pagedata.page_id, 10),
                name: pagedata.page_name,
                text: pagedata.page_text,
                menu: parseInt(pagedata.page_menu, 10)
              },
            headers: {
              "Token": context.getters.getJwtToken
            }
            })
            .then(response => {
              if(response.data.result == "ok") {
                context.dispatch('loadAllPages')
              }
            })
            .catch(error => {
              context.commit('setError', error)
            })
          }
    }
}