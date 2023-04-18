import { createRouter, createWebHistory } from 'vue-router'
import Hello from '../components/Hello'
const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
