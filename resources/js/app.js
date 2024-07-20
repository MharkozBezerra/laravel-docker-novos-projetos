import  './bootstrap5/js/bootstrap';
// Css
import './bootstrap';
import {createApp} from 'vue';
import  '../css/bootstrap5/css/bootstrap.css';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import App from './App.vue';
import AppTest2 from './components/AppTest2.vue';
// Import dos componentes
const vuetify = createVuetify({
    components,
    directives,
  })
const app = createApp({});

app.use(vuetify);
app.component("app", AppTest2);

app.mount("#app")
