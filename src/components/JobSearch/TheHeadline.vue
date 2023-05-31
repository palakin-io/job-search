<template>
    <section class="mb-16">
        <h1><span :class="actionClasses">{{ actions[currentActionIndex] }}</span> <br> for everyone</h1>
        <h2>Find your next job at Bobo Corp</h2>
    </section>
</template>

<script>
import  nextElementList  from "@/utils/nextElementList";

    export default {
        name: "TheHeadline",
        data() {
            return {
                actions : ["Build", "Create", "Design", "Code"],
                currentActionIndex: 0,
                interval: null
            }
        },
        computed: {
            actionClasses(){
                return {
                    build: this.actions[this.currentActionIndex] === "Build",
                    create: this.actions[this.currentActionIndex] === "Create",
                    design: this.actions[this.currentActionIndex] === "Design",
                    code: this.actions[this.currentActionIndex] === "Code"
                }
            }
        },
        created(){
            this.changeTitle();
        },
        beforeUnmount(){
            clearInterval(this.interval);
        },
        methods: {
            changeTitle(){
                this.interval = setInterval(() => {
                    this.currentActionIndex = nextElementList(this.currentActionIndex, this.actions); 
                }, 3000)
            }
        }
    }
</script>

<style scoped>
    .build{
        color: #1a73e8;
    }
    .create{
        color: #34a853;
    }
    .design{
        color: #f9ab00;
    }
    .code {
        color: #d93025;
    }
    h1{
        @apply mb-14 text-8xl font-bold tracking-tighter
    }
    h2{
        @apply text-3xl font-light
    }
</style>