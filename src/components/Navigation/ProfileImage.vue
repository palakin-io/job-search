<template>
    <img 
    :src="image" alt=""
    class="h-8 w-8 rounded-3xl object-contain"
    >
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const image = ref("https://somoskudasai.com/wp-content/uploads/2021/02/portada_fullmetal-alchemist-4.jpg")

</script>