<template>
    <div>Job {{ currentJobId }}</div>
</template>

<script>


    export default {
        name: "JobView",
        data(){
            return {

            }
        },
        computed: {
            currentJobId() {
                return this.$route.params.id
            }
        }
    }
</script>