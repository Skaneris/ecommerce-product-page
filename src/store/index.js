import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            cart: []
        }
    },
    mutations: {
        setCart: (state, data) => state.cart = data,
        addToCart: (state, item) => state.cart.push(item),
        incCartItem: (state, data) => state.cart[data.index].value += data.value,
        removeItemFromCart: (state, item) => state.cart = state.cart.filter(i => i.name !== item.name)
    },
    actions: {
        getCartFromLocalStorage({commit}) {
            const cart = localStorage.getItem('cart')
            if(cart) commit('setCart', JSON.parse(cart))
        },
        addToCart({commit, state}, item) {
            const idx = state.cart.findIndex(cartItem => cartItem.name === item.name)
            if(idx !== -1) {
                commit('incCartItem', {index: idx, value: item.value})
            } else {
                commit('addToCart', item)
            }
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        removeFromCart({commit, state}, item) {
            const idx = state.cart.findIndex(cartItem => cartItem.name === item.name)
            if(idx !== -1) {
                commit('removeItemFromCart', item)
                localStorage.setItem('cart', JSON.stringify(state.cart))
            }
        },
        clearCart({commit}) {
            localStorage.clear('cart')
            commit('setCart', [])
        }
    },
    getters: {
        getCart: state => state.cart,
        getCartCount: state => state.cart.reduce((r, i) => r + i.value, 0)
    },
})

export default store