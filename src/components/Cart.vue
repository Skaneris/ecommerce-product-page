<template>
    <div class="cart">
        <div class="cart__header">
            Cart
        </div>
        <div class="cart__body">
            <transition name="fade" mode="out-in">
            <div v-if="cart.length" class="cart__items">
                <CartItem v-for="product of cart" :item="product" :key="product.name" />
                <div class="buttons"><button><span>Checkout</span></button></div>
            </div>
            <div v-else class="cart__empty">
                Your cart is empty.
            </div>
            </transition>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartItem from './CartItem.vue'
export default {
    name: 'Cart',
    components: { CartItem },
    computed: {
        ...mapGetters({
            cart: 'getCart'
        })
    },
    
}
</script>