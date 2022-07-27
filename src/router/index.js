import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AddView from '../views/AddView.vue'
import Employee from "../components/Employee.vue"
import EditEmployee from "../components/EditEmployee.vue"
import App from "../App.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path:'/home',
  //   name : 'home',
  //   component : HomeView
  // },
  {
    path: '/addUser',
    name: 'addPage',
    component : AddView
  },
  {
    path : "/emplyee/:id",
    name : "emplyee",
    component : Employee
  },
  {
    path : "/editEmployee ",
    name : "editEmployee",
    component : EditEmployee
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
