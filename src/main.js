import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import global from './components/global.vue'

const app = createApp(App)

app.component("global",global)

app.use(router)

app.mount('#app')
