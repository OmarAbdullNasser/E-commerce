import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
})
export default createStore({
    state: {
        Card: [],
        userInfo: null,
    },
    getters: {},
    mutations: {
        AddtoCard(state, payload) {
            const item = state.Card.find((item) => item._id === payload._id)
            if (item) {
                item.q += payload.q
            } else {
                state.Card.push(payload)
            }
        },
        deleteItem(state, payload) {
            state.Card = state.Card.filter((item) => item._id != payload._id)
        },

        resetCart(state) {
            state.Card = []
        },

        increamentQuantity(state, payload) {
            const item = state.Card.find((item) => item._id === payload._id)
            if (item) {
                item.q++
            }
        },
        decrementQuantity(state, payload) {
            const item = state.Card.find((item) => item._id === payload._id)
            if (item) {
                item.q--
            }
        },
        addUser(state, payload) {
            state.userInfo = payload
        },
        removeUser(state) {
            state.userInfo = null
        },
    },
    actions: {},
    modules: {},
    plugins: [vuexLocal.plugin],
})
