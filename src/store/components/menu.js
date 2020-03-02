import axios from 'axios'

const path = "http://localhost:8080/api/v1/"

export default {
    state: {
        fullMenu: [''], // Массив элементов основного меню
    },
    getters: {
        getMainMenu: state => {return state.fullMenu.filter(menu => menu.menu_parent == 0)}, // Геттер пунктов основного меню
        getSubMenu: state => id => {return state.fullMenu.filter(menu => menu.menu_parent == id);}, //Геттер пунктов подменю
        getTreeMenu: state => {
            var menu = state.fullMenu
            var result = []
            
            for (var element in menu) {
                if (menu[element].menu_parent == 0) {
                    result.push(setTree(menu[element]))
                }
            }

            function setTree(element) {
               var a = {id: element.menu_id, name: element.menu_item, parent: element.menu_parent, children: []}
                for (var item in menu) {
                    if (menu[item].menu_parent == element.menu_id) {
                       a.children.push(setTree(menu[item]))    
                    }
                }
                return a
            }

           return result
        }
    },
    mutations: {
        setFullMenu: (state, payload) => {state.fullMenu = payload}, // Мутация пунктов основного меню
    },
    actions: {
        loadMainMenu: (context) => {                                        // Действие для загрузки и мутации массива элементов основного меню
            axios                                                             // Запрос к АПИ 
              .get(path+'menu')
              .then(response => {
                context.commit('setFullMenu', response.data)
              })
              .catch(error => {
                context.commit('setError', error)
              })
          },
        insertMenuItem: (context, menudata) => {
            axios({
                method: 'POST',
                url: path+'private/menu',
                data: {
                    menuitem: menudata.menu_item,
                    menuparent: menudata.menu_parent
                  },
                  headers: {
                    "Token": context.getters.getJwtToken
                  }
              })
              .then(response => {
                  if (response.data.result == "ok") {
                    context.dispatch('loadMainMenu')
                  }
                  
              })
              .catch(error => {
                  context.commit('setError', error)
              })
        },
        deleteMenuItem: (context, menudata) => {
            axios({
                method: 'DELETE',
                url: path+'private/menu',
                data: {
                    id: menudata.menu_id
                },
                headers: {
                    "Token": context.getters.getJwtToken
                }
            })
            .then(response => {
                if (response.data.result == "ok") {
                    context.dispatch('loadMainMenu')
                }
            })
            .catch(error => {
                context.commit('setError', error)
            })
        },
        updateMenuItem: (context, menudata) => {
            axios({
                method: 'PUT',
                url: path+'private/menu',
                data: {
                    id: menudata.menu_id,
                    menuitem: menudata.menu_item,
                    menuparent: menudata.menu_parent
                },
                headers: {
                    "Token": context.getters.getJwtToken
                }
            })
            .then(response => {
                if (response.data.result == "ok") {
                    context.dispatch('loadMainMenu')
                }
            })
            .catch(error => {
                context.commit('setError', error)
            })
        }
    }
}