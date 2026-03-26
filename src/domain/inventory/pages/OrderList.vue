<script setup lang="ts">
import { getInventoryByShortage } from '../inventory-store';


const orderlist = getInventoryByShortage


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
                    Minimum
                </td>
                
                <td>
                    Huidig
                </td>
                <td>
                    aanvullen tot
                </td>
                <td>
                    benodigd aantal
                </td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in orderlist">
                <td>
                    {{ item.name }}        
                </td>
                <td>
                    {{ item.minimumAmount }}
                </td>
                <td>
                    {{ item.actualAmount }}
                </td>
                <td>
                    {{ item.orderToMinimum }}
                </td>
                <td>
                    {{ item.orderToMinimum - item.actualAmount }}
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>