import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

window.app = createApp(App).use(store).mount('#app')


