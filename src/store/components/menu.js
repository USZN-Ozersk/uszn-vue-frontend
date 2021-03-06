import axios from 'axios'

import settings from '../../settings.json'

const path = settings.url

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
               var a = {id: element.menu_id, name: element.menu_item, parent: element.menu_parent, custom: element.custom_link, custom_value: element.custom_link_value, children: []}
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
                    menuparent: parseInt(menudata.menu_parent, 10),
                    customlink: menudata.custom_link,
                    customlinkvalue: menudata.custom_link_value
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
                    id: parseInt(menudata.menu_id, 10) 
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
                    id: parseInt(menudata.menu_id, 10),
                    menuitem: menudata.menu_item,
                    menuparent: parseInt(menudata.menu_parent, 10),
                    customlink: menudata.custom_link,
                    customlinkvalue: menudata.custom_link_value
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