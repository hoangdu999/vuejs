import TheHome from "../view/home/TheHome.vue";
import Order from "../view/order/Order.vue";
const routes = [
  {
    path: "/",
    component: TheHome,
  },
  {
    path: "/order",
    component: Order,
  },
];
export default routes;
