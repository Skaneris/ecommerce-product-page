import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            showSidebar: false
        }
    },
    mutations: {
        setShowSidebar: (state, value) => state.showSidebar = value,
    },
    actions: {},
    getters: {
        getShowSidebar: state => state.showSidebar
    },
})

export default store