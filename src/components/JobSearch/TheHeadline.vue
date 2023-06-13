<template>
    <section class="mb-16">
        <h1><span :class="actionClasses">{{ actions[currentActionIndex] }}</span> <br> for everyone</h1>
        <h2>Find your next job at Bobo Corp</h2>
    </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

import  nextElementList  from "@/utils/nextElementList";

const actions = ref(["Build", "Create", "Design", "Code"]);
const currentActionIndex = ref(0)
const interval = ref(null);

const actionClasses = computed(() => {
    return {
        build: actions.value[currentActionIndex.value] === "Build",
        create: actions.value[currentActionIndex.value] === "Create",
        design: actions.value[currentActionIndex.value] === "Design",
        code: actions.value[currentActionIndex.value] === "Code"
    }
});

const changeTitle = () => {
    interval.value = setInterval(() => {
    currentActionIndex.value = nextElementList(currentActionIndex.value, actions.value); 
    }, 3000);
};
onMounted(changeTitle);
onBeforeUnmount(() => clearInterval(interval.value))
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