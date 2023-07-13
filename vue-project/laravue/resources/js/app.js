import { createApp } from 'vue';
import App from './components/App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';



const app = createApp({});
app.component('App', App);
app.mount('#app');

require('./bootstrap');
createApp(App).use(router).mount('#app');