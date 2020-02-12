export default {
    state: {
        error: '' // Ошибка
    },
    getters: {
        getError: state => {return state.error} // Геттер ошибок
    },
    mutations: {
        setError: (state, payload) => {state.error = payload} // Мутация ошибок
    },
    actions: {
        setError: (context, payload) => {context.commit('setError', payload)} // Установка ощибок
    }
}