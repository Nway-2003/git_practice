/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import 'vuetify/styles'; // Import Vuetify styles

// Components
import App from './App.vue'
import '@mdi/font/css/materialdesignicons.css'

// Composables
import { createApp } from 'vue'
import store from './store';
import router from './router';

const app = createApp(App)
app.use(router);
app.use(store)

registerPlugins(app)

app.mount('#app')






