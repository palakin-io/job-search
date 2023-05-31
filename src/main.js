import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faAngleUp, faSearch } from '@fortawesome/free-solid-svg-icons'
import router from './router'

import "@/index.css"

library.add(faSearch);
library.add(faAngleDown);
library.add(faAngleUp);

const pinia = createPinia();

createApp(App).use(pinia).use(router).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
