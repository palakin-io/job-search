<template>
    <div class="sub">
        <div class="subnav">
            <div v-if="onJobResultsPage">
                <font-awesome-icon :icon="['fas', 'search']" class="mr-3"></font-awesome-icon>
                <span><span class="jobs-color">{{ FILTERED_JOBS.length }}</span> jobs matched</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router"
import { useJobsStore } from "../../stores/jobs";

const route = useRoute();

const onJobResultsPage = computed(() => route.name === "JobResults" ? true : false);

const jobStore = useJobsStore();
const FILTERED_JOBS = computed(() => jobStore.FILTERED_JOBS);
</script>

<style>
    .sub{
        @apply h-16 w-full border-b border-solid border-brand-gray-1 bg-white;
    }
    .subnav {
        @apply flex h-full items-center px-8
    }
    .jobs-color{
        color:  green;
    }
</style>