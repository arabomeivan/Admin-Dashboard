import { createRouter, createWebHistory } from 'vue-router'

import Create_User from '../views/User.vue'
import Home from '../views/Home.vue'
import Inventory from '../views/Inventory.vue'
import Requests from '../views/Request.vue'
import View_users from '../views/Viewusers.vue'
import Equipments from '../views/Equipments.vue'

const routes = [

/**Route for User component */
  {
    path:'/user',
    name:'create_user',
    component: Create_User
  },

  /**Route for Chart/Home component */
  {
    path: '/charts',
    name: 'charts',
    component: Home
  },

  /**Route for Inventory component */

  {
    path: '/inventory',
    name: 'inventory',
    component: Inventory
  },

  /**Route for Request component */

  {
    path:'/request',
    name: 'request',
    component: Requests
  },

  /**Route for View User component */
  {
     path: '/view_users',
     name: 'view_users',
     component: View_users
  },

  /**Route for Equipments component */
  {
    path: '/equipments',
    name: 'equipments',
    component: Equipments
  }
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
