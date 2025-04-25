import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import { createPinia } from 'pinia'
import router from './router'
import { i18n } from './locales'

createApp(App)
  .use(createPinia())
  .use(router)
  .use(i18n)
  .mount('#app')
