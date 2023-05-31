<template>
    <div class="accordion-container">
        <div class="accordion-button" @click="open">
            <h3>Organizations</h3>
            <font-awesome-icon :icon="caretIcon"></font-awesome-icon>
        </div>
        <div v-if="isOpen" class="mt-5 w-full">Child</div>
    </div>
</template>

<script>
    export default {
        name: "CollapsibleAccordion",
        data(){
            return {
                isOpen: false,
            }
        },
        computed:{
            caretIcon() {
                return this.isOpen ? ["fas", "angle-up"] : ["fas", "angle-down"]
            },
        },
        methods: {
            open() {
                this.isOpen = !this.isOpen;
            }
        }
    }
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