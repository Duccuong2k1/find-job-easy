<template>
  <div class="container mx-auto bg-white mt-5 p-3 flex flex-row gap-5">
    <div class="list-job w-2/5">
      <div class="text-2xl font-medium">
        10 Job Recommended for nguyen Van a
      </div>
      <ListJobs />
    </div>
    <div class="px-5 flex-1">
      <JobDetail />
    </div>
  </div>
  <div class="container mx-auto py-5 mt-8">
    <div class="text-3xl font-semibold capitalize">Top Employers</div>
    <ListEmployer />
  </div>
  <div class="container mx-auto py-5">
    <div class="text-3xl font-semibold capitalize">newest blog</div>
    <router-link to="/" class="flex flex-row items-center gap-2 my-2">
      <span class="text-blue-700 capitalize text-sm font-semibold"
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
