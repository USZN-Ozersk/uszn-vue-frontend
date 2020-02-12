import axios from 'axios'
export default {
    state: {
        fullMenu: [], // Массив элементов основного меню
    },
    getters: {
        getMainMenu: state => {return state.fullMenu.filter(menu => menu.menu_parent == 0)}, // Геттер пунктов основного меню
        getSubMenu: state => id => {return state.fullMenu.filter(menu => menu.menu_parent == id);}, //Геттер пунктов подменю
    },
    mutations: {
        setFullMenu: (state, payload) => {state.fullMenu = payload}, // Мутация пунктов основного меню
    },
    actions: {
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
    }
}