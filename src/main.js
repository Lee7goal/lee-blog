import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import store from './store'
import './assets/main.css'
import naive from 'naive-ui'

createApp(App).use(Router).use(store).use(naive).mount('#app')
