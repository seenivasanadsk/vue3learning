import './assets/main.css'

import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component(
  'MyComponent',
  defineAsyncComponent(() => import('./components/HelloWorld.vue')),
)

app.use(router)

app.mount('#app')
