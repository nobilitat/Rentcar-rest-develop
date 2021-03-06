import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarCatalogView from '../views/CarCatalogView.vue'
import ConditionsView from '../views/ConditionsView.vue'
import ContactView from "../views/ContactView.vue"
import MyOrdersView from "../views/MyOrdersView.vue"
import NewOrder from "../views/NewOrder.vue"
import OrderPageView from "../views/OrderPageView.vue"
import CarPageView from "../views/CarPageView.vue"
import LoginPageView from "../views/LoginPageView.vue"
import RegistrationPageView from "../views/RegistrationPageView.vue"
import UserLogout from "../views/UserLogout.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: CarCatalogView
  },
  {
    path: '/conditions',
    name: 'conditions',
    component: ConditionsView
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactView
  },
  {
    path: '/myorders',
    name: 'myorder',
    component: MyOrdersView
  },
  {
    path: '/neworder',
    name: 'neworder',
    component: NewOrder
  },
  {
    path: '/order/:id',
    name: 'orderpage',
    component: OrderPageView
  },
  {
    path: '/car/:id',
    name: 'mycar',
    component: CarPageView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPageView
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationPageView
  },
  {
    path: '/logout/',
    name: 'logout',
    component: UserLogout
  },

]

const router = new VueRouter({
  routes
})

export default router
