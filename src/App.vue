<template>
    <Slider />
    <div class="info">
        <h2>Sneaker Company</h2>
        <h1>Fall Limited Edition Sneakers</h1>
        <div class="desc">
            <span>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</span>
        </div>
        <div class="price">
            <div class="price__now">
                $125.00
                <span>50%</span>
            </div>
            <div class="price__old">$250.00</div>
        </div>
        <div class="quantity">
            <button @click="minus"><MinusSVG /></button>
            <div class="count">{{ product.value }}</div>
            <button @click="product.value++"><PlusSVG /></button>
        </div>
        <div class="buttons"><button @click="toCart"><CartWightSVG /><span>Add to cart</span></button></div>
    </div>
</template>

<script>
import Slider from './components/Slider.vue'
import MinusSVG from './components/svg/MinusSVG.vue'
import PlusSVG from './components/svg/PlusSVG.vue'
import CartWightSVG from './components/svg/CartWightSVG.vue'
import { mapActions } from 'vuex'
export default {
    name: 'App',
    components: {
        Slider, MinusSVG, PlusSVG, CartWightSVG
    },
    data() {
        return {
            product: {
                name: 'Fall Limited Edition Sneakers',
                description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
                price: '125.00',
                discount: '50%',
                oldPrice: '250.00',
                value: 1
            }
        }
    },
    methods: {
        minus() {
            if(this.product.value > 1) this.product.value--
        },
        ...mapActions({
            addToCart: 'addToCart',
            getCart: 'getCartFromLocalStorage'
        }),
        toCart() {
            const item = {
                name: this.product.name,
                price: this.product.price,
                value: this.product.value
            }
            this.addToCart(item)
        }
    },
    mounted() {
        this.getCart()
    }
}
</script>
