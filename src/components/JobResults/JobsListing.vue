<template>
    <main class="listings-container">
        <ol>
            <job-listing 
                v-for="(job, index) in displayedJobs" :key="index" 
                :job="job"
            >
            </job-listing>
        </ol>
        <div class="page-number-container">
            <div class="page-number">
                <p class="flex-grow text-sm"> Page {{ currentPage }}</p>
                <div class="previous-page">
                    <router-link v-if="previousPage" class="mx-3 text-sm font-semibold text-brand-blue-1" :to="{ name: 'JobResults', query: {page: previousPage}}">Back</router-link>
                    <router-link v-if="nextPage" class="mx-3 text-sm font-semibold text-brand-blue-1" :to="{ name: 'JobResults', query: {page: nextPage}}">Next</router-link>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { mapActions, mapState } from 'pinia';

import JobListing from './JobListing.vue';
import { useJobsStore, FETCH_JOBS, FILTERED_JOBS} from "@/stores/jobs"

    export default {
    name: "JobsListing",
    components: {
        JobListing
    },
    data() {
        return {
            pageString: '1'
        };
    },
    computed: {
        currentPage(){
            return Number.parseInt(this.$route.query.page || this.pageString) ;
        },
        ...mapState(useJobsStore, {FILTERED_JOBS}),
        previousPage(){
            let previousPage = this.currentPage - 1;
            let firstPage = this.pageString;
            return previousPage >= firstPage ? previousPage : undefined;
        },
        nextPage(){
            let nextPage = this.currentPage + 1;
            let maxPage = Math.ceil(this.FILTERED_JOBS.length / 10);
            return nextPage <= maxPage ? nextPage : undefined;
        },
        displayedJobs(){
            let pageNumber = this.currentPage;
            let firstJobIndex = (pageNumber - 1) * 10;
            let lastJobIndex = pageNumber * 10;
            return this.FILTERED_JOBS.slice(firstJobIndex, lastJobIndex);
        }
    },
    async mounted() {
        this.FETCH_JOBS();
    },
    methods: {
        ...mapActions(useJobsStore, [FETCH_JOBS]),
    }
}
</script>

<style scoped>
    .listings-container{
        @apply flex-auto bg-brand-gray-2 p-8
    }
    .page-number-container{
        @apply mx-auto mt-8
    }
    .page-number{
        @apply flex flex-row flex-nowrap
    }
    .previous-page{
        @apply flex items-center justify-center
    }
</style>