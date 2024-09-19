import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import HomePage from './views/HomePage.vue'
import CodeSandbox from './views/CodeSandbox.vue'
import AboutMe from './views/AboutMe.vue'
import App from './App.vue'



const routes = [
    { path: '/', component: HomePage },
    { path: '/sandbox', component: CodeSandbox },
    { path: '/about', component: AboutMe },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App)
    .use(router)
    .mount('#app')
