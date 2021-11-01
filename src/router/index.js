import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/questions',
    name: 'List Questions',
    component: () => import(/* webpackChunkName: "about" */ '../views/questions/list.vue')
  },
  {
    path: '/questions/edit/:id',
    name: 'Edit Questions',
    component: () => import(/* webpackChunkName: "about" */ '../views/questions/update.vue')
  },
  {
    path: '/questions/create',
    name: 'Create Questions ',
    component: () => import(/* webpackChunkName: "about" */ '../views/questions/create.vue')
  },
  {
    path: '/dimensions',
    name: 'Dimension',
    component: () => import(/* webpackChunkName: "about" */ '../views/dimensions/list.vue')
  },
  {
    path: '/dimensions/edit/:id',
    name: 'Dimension',
    component: () => import(/* webpackChunkName: "about" */ '../views/dimensions/update.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
