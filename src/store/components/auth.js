import axios from 'axios'

const path = "http://127.0.0.1:8080/api/v1/"

export default {
    state: {
        isAuth: false,
        reqData: ''
    },
    getters: {
        getAuth: state => {return state.isAuth},
        getReqData: state => {return state.reqData}
    },
    mutations: {
        setAuth: (state, payload) => {state.isAuth = payload},
        setReqData: (state, payload) => {state.reqData = payload},
    },
    actions: {
        authorize: (context, userdata) => {
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
                    context.commit('setReqData', response.data)
                })
        }
        
    }
}