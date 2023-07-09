import { createRouter, createWebHistory } from 'vue-router'
import CategoryPage from "../views/CategoryPage.vue";
import ServiceDetailPage from "../views/ServiceDetailPage.vue";
import ContactPage from "../views/ContactPage.vue";
import AboutPage from "../views/AboutPage.vue";
import NotFoundPage from "../views/NotFoundPage.vue"

const routes = [
  {
    path: "/category",
    name: "Category",
    component: CategoryPage,
  }, 
  {
    path: "/service/:id",
    name: "ServiceDetail",
    component: ServiceDetailPage,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactPage,
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
  },
  {
    path: "/",
    redirect: "/category",
  },
  {
    path: "/notfound",
    component: NotFoundPage,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/notfound",
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
