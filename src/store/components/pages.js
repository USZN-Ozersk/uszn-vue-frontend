import axios from 'axios'

const path = "http://localhost:8080/api/v1/"

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
                context.commit('setAllPages', response)
            })
        }
    }
}