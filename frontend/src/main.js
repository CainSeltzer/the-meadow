import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from './views/HomePage.vue'
import App from './App.vue'


const routes = [
    { path: '/', component: HomePage },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

createApp(App)
    .use(router)
    .mount('#app')
