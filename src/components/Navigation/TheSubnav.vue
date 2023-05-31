<template>
    <div class="sub">
        <div class="subnav">
            <div v-if="onJobResultsPage">
                <font-awesome-icon :icon="['fas', 'search']" class="mr-3"></font-awesome-icon>
                <span><span class="jobs-color">2234</span> jobs matched</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TheSubnav",
        data() {
            return{
                
            }
        },
        computed: {
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