<template>
    <button 
        :class="buttonClass"
        >
            {{ text }}
    </button>
</template>

<script>

export default{
    name: "ActionButton",
    props:{
        text: {
            type: String,
            required: true
        },
        type:{
            type: String,
            required: false,
            default: "primary",
            validator(value){
                return["primary", "secondary"].includes(value);
            }
        }
    },
    data() {
        return {
            
        };
    },
    computed: {
        buttonClass() {
            return this.type 
        }
    },
    methods: {
        
    }
}
</script>

<style scoped>
    button{
        @apply  px-5 py-3 font-medium;
    }
    .primary{
        @apply rounded text-white bg-brand-blue-1 hover:shadow-blue;
    }
    .secondary{
        @apply bg-transparent text-brand-blue-1 hover:bg-brand-blue-2 hover:text-white;
    }
</style>