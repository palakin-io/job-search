<template>
    <main class="flex flex-col h-screen">
        <section class="pt-10 pb-20">
            <div class="grid grid-cols-12">
                <div class="col-span-1 col-start-1">
                </div>
                <div class="col-span-5 col-start-2">
                    <the-headline></the-headline>
                    <job-search-form></job-search-form>
                </div>
                <div class="col-span-5 col-start-7 justify-self-center self-center">
                    <img class="h-80 w80 rounded-2xl" src="https://images6.alphacoders.com/125/1257665.jpg" alt="An">
                </div>
                <div class="col-span-1 col-start-12">
                </div>
            </div>
        </section>

        <spotlight class="flex flex-row justify-center pb-16">
            <template #default="{ img, title, description }">
                <router-link to="/jobs/results" class="mx-5 flex w-72 flex-col rounded-lg border bg-brand-gray-2">
                    <img :src="img" class="object-contain">
                    <div class="mt-3 h-48 px-6 py-4">
                        <h3 class="text-lg font-medium">{{ title }}</h3>
                        <p class="mt-3 text-sm">{{ description }}</p>
                    </div>
                    <router-link to="/jobs/results" class="px-6 pb-4 text-sm text-brand-blue-1">See Jobs</router-link>
                </router-link>
            </template>
        </spotlight>
    </main>
</template>

<script setup>
    import TheHeadline from './TheHeadline.vue';
    import JobSearchForm from './JobSearchForm.vue';
    import Spotlight from './Spotlight.vue';
</script>