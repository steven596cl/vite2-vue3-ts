import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'//路由管理
import { createPinia } from 'pinia' //状态管理
import ElementPlus from 'element-plus'//饿了么组件库
import 'element-plus/dist/index.css'

const app = createApp(App)
const pinia = createPinia()


app.use(router)
app.use(pinia)
app.use(ElementPlus)

app.mount('#app')
