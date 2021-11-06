<template>
    <div class="cart__item">
        <div class="cart__item-image">
            <img :src="src" alt="">
        </div>
        <div class="cart__item-description">
            <div class="name">{{ item.name }}</div>
            <div class="count">
                <div class="price">${{ item.price }}</div>
                <div class="multi">x</div>
                <div class="value">{{ item.value }}</div>
                <div class="total">${{ item.price * item.value }}</div>
            </div>
        </div>
        <div class="cart__item-buttons">
            <button @click="deleteItem"><DeleteSVG /></button>
        </div>
    </div>
</template>
<script>
import Image from '../assets/images/image-product-1-thumbnail.jpg'
import DeleteSVG from './svg/DeleteSVG.vue'
import { mapActions } from 'vuex'
export default {
    name: 'CartItem',
    components: { DeleteSVG },
    props: {
        item: {
            type: Object
        }
    },
    data() {
        return {
            src: Image
        }
    },
    methods: {
        ...mapActions({
            remove: 'removeFromCart'
        }),
        deleteItem() {
            this.remove(this.item)
        }
    }
}
</script>