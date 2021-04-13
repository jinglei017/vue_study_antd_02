import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue/es'
import 'ant-design-vue/dist/antd.css'
import './mock/mock'
import router from "./router";
import store from "./store"

const app = createApp(App)
app.use(router)
app.use(store)
app.use(Antd)
app.mount('#app')