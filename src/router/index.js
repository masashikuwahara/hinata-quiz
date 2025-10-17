import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Quiz from '../views/Quiz.vue'
import Result from '../views/Result.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/quiz', name: 'quiz', component: Quiz },
    { path: '/result', name: 'result', component: Result }
  ],
  scrollBehavior() { return { top: 0 } }
})

export default router