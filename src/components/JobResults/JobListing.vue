<template>
    <li class="jobs-list-container">
        <router-link :to="jobPageLink" class="link">
            <div class="jobs-list-item">
                   <h2 class="mb-2 text-2xl">{{ job.title }}</h2>
                <div class="job-list-location">
                    <div class="mr-5">
                        <span>{{ job.organization }}</span>
                    </div>
                    <ul>
                        <li v-for="location in job.locations" :key="location" class="mr-5 inline-block">
                            <span>{{ location }}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="px-8 py-4">
                <div>
                    <h3 class="mt-1 mb-2">Qualifications</h3>
                    <div>
                        <ul class="qualifications-list">
                            <li v-for="quals in job.minimumQualifications" :key="quals">
                                {{ quals }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="mt-2 text-center">
                    <router-link :to="jobPageLink" class="text-brand-blue-1">Expand</router-link>
                </div>
            </div>
        </router-link>
    </li>
</template>

<script lang="ts" setup>
import type { Job } from '@/api/types';
import { computed, type PropType } from 'vue';



const props = defineProps({
    job: {
        type: Object as PropType<Job>,
        required: true
    }
})

const jobPageLink = computed(() => {
    return `/jobs/results/${props.job.id}`;
})
</script>

<style scoped>
    .jobs-list-container{
        @apply mb-7
    }
    .link{
        @apply mx-auto block rounded border border-solid border-brand-gray-2 bg-white hover:shadow-gray
    }
    .jobs-list-item {
        @apply mx-8 border-b border-solid border-brand-gray-2 pt-5 pb-2
    }
    .job-list-location{
        @apply flex flex-row align-middle
    }
    .qualifications-list{
        @apply list-disc pl-8
    }
</style>