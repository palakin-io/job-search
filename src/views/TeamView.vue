<template>
    <header-container>
        <template #title>
            <h1 class="w-full text-4xl font-normal">Teams</h1>
        </template>

        <template #subtitle>
            <h2 class="w-full my-4 text-base font-light">Great asdada asdadad as</h2>
        </template>
    </header-container>
</template>

<script>
import HeaderContainer from '../components/shared/HeaderContainer.vue';

    export default {
        name:"TeamView",
        components: { HeaderContainer },
    }
</script>