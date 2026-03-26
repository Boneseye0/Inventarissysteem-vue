
import { computed, ref } from "vue";
import type { Ref } from "vue";

export type InventoryItem = {
    id: number;
    name:   string;
    actualAmount:   number;
    minimumAmount:  number;
    orderToMinimum: number;
};

export const inventory: Ref<InventoryItem[]> = ref([
    {
    id:             0,
    name:           'Spaghetti',
    actualAmount:   5,
    minimumAmount:  1,
    orderToMinimum: 10
    },
    {
    id:             1,
    name:           'Gehakt',
    actualAmount:   0,
    minimumAmount:  1,
    orderToMinimum: 5
    },
    {
    id:             2,
    name:           'Tomaten',
    actualAmount:   4,
    minimumAmount:  5,
    orderToMinimum: 20
    },
    {
    id:             3,
    name:           'Paprika',
    actualAmount:   0,
    minimumAmount:  3,
    orderToMinimum: 20
    },
    {
    id:             4,
    name:           'Ui',
    actualAmount:   0,
    minimumAmount:  2,
    orderToMinimum: 50
    },
    {
    id:             5,
    name:           'Italiaanse kruiden',
    actualAmount:   0,
    minimumAmount:  1,
    orderToMinimum: 5
    },
    {
    id:             6,
    name:           'Kaas',
    actualAmount:   0,
    minimumAmount:  1,
    orderToMinimum: 10
    },
])

const id = ref(7)

export const nextId = computed(() => id.value)
export const getInventoryList = computed(() => inventory.value);
export const getInventoryByShortage = computed(() => inventory.value.filter(item => item.actualAmount < item.minimumAmount))
export const getInventoryItemById = (id :number) => computed(() => inventory.value.find(inventoryItem => inventoryItem.id === id))


export const addInventoryItem = (item :InventoryItem) =>{
    inventory.value.push(item)
    id.value++
}

export const editInventoryItem =  (inventoryItem :InventoryItem) => {
    const inventoryIndex = inventory.value.findIndex(item => item.id === inventoryItem.id)
    if (inventoryIndex < 0) return console.log('item not found')
        inventory.value.splice(inventoryIndex, 1, inventoryItem)
}

export const deleteInventoryItem =  (id :number) => {
    const inventoryIndex = inventory.value.findIndex(item => item.id === id)
    if (inventoryIndex < 0) return console.log('item not found')
        inventory.value.splice(inventoryIndex, 1,)
}