import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import JobResultsPage from "@/views/JobResultsView.vue";
import JobsView from "@/views/JobsView.vue"
import TeamsView from "@/views/TeamView.vue";

const routes = [
    {
        path: "/", name: "Home", component: HomeView,
    },
    {
        path:"/jobs/results", name: "JobResults", component: JobResultsPage, 
    },
    {
        path:"/jobs/results/:id", name: "JobsId", component: JobsView, 
    },
    {
        path:"/teams", name: "Teams", component: TeamsView, 
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
    scrollBehavior(){
        return {top : 0, left: 0, behavior: "auto"}
    }
})

export default router;