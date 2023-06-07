import { defineStore } from "pinia";

export const ADD_SELECTED_ORG = "ADD_SELECTED_ORG"
export const ADD_SELECTED_JOB_TYPES = "ADD_SELECTED_JOB_TYPES"

export const useUserStore = defineStore("user", {
    state: () => ({
        isLoggedIn: false,
        selectedOrgs: [],
        selectedJobTypes: [],
    }),
    actions: {
        logInUser() {
            this.isLoggedIn = true;
        },
        [ADD_SELECTED_ORG](orgs){
            this.selectedOrgs = orgs;
        },
        [ADD_SELECTED_JOB_TYPES](jobs){
            this.selectedJobTypes = jobs;
        }
    }
})