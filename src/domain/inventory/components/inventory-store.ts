import { computed, ref } from "vue";
import type { Ref } from "vue";

type Inventory = {
    id: number;
    name:   string;
    actualAmount:   number;
    minimumAmount:  number;
}[];

export const inventory: Inventory = ref([
    {
    id:             0,
    name:           'Spaghetti',
    actualAmount:   0,
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


export const getInventoryList = computed(() => inventory.value);

