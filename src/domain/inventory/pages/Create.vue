<script setup lang="ts">
import { ref } from 'vue';
import type { InventoryItem } from '../components/inventory-store'
import { addInventoryItem, nextId } from '../components/inventory-store';
import InventoryForm from '../components/InventoryForm.vue';

const inventoryItem = ref({
    id: nextId,
    name:   '',
    actualAmount:   0,  
    minimumAmount:  0
});

const handleSubmit = (newInventoryItem :InventoryItem) => {
    addInventoryItem(newInventoryItem);
}
</script>

<template>
<div>
    <InventoryForm @submit="handleSubmit" :inventoryItem />
</div>
</template>