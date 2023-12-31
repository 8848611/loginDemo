import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import Vconsole from 'vconsole'
createApp(App).use(router).use(new Vconsole()).mount('#app')
