import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载
const Home = () => import('../views/home/Home.vue')
const Food = () => import('../views/food/Food.vue')
const Book = () => import('../views/book/Book.vue')
const Goods = () => import('../views/goods/Goods.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/food',
    name: 'Food',
    component: Food
  },
  {
    path: '/book',
    name: 'Book',
    component: Book
  },
  {
    path: '/goods',
    name: 'Goods',
    component: Goods
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
