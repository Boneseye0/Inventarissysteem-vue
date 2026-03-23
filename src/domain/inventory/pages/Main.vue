<script setup lang="ts">
// import { computed, ref } from 'vue';
import { getInventoryList } from '../components/inventory-store';
import InventoryTable from '../components/Inventory-Table.vue';
// import { getInventoryList } from '../components/store';

const inventory = getInventoryList

</script>

<template>
    <div>
        <InventoryTable :inventory />
    </div>
</template>
