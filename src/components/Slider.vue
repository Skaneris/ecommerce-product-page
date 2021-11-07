<template>
    <div class="image">
        <div class="image__body">
            <img :src="activeIMG.src" alt="">
            <button @click="preview" class="image__nav prev"><PreviosSVG /></button>
            <button @click="next" class="image__nav next"><NextSVG /></button>
        </div>
        <div class="image__thumbwrapper">
            <div v-for="(image, idx) of images" class="image__thumb" :key="image.src">
                <img :src="image.thumb" @click="setImage(idx)" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import PreviosSVG from './svg/PreviosSVG.vue'
import NextSVG from './svg/NextSVG.vue'
import src1 from '../assets/images/image-product-1.jpg'
import src2 from '../assets/images/image-product-2.jpg'
import src3 from '../assets/images/image-product-3.jpg'
import src4 from '../assets/images/image-product-4.jpg'
import thumb1 from '../assets/images/image-product-1-thumbnail.jpg'
import thumb2 from '../assets/images/image-product-2-thumbnail.jpg'
import thumb3 from '../assets/images/image-product-3-thumbnail.jpg'
import thumb4 from '../assets/images/image-product-4-thumbnail.jpg'
export default {
    name: 'Slider',
    components: {
        PreviosSVG,
        NextSVG,
    },
    data() {
        return {
            activeIMG: {
                idx: 0,
                src: src1,
                thumb: thumb1
            },
            images: [
                {
                    src: src1,
                    thumb: thumb1
                },
                {
                    src: src2,
                    thumb: thumb2
                },
                {
                    src: src3,
                    thumb: thumb3
                },
                {
                    src: src4,
                    thumb: thumb4
                },
            ]
        }
    },
    methods: {
        preview() {
            let idx = this.activeIMG.idx === 0 ? this.images.length - 1 : this.activeIMG.idx - 1
            this.activeIMG = this.images[idx]
            this.activeIMG.idx = idx
        },
        next() {
            let idx = this.activeIMG.idx === this.images.length - 1 ? 0 : this.activeIMG.idx + 1
            this.activeIMG = this.images[idx]
            this.activeIMG.idx = idx
        },
        setImage(idx) {
            this.activeIMG = this.images[idx]
            this.activeIMG.idx = idx
        }
    }
}
</script>

<style lang="sass">
.fade-enter-active, .fade-leave-active
    transition: opacity 0.3s
.fade-enter-from, .fade-leave-to
    opacity: 0
</style>