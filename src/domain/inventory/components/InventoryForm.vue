<script setup lang="ts">
import { ref } from 'vue';
import type { InventoryItem } from './inventory-store';
import { useRouter } from 'vue-router';

const router = useRouter()

const props = defineProps<{
    inventoryItem:  InventoryItem,
}>();


const newInventoryItem = ref({...props.inventoryItem})

const emit = defineEmits([
    'submit',
    ])

const submit = () => {
    emit('submit', newInventoryItem.value)
    router.push('/')
}
const cancel = () => {
    router.push('/')
}
</script>

<template>
    <div>
        <table>
            <thead>
                <tr>
                    <td>
                        Naam
                    </td>
                    <td>
                        Minumale vooraad
                    </td>
                    <td>
                        Huidige vooraad
                    </td>                    
                </tr>                
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input type="text" placeholder="new item" v-model="newInventoryItem.name">
                    </td>
                    <td>
                        <input type="number" v-model="newInventoryItem.minimumAmount">
                    </td>
                    <td>
                        <input type="number" v-model="newInventoryItem.actualAmount">
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td>{{ newInventoryItem.name }}</td>
                </tr>
                <tr>
                    <td>
                        {{ newInventoryItem.minimumAmount }}
                    </td>
                </tr>
                <tr>
                    <td>
                        {{ newInventoryItem.actualAmount }}
                    </td>
                </tr>
                <tr>
                    <td>
                        {{ newInventoryItem.id }}
                    </td>
                </tr>
                <tr>
                    <td>
                        <button @click="cancel">Annuleren</button>
                    </td>
                    <td>
                        <button @click="submit">Opslaan</button>
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>