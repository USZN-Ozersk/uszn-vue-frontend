export default {
    state: {
        drawer: false // Состояние боковой панели навигации
    },
    getters: {
        getDrawer: state => {return state.drawer} // Геттер состояния боковой панели навигации
    },
    mutations: {
        setDrawer: (state, payload) => {state.drawer = payload} // Мутация состояния пуктов бокового меню
    },
    actions: {
        setDrawer: (context, payload) => {context.commit('setDrawer', payload)} // Действие для мутации состояния боковой панели
    }
}