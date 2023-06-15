import { defineStore } from "pinia";
import { ref } from "vue";

export const ADD_SELECTED_ORG = "ADD_SELECTED_ORG"
export const ADD_SELECTED_JOB_TYPES = "ADD_SELECTED_JOB_TYPES"
export const ADD_SELECTED_DEGREES = "ADD_SELECTED_DEGREES"
export const CLEAR_SELECTIONS = "CLEAR_SELECTIONS"

export interface UserState {
    isLoggedIn:boolean;
    selectedOrgs: string[];
    selectedJobTypes: string[];
    selectedDegrees: string[];
}


export const useUserStore = defineStore("user", () => {
    const isLoggedIn = ref(false);
    const selectedOrgs = ref<string[]>([]);
    const selectedJobTypes = ref<string[]>([])
    const selectedDegrees = ref<string[]>([])


    const logInUser = () => {
        isLoggedIn.value = true;
    }

    const ADD_SELECTED_ORG = (organizations:string[]) => {
        selectedOrgs.value = organizations;
    }

    const ADD_SELECTED_JOB_TYPES = (jobs:string[]) => {
        selectedJobTypes.value = jobs;
    }

    const ADD_SELECTED_DEGREES = (degrees:string[]) => {
        selectedDegrees.value = degrees;
    }

    const CLEAR_SELECTIONS = () => {
        selectedDegrees.value = [];
        selectedJobTypes.value = [];
        selectedOrgs.value = [];
    }

    return {
        isLoggedIn, selectedDegrees, selectedJobTypes, selectedOrgs, ADD_SELECTED_DEGREES, ADD_SELECTED_JOB_TYPES, ADD_SELECTED_ORG, logInUser, CLEAR_SELECTIONS
    }
})

// export const useUserStore = defineStore("user", {
//     state: (): UserState => ({
//         isLoggedIn: false,
//         selectedOrgs: [],
//         selectedJobTypes: [],
//         selectedDegrees: []
//     }),
//     actions: {
//         logInUser() {
//             this.isLoggedIn = true;
//         },
//         [ADD_SELECTED_ORG](orgs: string[]){
//             this.selectedOrgs = orgs;
//         },
//         [ADD_SELECTED_JOB_TYPES](jobs: string[]){
//             this.selectedJobTypes = jobs;
//         },
//         [ADD_SELECTED_DEGREES](degrees: string[]){
//             this.selectedDegrees = degrees;
//         },
//         [CLEAR_SELECTIONS](){
//             this.selectedDegrees = [];
//             this.selectedJobTypes = [];
//             this.selectedOrgs = [];
//         },
//     }
// })