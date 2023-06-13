import { defineStore } from "pinia";

export const ADD_SELECTED_ORG = "ADD_SELECTED_ORG"
export const ADD_SELECTED_JOB_TYPES = "ADD_SELECTED_JOB_TYPES"

export interface UserState {
    isLoggedIn:boolean;
    selectedOrgs: string[];
    selectedJobTypes: string[];
}

export const useUserStore = defineStore("user", {
    state: (): UserState => ({
        isLoggedIn: false,
        selectedOrgs: [],
        selectedJobTypes: [],
    }),
    actions: {
        logInUser() {
            this.isLoggedIn = true;
        },
        [ADD_SELECTED_ORG](orgs: string[]){
            this.selectedOrgs = orgs;
        },
        [ADD_SELECTED_JOB_TYPES](jobs: string[]){
            this.selectedJobTypes = jobs;
        }
    }
})