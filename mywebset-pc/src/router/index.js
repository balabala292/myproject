import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Login from '../views/login.vue'
import BlogDetail from '../views/blogDetail.vue'
import PostBlog from '../views/postBlog.vue'
import Remark from '../views/remark.vue'
import Regist from '../views/regist.vue'
import Info from '../views/info.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Info',
    component: Info
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/blog/detail/:blogId',
    name: 'BlogDetail',
    component: BlogDetail
  },
  {
    path: '/blog/post',
    name: 'PostBlog',
    component: PostBlog
  },
  {
    path: '/remark/:blogId',
    name: 'Remark',
    component: Remark
  },
  {
    path: '/regist',
    name: 'Regist',
    component: Regist
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router