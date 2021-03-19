import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Registro',
    component: () => import('../views/Registro.vue')
  },
  {
    path: '/caminos',
    name: 'Caminos',
    component: () => import('../views/Caminos.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
