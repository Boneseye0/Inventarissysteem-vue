<template>
<div>
    <table>
        <thead>
            <tr>
                <td>
                    Naam
                </td>
                <td>
                    Minimum
                </td>
                <td>
                    Huidig
               </td>
           </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in inventory" :key="index">
                <td>{{ item.name }}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { getInventoryList } from '../components/inventory-store';
// import { getInventoryList } from '../components/store';

const inventory = getInventoryList

</script>