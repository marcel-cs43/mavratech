import { createRouter, createWebHistory } from 'vue-router'
import CategoryPage from "../views/CategoryPage.vue";
import ServiceDetailPage from "../views/ServiceDetailPage.vue";

const routes = [
  {
    path: "/category",
    name: "Category",
    component: CategoryPage,
  }, 
  {
    path: "/service",
    name: "ServiceDetail",
    component: ServiceDetailPage,
  },
  {
    path: "/",
    redirect: "/category",
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
