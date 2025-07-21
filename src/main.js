import './styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueAwesomePaginate from 'vue-awesome-paginate'
import 'vue-awesome-paginate/dist/style.css'

import Vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAwesomePaginate)
app.use(Vue3Toastify, {
   autoClose: 3000,
   hideProgressBar: true,
   theme: 'colored',
   hideProgressBar: true,
   dangerouslyHTMLString: true,
})

app.mount('#app')
