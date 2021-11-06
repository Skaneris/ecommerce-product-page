import { createApp } from 'vue'
import Header from './Header.vue'
import App from './App.vue'
import './assets/sass/app.sass'

createApp(Header).mount('#header')
createApp(App).mount('#app')
