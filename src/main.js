import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'swiper/swiper.min.css';
import Swiper from 'swiper/bundle';

import './assets/css/main.css'
import './assets/css/reset.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
