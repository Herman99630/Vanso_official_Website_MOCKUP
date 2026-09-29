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
  { path: '/', component: HomePage, meta: {"title": "Vanso | AI Music Creation & Discovery", "description": "Turn everyday ideas into songs with AI. Share your music on Vanso, discover songs from others, and connect through listening, likes, and comments."} },
  { path: '/about', component: AboutPage, meta: {"title": "About Vanso | Music, Expression & Connection", "description": "Discover Vanso, a music platform for turning everyday ideas into songs with AI, sharing your music, and discovering what others create."} },
  { path: '/download', component: DownloadPage, meta: {"title": "Download Vanso | Create & Discover AI Music", "description": "Get Vanso for iPhone and Android. Turn everyday ideas into songs with AI, share your music, and discover songs from others."} },
  { path: '/pricing', component: PricingPage, meta: {"title": "Vanso Pricing | AI Music Creation Plans", "description": "Compare Vanso AI music plans, monthly credits, song generation limits and commercial use options. Start free or choose the right plan for your music."} },
  { path: '/help', component: HelpPage, meta: {"title": "Vanso Help Center", "description": "Find help with creating and sharing songs, listening to music, and using your Vanso account, plus plans, rights, and troubleshooting."} },
  { path: '/help/getting-started-with-vanso', component: GettingStartedPage, meta: {"title": "Getting Started With Vanso | Vanso Help", "description": "New to Vanso? Get the app, discover music from others, and learn the basics of creating and sharing your own songs."} },
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
