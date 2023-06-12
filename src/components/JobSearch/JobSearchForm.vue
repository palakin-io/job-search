<template>
    <form action="" class="job-form" @submit.prevent="searchForJobs">
        
        <font-awesome-icon :icon="['fas', 'search']" class="search-icon"></font-awesome-icon>
        <div class="form-container">
            <div class="form-cs">
                <label class="role-label" for="role">Role</label>
                <text-input 
                    id="role"
                    v-model="role"
                    placeholder="Software engineer"
                >
                </text-input>
            </div>
            <span class="form-span">in</span>
            <div class="form-cs">
                <label class="role-label" for="location">Where?</label>
                <text-input 
                    id="location"
                    v-model="location"
                    placeholder="Location" 
                >
                </text-input>
            </div>
        </div>
        <action-button text="Search" type="secondary" class="rounded-r-3xl"></action-button>
    </form>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router";

import ActionButton from "@/components/shared/ActionButton.vue"
import TextInput from "../shared/TextInput.vue";

const role = ref("");
const location = ref("");

const router = useRouter()

const searchForJobs = () => {
    router.push({name: "JobResults", query: {role: role.value, location: location.value} })
}
</script>

<style>
    .job-form{
        @apply flex h-12 w-full items-center rounded-3xl border border-solid border-brand-gray-3
    }

    .search-icon{
        @apply ml-4 mr-3;
    }
    .form-container{
        @apply flex h-full flex-1 flex-nowrap text-base font-light;
    }
    .form-cs{
        @apply relative flex h-full flex-1 items-center pr-3 pl-3;
    }
    .role-label{
        @apply absolute left-0 -top-10;
    }
    .form-input{
        @apply w-full text-lg font-normal focus:outline-none;
    }
    .form-span{
        @apply flex h-full items-center border-l border-r border-brand-gray-3 bg-brand-gray-2 px-3 ;
    }
</style>