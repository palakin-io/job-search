import { defineStore } from "pinia";

import getJobs from "@/api/getJobs";
import { useUserStore } from "./user";

export const FETCH_JOBS = "FETCH_JOBS"
export const UNIQUE_ORGS = "UNIQUE_ORGS"
export const UNIQUE_JOB_TYPES = "UNIQUE_JOB_TYPES"
export const FILTERED_JOBS =  "FILTERED_JOBS"

export const INCLUDE_JOB_BY_ORG =  "INCLUDE_JOB_BY_ORG"
export const INCLUDE_JOB_BY_TYPE =  "INCLUDE_JOB_BY_TYPE"

export const useJobsStore = defineStore("jobs", {
    state:() => ({
        jobs:[],
        filteredJobs:[]
    }),
    actions: {
        async [FETCH_JOBS](){
            let jobs = await getJobs();
            this.jobs = jobs;
        }
    },
    getters:{
        [UNIQUE_ORGS](state){
            const uniqueOrgs = new Set();
            state.jobs.forEach((job) => uniqueOrgs.add(job.organization))
            return uniqueOrgs;
        },
        [UNIQUE_JOB_TYPES](state){
            const uniqueJobTypes = new Set();
            state.jobs.forEach((job) => uniqueJobTypes.add(job.jobType))
            return uniqueJobTypes
        },
        [INCLUDE_JOB_BY_ORG]:() => (job) => {
            const userStore = useUserStore();
            if (userStore.selectedOrgs.length === 0) return true;
            return userStore.selectedOrgs.includes(job.organization)
        },
        [INCLUDE_JOB_BY_TYPE]:() => (job) =>{
            const userStore = useUserStore();
            if (userStore.selectedJobTypes.length === 0) return true;
            return userStore.selectedJobTypes.includes(job.jobType);
        },
        [FILTERED_JOBS](state){
            return state.jobs.filter((job) => this.INCLUDE_JOB_BY_ORG(job)).filter((job) => this.INCLUDE_JOB_BY_TYPE(job));
        }
    }
})