<template>
    <div class="jobs-container">
        <job-filters-sidebar></job-filters-sidebar>
        <jobs-listing></jobs-listing>
    </div>
</template>

<script>
import JobFiltersSidebar from '../components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue';
import JobsListing from '../components/JobResults/JobsListing.vue';

    export default{
        name: "JobResultsView",
        components: {
            JobFiltersSidebar, JobsListing
        },
        data(){
            return{

            }
        }
    }
</script>

<style>
    .jobs-container {
        @apply flex w-full flex-row flex-nowrap
    }
</style>