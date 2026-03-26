import Create from "./pages/Create.vue";
import Edit from "./pages/Edit.vue";
import Main from "./pages/Main.vue";
import OrderList from "./pages/OrderList.vue";



export const inventoryRoutes = [
    { path: '/', name: 'Main', component: Main },
    { path: '/edit/:id', name: 'Edit', component: Edit },
    { path: '/create', name: 'Create', component: Create },
    { path: '/orderList', name: 'OrderList', component: OrderList }
]