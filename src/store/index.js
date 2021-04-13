import { createStore } from 'vuex'
import { Login } from '@/api/user'

export default createStore({
    //vuex的基本数据，用来存储变量
    state: {
        token: ''
    },

    //提交更新数据的方法，必须是同步的
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        }
    },

    //包裹mutations，使之可以异步
    actions: {
        LoginResult({ commit }, userInfo) {
            return new Promise((resolve, reject) => {
                Login(userInfo).then(response => {
                    const { code, token } = response.data
                    if (code == 200) {
                        localStorage.setItem('token', token)
                        commit("SET_TOKEN", token)
                    }
                    resolve(response.data)
                }).catch(error => {
                    reject(error)
                })
            })
        }
    },

    //从基本数据派生的数据，相当于state的计算属性
    getters: {

    },

    //模块化vuex，可以让每一个模块拥有自己的state、mutation、action、getters,使得结构非常清晰，方便管理。
    modules: {

    }
})