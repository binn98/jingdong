import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './style/index.scss'
import { Swipe, SwipeItem } from 'vant';
createApp(App).use(router).use(store).use(Swipe).use(SwipeItem).mount('#app')
