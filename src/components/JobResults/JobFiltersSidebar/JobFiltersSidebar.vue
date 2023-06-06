<template>
    <div class="sidebar-container">
        <section class="pb-5">
            <div class="sidebar-inside">
                <h3 class="sidebar-title">What do you want to do?</h3>
                <div class="button-filter">
                    <action-button text="Clear Filters" type="secondary"></action-button>
                </div>
            </div>

            <collapsible-accordion header="Job Types">
                das
            </collapsible-accordion>

            <job-filters-sidebar-orgs></job-filters-sidebar-orgs>
        </section>
    </div>
</template>

<script>
import ActionButton from '../../shared/ActionButton.vue';
import CollapsibleAccordion from '../../shared/CollapsibleAccordion.vue';
import JobFiltersSidebarOrgs from './JobFiltersSidebarOrgs.vue';

    export default {
        name: "JobFiltersSidebar",
        components: { ActionButton, CollapsibleAccordion, JobFiltersSidebarOrgs },
        data() {
            return {

            }
        } 
    }
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