import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomePage from './views/HomePage.vue'
import AboutPage from './views/AboutPage.vue'
import DownloadPage from './views/DownloadPage.vue'
import HelpPage from './views/HelpPage.vue'
import GettingStartedPage from './views/GettingStartedPage.vue'
import PricingPage from './views/PricingPage.vue'
import './styles.css'
import './help.css'
import './v02.css'
import './layout-polish.css'

const routes = [
  { path: '/', component: HomePage, meta: { title: 'Vanso — Create AI Music, Publish On Vanso & Reach Listeners', description: 'Create original AI-generated music, publish your tracks and reach listeners worldwide with Vanso. Start creating or discover new music today.' } },
  { path: '/about', component: AboutPage, meta: { title: 'About Vanso — AI Music Creation, Publishing & Distribution', description: 'Learn what Vanso is, who it is for and how it connects AI music creation, publishing, distribution and listening in one platform.' } },
  { path: '/download', component: DownloadPage, meta: { title: 'Download Vanso — AI Music Creator App', description: 'Download Vanso for iOS and Android to create original AI music, publish songs and reach listeners.' } },
  { path: '/pricing', component: PricingPage, meta: { title: 'Vanso Pricing — AI Music Plans from Free to Pro', description: 'Compare Vanso AI music plans, monthly credits, song generation limits and commercial use options. Start free or choose the right plan for your music.' } },
  { path: '/help', component: HelpPage, meta: { title: 'Vanso Help Center', description: 'Find answers about creating, publishing and managing your AI music on Vanso, plus account, rights and troubleshooting help.' } },
  { path: '/help/getting-started-with-vanso', component: GettingStartedPage, meta: { title: 'Getting Started with Vanso | Vanso Help', description: 'New to Vanso? Learn the basics of accessing the app, creating music and publishing your first track.' } },
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
