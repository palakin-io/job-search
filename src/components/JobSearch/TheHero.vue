<template>
    <main>
        <section class="flex flex-col h-screen pt-10 pb-20">
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
    </main>
</template>

<script>
    import TheHeadline from './TheHeadline.vue';
    import JobSearchForm from './JobSearchForm.vue';

    export default {
        name:"TheHero",
        components: {TheHeadline, JobSearchForm},
    }
</script>