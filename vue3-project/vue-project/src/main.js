//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//import './assets/styles/main.css'
import './assets/styles/styles/style.scss'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
