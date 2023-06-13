<template>
    <main class="listings-container">
        <div v-if="emptyArray">
            No hay jobs
        </div>
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

<script lang="ts" setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";

// import { usePreviousAndNextPages } from "@/composables/usePreviousAndNextPages"
import JobListing from './JobListing.vue';
import { useJobsStore} from "@/stores/jobs"


const jobsStore = useJobsStore();
onMounted(jobsStore.FETCH_JOBS);

const route = useRoute();
const currentPage = computed(() => Number.parseInt(route.query.page as string || "1"));

const emptyArray = computed(() => {
   return FILTERED_JOBS.value.length <= 0 ? true : false;
});

const FILTERED_JOBS = computed(() => jobsStore.FILTERED_JOBS)
// let maxPage = computed(() => Math.ceil(FILTERED_JOBS.value.length / 10));

// const {previousPage, nextPage} = usePreviousAndNextPages(currentPage, maxPage)

const previousPage = computed(() => {
    let previousPage = currentPage.value - 1;
    let firstPage = 1;
    return previousPage >= firstPage ? previousPage : undefined;
});



const nextPage = computed(() => {
    let nextPage = currentPage.value + 1;
    let maxPage = Math.ceil(FILTERED_JOBS.value.length / 10);
    return nextPage <= maxPage ? nextPage : undefined;
});

const displayedJobs = computed(() => {
    let pageNumber = currentPage.value;
    let firstJobIndex = (pageNumber - 1) * 10;
    let lastJobIndex = pageNumber * 10;
    return FILTERED_JOBS.value.slice(firstJobIndex, lastJobIndex);
});
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