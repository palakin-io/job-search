<template>
    <img 
    :src="image" alt=""
    class="h-8 w-8 rounded-3xl object-contain"
    >
</template>

<script>
    export default{
        name: "ProfileImage",
        data() {
            return {
                image: "https://somoskudasai.com/wp-content/uploads/2021/02/portada_fullmetal-alchemist-4.jpg"
            }
        }
    }
</script>