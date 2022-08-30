import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store ({
    state: {
        count: 0,
        message: '메시지'
    },
    getters: {
        message(state) {
            return state.message
        }
    },
    mutations: {
        setMessage(state, payload) {
            state.message = payload.message
        }
    },
    actions: {
        doUpdate({commit}, message) {
            commit('setMessage', {message})
        }
    }
})

export default store