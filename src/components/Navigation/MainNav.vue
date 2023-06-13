<template>
    <header :class="['w-full','text-sm', headerClassHeight]">
        <div class="fixed top-0 left-0 h-16 w-full bg-white">
            <div class="mx-auto flex flex-nowrap h-full border-b border-solid border-brand-gray-1 px-8">
                <router-link to="/" class="flex h-full items-center text-xl">PD Careers</router-link>
                <nav class="ml-12 h-full">
                    <ul class="flex h-full list-none">
                        <li 
                            v-for="items in menuItems" 
                            :key="items.text" class="ml-9 h-full first:ml-0">
                            <router-link :to="items.url" class="flex h-full items-center py-2.5">{{ items.text }}</router-link>
                        </li>
                    </ul>
                </nav>
                <div class="ml-auto flex h-full items-center">
                    <ActionButton v-if="!isLoggedIn"  text="Sign In" type="secondary" @click="logInUser"></ActionButton>
                    <ProfileImage v-else></ProfileImage>
                </div>
            </div>
            <the-subnav v-if="isLoggedIn"></the-subnav>
        </div>
    </header>
</template>

<script lang="ts" setup>
import { useUserStore } from "@/stores/user";
import { ref, computed } from "vue";

import ActionButton from '../shared/ActionButton.vue';
import ProfileImage from './ProfileImage.vue';
import TheSubnav from './TheSubnav.vue'


const menuItems = ref([
    { text: "Teams", url: '/teams' },
    { text: "Locations", url: '/' },
    { text: "Life At Bobo Corp", url: '/' },
    { text: "How we hire", url: '/' },
    { text: "Students", url:'/' },
    { text: "Jobs", url:'/jobs/results' }
])

const userStore = useUserStore();
const isLoggedIn = computed(() => userStore.isLoggedIn);
const headerClassHeight = computed(() => {
    return{
        "h-16": !isLoggedIn.value,
        "h-32": isLoggedIn.value
    }
})
const logInUser = userStore.logInUser;
</script>