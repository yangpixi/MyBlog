import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import axios from 'axios'
import 'element-plus/dist/index.css';
import ElementPlus from 'element-plus'
import nav from '@/components/navigation.vue'
import Toc from './components/Toc.vue'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import { createPinia } from 'pinia'


axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8080'

const app = createApp(App)
const pinia = createPinia()

app.use(ElementPlus, {
    zIndex: 3000,
})
app.use(mavonEditor)
app.use(router)
app.use(pinia)

app.component('Navigation', nav)
app.component('Toc', Toc)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
