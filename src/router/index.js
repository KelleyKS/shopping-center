import { createRouter, createWebHashHistory} from 'vue-router'

// const _import_ = (file) => () => import(`@/views/${file}/index.vue`)

import Home from '../views/home'
const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home, name: 'home' },
  ]


  
const router = createRouter({
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router