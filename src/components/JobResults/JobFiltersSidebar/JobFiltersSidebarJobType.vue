<template>
    <collapsible-accordion header="Job Types">
            <div class="mt-5">
                <fieldset>
                    <ul class="flex flex-row flex-wrap">
                        <li v-for="jobs in UNIQUE_JOB_TYPES" :key="jobs" class="h-8 w-1/2">
                            <input  
                                :id="jobs" 
                                v-model="selectedJobs" 
                                :value="jobs"
                                type="checkbox"
                                class="mr-3"
                                @change="selectJobType" 
                            >
                            <label :for="jobs">{{ jobs }}</label>
                         </li>
                    </ul>
                 </fieldset>
            </div>
        </collapsible-accordion>
</template>

<script>
import {mapState, mapActions} from "pinia"
import { useJobsStore, UNIQUE_JOB_TYPES } from "../../../stores/jobs";
import { useUserStore, ADD_SELECTED_JOB_TYPES } from "@/stores/user"
import CollapsibleAccordion from '../../shared/CollapsibleAccordion.vue';

    export default {
        name: "JobFiltersSidebarJobType",
        components: { CollapsibleAccordion },
        data(){
            return{
                selectedJobs:[]
            }
        },
        computed: {
            ...mapState(useJobsStore, [UNIQUE_JOB_TYPES])
        },
        methods: {
            ...mapActions(useUserStore, [ADD_SELECTED_JOB_TYPES]),
            selectJobType(){
                this.ADD_SELECTED_JOB_TYPES(this.selectedJobs);
                this.$router.push({name:"JobResults"});
            }
        }
    }
</script>