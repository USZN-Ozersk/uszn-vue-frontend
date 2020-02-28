import axios from 'axios'

const path = "http://127.0.0.1:8080/api/v1/"

export default {
    state: {
        isAuth: false,
        jwtToken: '',
        authError: ''
    },
    getters: {
        getAuth: state => {return state.isAuth},
        getJwtToken: state => {return state.jwtToken},
        getAuthError: state => {return state.authError}
    },
    mutations: {
        setAuth: (state, payload) => {state.isAuth = payload},
        setJwtToken: (state, payload) => {state.jwtToken = payload},
        setAuthError: (state, payload) => {state.authError = payload}
    },
    actions: {
        authorize(context, userdata) {
            axios({
                method: 'POST',
                url: path+'auth', 
                data:{
                    login: userdata.login,
                    password: userdata.password
                },
                headers: {
                    "Content-Type": "text/plain"
                }
                })
                .then(response => {
                    if (response.data.jwt != '') {
                        context.commit('setAuth', true)
                        context.commit('setJwtToken', response.data.jwt)
                    }
                })
                .catch(error => {
                    context.commit('setAuthError', error.response.data.error)
                })
        },

        logout: (context) => {
            context.commit('setAuth', false)
            context.commit('setJwtToken', '')
        }
        
    }
}