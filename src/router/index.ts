import { createRouter, createWebHistory } from "vue-router";
import { inventoryRoutes } from "../domain/inventory/components/routes";

const routes = [...inventoryRoutes];

export const router = createRouter({
    history: createWebHistory(),
    routes
});