import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AppLayout from "@/layout/AppLayout.vue";
import ProductsView from "@/views/ProductsView.vue";
import CartView from "@/views/CartView.vue";
import ProductItemView from "@/views/ProductItemView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    meta: { layout: AppLayout },
    component: HomeView,
  },
  {
    path: "/products",
    name: "products",
    meta: { layout: AppLayout },
    component: ProductsView,
  },
  {
    path: "/products/:id",
    name: "product-item",
    meta: { layout: AppLayout },
    component: ProductItemView,
  },
  {
    path: "/cart",
    name: "cart",
    meta: { layout: AppLayout },
    component: CartView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
