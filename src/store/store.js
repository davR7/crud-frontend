import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        users: [],
        user: {},
        params: {}
    },
    getters: {
        users(state){
            return state.users
        },
        user(state){
            return state.user
        }
    },
    mutations: {
        updateCrud(state, payload){
            state.users = payload
        },
        updateUser(state, payload){
            state.user = payload
        },
        updateParams(state, payload){
            state.params = payload
        },
        changeUser(state, payload){
            state.user = payload
        },
        cleanUser(state){
            state.user = {
                name: '',
                email: '',
                phone: ''
            }
        }
    },
    actions: {
        getUsers({commit}, payload){
            commit('updateParams', payload)
            Vue.prototype.$http(`/users?limit=${payload.limit}
                &page=${payload.page}`).then((res)=> {
                commit('updateCrud', res.data)
            })
        }
    }
})