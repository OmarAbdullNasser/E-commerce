import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import 'material-symbols'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab)

import PrimeVue from 'primevue/config'
import DynamicDialog from 'primevue/dynamicdialog'

createApp(App)
    .component('fa', FontAwesomeIcon)
    .use(store)
    .use(router)
    .use(PrimeVue)
    .use(DynamicDialog)
    .mount('#app')
