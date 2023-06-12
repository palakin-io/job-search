<template>
    <div class="accordion-container">
        <div class="accordion-button" @click="open">
            <h3>{{ header }}</h3>
            <font-awesome-icon :icon="caretIcon"></font-awesome-icon>
        </div>
        <div v-if="!isOpen" class="mt-5 w-full">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
defineProps({
    header: {
        type: String,
        required: true
    }
});
let isOpen = ref("false");

const open = () => {
    isOpen.value = !isOpen.value;
};

const caretIcon = computed(() => isOpen.value ? ["fas", "angle-up"] : ["fas", "angle-down"] )
</script>

<style scoped>
    .accordion-container{
        @apply border-b border-solid border-brand-gray-2 py-5
    }
    .accordion-button{
        @apply flex cursor-pointer flex-wrap items-center justify-between
    }
    h3{
        @apply text-base font-semibold
    }
</style>