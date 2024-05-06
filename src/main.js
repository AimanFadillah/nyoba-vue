import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import global from './components/global.vue'

const app = createApp(App)

app.use({
    install:(app,options) => {
        app.config.globalProperties.$iniPlugin = (nama) => {
            return `halo ${nama || "user"} saya berasal dari plugin`
        }
    }
})

app.component("global",global)

app.use(router)

app.mount('#app')
