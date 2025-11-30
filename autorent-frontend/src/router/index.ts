import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import CarsView from "../views/CarsView.vue";
import MyBookingsView from "../views/MyBookingsView.vue";

const routes = [
  { path: "/", redirect: "/cars" },
  { path: "/login", component: LoginView },
  { path: "/register", component: RegisterView },
  { path: "/cars", component: CarsView },
  { path: "/bookings", component: MyBookingsView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
