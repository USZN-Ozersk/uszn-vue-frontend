import axios from 'axios'
export default {
    state: {
        currentPage: '',
    },
    getters: {
        getOnePage: state => {return state.currentPage}, // Геттер содержимого страницы
    },
    mutations: {
        setCurrentPage: (state, payload) => {state.currentPage = payload}, // Мутация состояния содержимого страницы
    },
    actions: {
        loadOnePage: (context, id) => {                                             // Действие для загрузки и мутации содержимого страницы
            axios
              .get('https://usznozersk.ru:81/api/v1/page/'+id)
              .then(response =>{
                context.commit('setCurrentPage', response.data)
              })
              .catch(error => {
                context.commit('setError', error)
              })
        },
    }
}