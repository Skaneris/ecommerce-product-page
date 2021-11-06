import { createApp } from 'vue'
import store from './store'
import Header from './Header.vue'
import App from './App.vue'
import './assets/sass/app.sass'

createApp(Header).use(store).mount('#header')
createApp(App).use(store).mount('#main')
