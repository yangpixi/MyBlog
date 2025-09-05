import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import axios from 'axios'
import 'element-plus/dist/index.css';
import ElementPlus from 'element-plus'
import nav from '@/components/navigation.vue'

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8080'

const app = createApp(App)

app.use(ElementPlus, {
    zIndex: 3000,
})

app.use(router)

app.component('Navigation', nav)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
