import axios from 'axios'

const path = "http://localhost:8080/api/v1/"
axios.defaults.headers['Access-Control-Allow-Origin'] = '*'

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
        authorize: (context, login, password) => {
            axios
                .post(path+'auth',{ login: login, password: password})
            //({
            //    method: 'POST',
            //    url: path+'auth', 
            //    data:{
            //            login: login,
            //            password: password,
            //        }
            //    })
                .then(response => {
                    context.commit('setReqData', response.data)
                })
        }
        
    }
}