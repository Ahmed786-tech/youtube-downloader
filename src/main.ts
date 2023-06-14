import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Pinia from './stores/index'
import router  from './routes'
import { loadFonts } from './plugins/webfontloader'


loadFonts()

createApp(App)
  .use(vuetify)
  .use(Pinia)
  .use(router)
  .mount('#app')
