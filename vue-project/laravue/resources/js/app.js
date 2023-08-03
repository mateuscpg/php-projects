import { createApp } from 'vue';
import App from './components/App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { createVuetify } from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

// Crie uma instância do aplicativo Vue
const app = createApp(App);

// Crie uma instância do Vuetify e use-a no aplicativo Vue
const vuetify = createVuetify();
app.use(vuetify);

// Monte o aplicativo no elemento #app
app.use(router).mount('#app');

require('./bootstrap');
