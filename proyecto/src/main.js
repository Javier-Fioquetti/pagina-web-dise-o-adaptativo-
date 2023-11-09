import { createApp } from 'vue'
import App from './App.vue'

// Importa las bibliotecas necesarias de Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Agrega los iconos sólidos (fas) y de marcas (fab) a la biblioteca de Font Awesome
library.add(fas, fab);

const app = createApp(App);

// Registra el componente global 'font-awesome-icon' para usar en tus componentes Vue
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');