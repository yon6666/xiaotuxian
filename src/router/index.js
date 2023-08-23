import { createRouter, createWebHashHistory } from 'vue-router'
import TopCategory from '@/views/category/index'
import SubCategory from '@/views/category/sub'
const Layout = () => import('@/views/Layout')
const Home = () => import('@/views/home')
const Goods = () => import('@/views/goods/index')
const Login = () => import('@/views/login/index')
const LoginCallback = () => import('@/views/login/callback')
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
    { path: '/', component: Home },
    { path: '/category/:id', component: TopCategory },
    { path: '/category/sub/:id', component: SubCategory },
    { path: '/product/:id', component: Goods }
    ]
},
{ path: '/login', component: Login },
{ path: '/login/callback', component: LoginCallback }
]

const router = createRouter({
  // 使用hash方式实现路由
  history: createWebHashHistory(),
  // 配置路由规则，写法和之前一样
  routes,
    scrollBehavior () {
        return { left: 0, top: 0 }
      }
})

export default router
