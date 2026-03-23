<script setup lang="ts">
// import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { deleteInventoryItem } from './inventory-store';

const router = useRouter()

const props = defineProps({
    inventory: {
        type:   Array,
    }
})

const remove = deleteInventoryItem

</script>

<template>
<div>
    <table>
        <thead>
            <tr>
                <td>
                    
                </td>
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
            <tr v-for="(item) in props.inventory" :key="item.id">
                <p>{{ item.id }}</p>
                <td>{{ item.name }}</td>
                <td>{{ item.minimumAmount }}</td>
                <td><input type="number"  v-model="item.actualAmount" :id="`${item.id}`"></td><p>{{ item.actualAmount }}</p>
                <td><button @click="router.push(`/edit/${item.id}`)">Edit</button></td>
                <td><button @click="remove(item.id)">Delete</button></td>
            </tr>
        </tbody>
    </table>
</div>
</template>