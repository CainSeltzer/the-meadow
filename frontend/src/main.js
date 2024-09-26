import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import HomePage from './views/HomePage.vue'
import AboutMe from './views/AboutMe.vue'
import ProjectList from './views/ProjectList.vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faTriangleExclamation)



const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutMe },
    { path: '/projects', component: ProjectList},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')
