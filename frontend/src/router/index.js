import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import Home from '../components/Home'
import User_Profile from '../components/user_profile/Profile'
import Admin_Profile from '../components/admin_profile/Profile'

Vue.use(Router)

const router = new Router({
  mode: "history",
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/profile', name: 'User_Profile', component: User_Profile, meta: { auth: true, title: 'MyProject | Profile' } },
    { path: '/admin/profile', name: 'Admin_Profile', component: Admin_Profile, meta: { auth: true, admin: true, title: 'MyProject | Admin Profile' } }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'MyProject'
  if (to.meta.auth && !localStorage.getItem('access_token')) {
    router.push({ name: 'Home' })
  }

  if (to.meta.admin && store.getters.role_getter !== 'admin') {
    router.push({ name: 'User_Profile' })
  }

  next()
})

export default router
