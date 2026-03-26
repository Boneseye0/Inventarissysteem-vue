<script setup lang="ts">

import { useRoute } from 'vue-router';
import { editInventoryItem, getInventoryItemById, type InventoryItem } from '../inventory-store';
import InventoryForm from '../components/InventoryForm.vue';


const $route = useRoute()

const inventoryId = Number($route.params.id)
const inventoryItem = (getInventoryItemById(inventoryId))

const handleSubmit = (editedInventoryItem :InventoryItem) => {
    editInventoryItem(editedInventoryItem)
}
</script>

<template>
<div>
    <h2>{{ inventoryItem?.name }}</h2>
    <InventoryForm v-if="inventoryItem" @submit="handleSubmit" :inventoryItem />
</div>

</template>