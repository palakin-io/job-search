<template>
    <div class="header-container">
        <div class="header">
            <slot name="title">Sample</slot>
            <slot name="subtitle">Sample</slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderContainer",
    }
</script>

<style scoped>
    .header-container{
        @apply w-full border-b border-solid border-brand-gray-1
    }

    .header {
        @apply mx-auto my-16 text-center
    }
</style>