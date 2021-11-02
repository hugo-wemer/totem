import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6ea3f052 = () => interopDefault(import('../pages/Login.vue' /* webpackChunkName: "pages/Login" */))
const _7726f852 = () => interopDefault(import('../pages/Transfereds.vue' /* webpackChunkName: "pages/Transfereds" */))
const _23c00784 = () => interopDefault(import('../pages/patient/_id.vue' /* webpackChunkName: "pages/patient/_id" */))
const _f0d77640 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Login",
    component: _6ea3f052,
    name: "Login"
  }, {
    path: "/Transfereds",
    component: _7726f852,
    name: "Transfereds"
  }, {
    path: "/patient/:id?",
    component: _23c00784,
    name: "patient-id"
  }, {
    path: "/",
    component: _f0d77640,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
