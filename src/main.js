import './assets/main.scss'

import { createApp } from './vue.js'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

