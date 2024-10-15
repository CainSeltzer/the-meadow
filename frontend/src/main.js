import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import HomePage from './views/HomePage.vue'
import CodeSandbox from './views/CodeSandbox.vue'
import AboutMe from './views/AboutMe.vue'
import ProjectList from './views/ProjectList.vue'
import App from './App.vue'
import titleMixIn from './titleMixIn'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faPhone, faEnvelope, faTriangleExclamation, faGears } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faTriangleExclamation, faEnvelope, faPhone, faGears)



const routes = [
    { path: '/', component: HomePage },
    { path: '/sandbox', component: CodeSandbox },
    { path: '/about', component: AboutMe },
    { path: '/projects', component: ProjectList},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App)
    .mixin(titleMixIn)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')
