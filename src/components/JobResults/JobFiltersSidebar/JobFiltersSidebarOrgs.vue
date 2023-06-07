<template>
    <collapsible-accordion header="Organizations">
            <div class="mt-5">
                <fieldset>
                    <ul class="flex flex-row flex-wrap">
                        <li v-for="orgs in UNIQUE_ORGS" :key="orgs" class="h-8 w-1/2">
                            <input  
                                :id="orgs" 
                                v-model="selectedOrgs" 
                                :value="orgs"
                                type="checkbox"
                                class="mr-3"
                                @change="selectOrg" 
                            >
                            <label :for="orgs">{{ orgs }}</label>
                         </li>
                    </ul>
                 </fieldset>
            </div>
        </collapsible-accordion>
</template>

<script>
import {mapState, mapActions} from "pinia"
import { useJobsStore, UNIQUE_ORGS } from "../../../stores/jobs";
import { useUserStore, ADD_SELECTED_ORG } from "@/stores/user"
import CollapsibleAccordion from '../../shared/CollapsibleAccordion.vue';

    export default {
        name: "JobFiltersSidebarOrgs",
        components: { CollapsibleAccordion },
        data(){
            return{
                selectedOrgs:[]
            }
        },
        computed: {
            ...mapState(useJobsStore, [UNIQUE_ORGS])
        },
        methods: {
            ...mapActions(useUserStore, [ADD_SELECTED_ORG]),
            selectOrg(){
                this.ADD_SELECTED_ORG(this.selectedOrgs)
                this.$router.push({name:"JobResults"});
            }
        }
    }
</script>