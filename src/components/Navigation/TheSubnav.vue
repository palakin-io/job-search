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

<script>
import { mapState } from "pinia"

import { useJobsStore, FILTERED_JOBS } from "../../stores/jobs";
    export default {
        name: "TheSubnav",
        data() {
            return{
                
            }
        },
        computed: {
            ...mapState(useJobsStore, [FILTERED_JOBS]),
            onJobResultsPage(){
                return this.$route.name === "JobResults" ? true : false;
            }
        }
    }
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