import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomePage from './views/HomePage.vue'
import AboutPage from './views/AboutPage.vue'
import DownloadPage from './views/DownloadPage.vue'
import './styles.css'

const routes = [
  { path: '/', component: HomePage, meta: { title: 'Vanso — AI Music Creation & Distribution', description: 'Create original AI music in the Vanso app, publish your songs and reach listeners.' } },
  { path: '/about', component: AboutPage, meta: { title: 'About Vanso — AI Music Creation, Publishing & Discovery', description: 'Learn how Vanso connects AI music creation, publishing, intelligent distribution and listener feedback.' } },
  { path: '/download', component: DownloadPage, meta: { title: 'Download Vanso — AI Music Creator App', description: 'Download Vanso for iOS and Android to create original AI music, publish songs and reach listeners.' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (to) => {
    if (!to.hash) return { top: 0, left: 0 }

    const target = document.querySelector(to.hash)
    if (!target) return { top: 0, left: 0 }

    return {
      top: target.getBoundingClientRect().top + window.scrollY - 24,
      left: 0,
      behavior: 'smooth',
    }
  },
})

router.afterEach((to) => {
  document.title = to.meta.title
  document.querySelector('meta[name="description"]')?.setAttribute('content', to.meta.description)
})

createApp(App).use(router).mount('#app')
