import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
import Discuss from '../components/Discuss.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    children: [
      {
        path: '/discuss',
        name: 'discuss',
        component: Discuss
      },
      {
        path: '/activity',
        name: 'activity',
        component: () =>
          import(/* webpackChunkName: "activity" */ '../components/Activity.vue')
      },
      {
        path: '/login',
        name: 'login',
        component: Login
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
