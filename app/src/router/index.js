import { createRouter, createWebHashHistory } from "vue-router"
import CartList from "../components/cart/CartList.vue"
import ProductList from "../components/product/ProductList.vue"

const routes = [
    {
        path: "/",
        component: ProductList,
    },
    {
        path: "/cart",
        component: CartList,
    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
