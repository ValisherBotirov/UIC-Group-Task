import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AddView from '../views/AddView.vue'
import Employee from "../components/Employee.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/addUser',
    name: 'addPage',
    component : AddView
  },
  {
    path : "/emplyee",
    name : "emplyee",
    component : Employee
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
