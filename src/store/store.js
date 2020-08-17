import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        users: []
    },
    getters: {
        users(state){
            return state.users
        }
    },
    mutations: {
        updateCrud(state, payload){
            state.users = payload
        }
    },
    actions: {
        getUsers({commit}, payload){
            Vue.prototype.$http(`/users?limit=${payload.limit}
                &page=${payload.page}`).then((res)=> {
                commit('updateCrud', res.data)
            })
        }
    }
})