<template>
            <div class="mt-5">
                <fieldset>
                    <ul class="flex flex-row flex-wrap">
                        <li v-for="val in uniqueValues" :key="val" class="h-8 w-1/2">
                            <input  
                                :id="val" 
                                v-model="selectedValues" 
                                :value="val"
                                type="checkbox"
                                class="mr-3"
                                @change="selectValues" 
                            >
                            <label :for="val">{{ val }}</label>
                         </li>
                    </ul>
                 </fieldset>
            </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

import { useUserStore, CLEAR_SELECTIONS } from "@/stores/user";

const props = defineProps({
    header: {
        type: String,
        required: true
    },
    uniqueValues: {
        type: [Set<string>, Array<string>],
        required: true
    },
    action: {
        type: Function,
        required: true
    }
})

const selectedValues = ref<string[]>([]);

const router = useRouter();
const selectValues = () => {
    props.action(selectedValues.value);
    router.push({name:"JobResults"});
}

const userStore = useUserStore();

userStore.$onAction(({after, name}) => {
    after(() => {
        if (name === CLEAR_SELECTIONS) {
            selectedValues.value = [];
        }
    });
})
</script>