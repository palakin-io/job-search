<template>
    <collapsible-accordion :header="header">
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
        </collapsible-accordion>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

import CollapsibleAccordion from '../../shared/CollapsibleAccordion.vue';


const props = defineProps({
    header: {
        type: String,
        required: true
    },
    uniqueValues: {
        type: Set,
        required: true
    },
    action: {
        type: Function,
        required: true
    }
})

const selectedValues = ref([]);

const router = useRouter();
const selectValues = () => {
    props.action(selectedValues.value);
    router.push({name:"JobResults"});
}
</script>