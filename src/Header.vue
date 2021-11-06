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
                <button class="header__cart"><CartSVG /></button>
                <button class="header__avatar">
                    <img src="./assets/images/image-avatar.png" alt="">
                </button>
            </div>
        </div>
    </div>
    <div class="overlay" :class="{_active: showSidebar, _hidden: !showSidebar}" @click="toggleSidebar"></div>
</template>

<script>
import MenuSVG from './components/svg/MenuSVG.vue'
import LogoSVG from './components/svg/LogoSVG.vue'
import CartSVG from './components/svg/CartSVG.vue'
import CloseSVG from './components/svg/CloseSVG.vue'
import { mapMutations, mapGetters } from 'vuex'
export default {
    name: 'Header',
    components: {
        MenuSVG, LogoSVG, CartSVG, CloseSVG
    },
    methods: {
        ...mapMutations({
            setShowSidebar: 'setShowSidebar'
        }),
        toggleSidebar() {
            this.setShowSidebar(!this.showSidebar)
        }
    },
    computed: {
        ...mapGetters({
            showSidebar: 'getShowSidebar'
        })
    },
    watch: {
        showSidebar(newVal) {
            newVal ? document.body.classList.add('_blocked-scroll') : document.body.classList.remove('_blocked-scroll')
        }
    }
}
</script>