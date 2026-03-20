import { createRouter, createWebHistory } from "vue-router";
import { ineventoryRoutes } from "../domain/inventory/components/routes";

const routes = [...ineventoryRoutes]

export const router = createRouter({
    history: createWebHistory(),
    routes
})