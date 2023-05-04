<template>
  <div
    class="container flex flex-col gap-5 p-3 mx-auto mt-5 bg-white lg:flex-row"
  >
    <div class="w-full lg:w-2/5 list-job">
      <div class="text-2xl font-medium">
        10 Job Recommended for nguyen Van a
      </div>
      <ListJobs />
    </div>
    <div class="flex-1 px-5">
      <JobDetail />
    </div>
  </div>
  <div class="container py-5 mx-auto mt-8">
    <div class="text-3xl font-semibold capitalize">Top Employers</div>
    <ListEmployer />
  </div>
  <div class="container py-5 mx-auto">
    <div class="text-3xl font-semibold capitalize">newest blog</div>
    <router-link to="/" class="flex flex-row items-center gap-2 my-2">
      <span class="text-sm font-semibold text-blue-700 capitalize"
        >view all</span
      >
      <font-awesome-icon icon=" fa-caret-right" class="text-blue-600" />
    </router-link>
    <ListNewestBlog />
  </div>
</template>

<script>
import ListJobs from "@/components/jobs/ListJobs.vue";
import JobDetail from "@/components/jobs/JobDetail.vue";
import ListEmployer from "@/components/employer/ListEmployer.vue";
import ListNewestBlog from "@/components/newest-blog/ListNewestBlog.vue";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: { ListJobs, JobDetail, ListEmployer, ListNewestBlog },
};
</script>
<style scoped>
.list-job {
  max-height: 830px;
  overflow: auto;
}
</style>
