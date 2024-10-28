import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import { Quasar } from 'quasar'

import '@quasar/extras/material-icons/material-icons.css'

import App from './App.vue'

const pinia = createPinia()
const myApp = createApp(App)

App.use(pinia)
myApp.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
  })

myApp.mount('#app')

