<script setup lang="ts">
// import { computed, ref } from 'vue';
import { getInventoryList } from '../inventory-store';
import InventoryTable from '../components/Inventory-Table.vue';


const inventory = getInventoryList

</script>

<template>
    <div>
        <InventoryTable :inventory />
    </div>
</template>
