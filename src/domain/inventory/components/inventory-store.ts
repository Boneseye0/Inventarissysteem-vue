
import { computed, ref } from "vue";
import type { Ref } from "vue";

export type Inventory = {
    id: number;
    name:   string;
    actualAmount:   number;
    minimumAmount:  number;
}[];

export type InventoryItem = {
    id: number;
    name:   string;
    actualAmount:   number;
    minimumAmount:  number;
};

export const inventory: Ref<Inventory> = ref([
    {
    id:             0,
    name:           'Spaghetti',
    actualAmount:   5,
    minimumAmount:  1
    },
    {
    id:             1,
    name:           'Gehakt',
    actualAmount:   0,
    minimumAmount:  1
    },
    {
    id:             2,
    name:           'Tomaten',
    actualAmount:   0,
    minimumAmount:  5
    },
    {
    id:             3,
    name:           'Paprika',
    actualAmount:   0,
    minimumAmount:  3
    },
    {
    id:             4,
    name:           'Ui',
    actualAmount:   0,
    minimumAmount:  2
    },
    {
    id:             5,
    name:           'Italiaanse kruiden',
    actualAmount:   0,
    minimumAmount:  1
    },
    {
    id:             6,
    name:           'Kaas',
    actualAmount:   0,
    minimumAmount:  1
    },
])

let id = ref(7)
export const nextId = computed(() => id.value)
export const getInventoryList = computed(() => inventory.value);
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