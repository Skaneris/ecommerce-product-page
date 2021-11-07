<template>
    <div class="container">
        <div class="header__body">
            <div class="header__left">
                <div class="header__burger" @click="toggleSidebar"><MenuSVG /></div>
                <div class="header__logo"><LogoSVG /></div>
                <div class="header__nav" :class="{ _active: showSidebar }">
                    <div class="header__nave-close" @click="toggleSidebar">
                        <CloseSVG />
                    </div>
                    <ul>
                        <li><button>Collections</button></li>
                        <li><button>Men</button></li>
                        <li><button>Women</button></li>
                        <li><button>About</button></li>
                        <li><button>Contact</button></li>
                    </ul> 
                </div>
            </div>
            <div class="header__right">
                <button class="header__cart" @click="toggleCart">
                    <CartSVG />
                    <div v-if="cartValue" class="header__cart-value">{{ cartValue }}</div>
                </button>
                <button class="header__avatar">
                    <img src="./assets/images/image-avatar.png" alt="">
                </button>
            </div>
            <transition name="fade">
                <Cart v-if="showCart" />
            </transition>
        </div>
    </div>
    <transition name="fade">
        <div v-if="showSidebar" class="overlay" @click="toggleSidebar"></div>
    </transition>
    <div v-if="showCart" class="overlay-transparent" @click="toggleCart"></div>
</template>

<script>
import MenuSVG from './components/svg/MenuSVG.vue'
import LogoSVG from './components/svg/LogoSVG.vue'
import CartSVG from './components/svg/CartSVG.vue'
import CloseSVG from './components/svg/CloseSVG.vue'
import Cart from './components/Cart.vue'
import { mapGetters } from 'vuex'
export default {
    name: 'Header',
    components: {
        MenuSVG, LogoSVG, CartSVG, CloseSVG, Cart
    },
    data() {
        return {
            showCart: false,
            showSidebar: false
        }
    },
    methods: {
        toggleSidebar() {
            this.showSidebar = !this.showSidebar
        },
        toggleCart() {
            this.showCart = !this.showCart
        }
    },
    computed: {
        ...mapGetters({
            cartValue: 'getCartCount'
        }),
        blockedScroll() {
            return this.showCart || this.showSidebar
        }
    },
    watch: {
        blockedScroll(newVal) {
            if(newVal) {
                const fullWidth = window.innerWidth
                const docWidth = document.documentElement.clientWidth
                const scrollbar = fullWidth - docWidth
                document.body.classList.add('_blocked-scroll')
                document.body.style.paddingRight = scrollbar + 'px'
            } else {
                document.body.classList.remove('_blocked-scroll')
                document.body.removeAttribute('style')
            }
        }
    }
}
</script>
