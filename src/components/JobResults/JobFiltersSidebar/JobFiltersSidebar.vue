<template>
    <div class="sidebar-container">
        <section class="pb-5">
            <div class="sidebar-inside">
                <h3 class="sidebar-title">What do you want to do?</h3>
                <div class="button-filter">
                    <action-button text="Clear Filters" type="secondary"></action-button>
                </div>
            </div>

            <job-filter-sidebar-group header="Job Types" :unique-values="UNIQUE_JOB_TYPES" :action="addJobType"></job-filter-sidebar-group>
            <job-filter-sidebar-group header="Organizations" :unique-values="UNIQUE_ORGS" :action="addSelectedOrg"></job-filter-sidebar-group>
        </section>
    </div>
</template>

<script setup>
import { computed } from "vue"

import ActionButton from '../../shared/ActionButton.vue';
import JobFilterSidebarGroup from './JobFilterSidebarGroup.vue';

import { useJobsStore } from "@/stores/jobs";
import { useUserStore } from "@/stores/user";

const jobsStore = useJobsStore();
const UNIQUE_ORGS = computed(() => jobsStore.UNIQUE_ORGS); 
const UNIQUE_JOB_TYPES = computed(() => jobsStore.UNIQUE_JOB_TYPES); 

const userStore = useUserStore();
const addJobType = userStore.ADD_SELECTED_JOB_TYPES;
const addSelectedOrg = userStore.ADD_SELECTED_ORG;


</script>

<style scoped>
    .sidebar-container{
        @apply flex w-96 flex-col border-r border-solid border-brand-gray-1 bg-white p-4
    }
    .sidebar-inside{
        @apply flex flex-row justify-between
    }
    .sidebar-title{
        @apply my-4 text-base font-semibold
    }
    .button-filter{
        @apply flex items-center text-sm
    }
</style>