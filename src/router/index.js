import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFound from "../views/NotFound.vue";
import AllJobsView from "../views/AllJobsView.vue";
import ITStoryView from "../views/ITStoryView.vue";
import DetailCompany from "../views/ITStoryView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    title: "Jobs easy ",
  },
  {
    path: "/all-jobs",
    name: "all-jobs",
    component: AllJobsView,
  },
  {
    path: "/it-story",
    name: "it-story",
    component: ITStoryView,
  },
  {
    path: "/",
    name: "it-companies",
    component: ITStoryView,
  },
  {
    path: "/company/:companyId",
    name: "detail-company",
    component: DetailCompany,
  },
  // call page 404
  {
    path: "/:catchAll(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
