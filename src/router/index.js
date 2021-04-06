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
  },
  {
    path: '/costa',
    name: 'Costa',
    component: () => import('../views/Costa.vue')
  },
  {
    path: '/primitivo',
    name: 'Primitivo',
    component: () => import('../views/Primitivo.vue')
  },
  {
    path: '/salvador',
    name: 'Salvador',
    component: () => import('../views/Salvador.vue')
  },
  {
    path: '/bedroom',
    name: 'Bedroom',
    component: () => import('../views/Bedroom.vue')
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
