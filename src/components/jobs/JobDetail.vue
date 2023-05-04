<template>
  <div>
    <div class="sticky top-0 left-0 bg-white border-b z-100">
      <div class="text-xl font-semibold">
        Fresher Front-end developer (HTML, CSS, JS, VueJs)
      </div>
      <div class="text-sm text-gray-400">Fsoft</div>
      <div class="flex flex-row items-center justify-between gap-5 my-5">
        <button
          class="w-full px-5 py-3 font-semibold text-white bg-red-600 rounded"
        >
          Apply now
        </button>
        <span class="block cursor-pointer">
          <font-awesome-icon icon=" fa-heart" class="px-3 text-3xl" />
        </span>
      </div>
    </div>
    <div class="overflow-auto h-3/4">
      <div class="flex flex-col gap-3 py-5 border-b">
        <div class="flex flex-row items-center justify-start gap-3 mt-3">
          <div
            v-for="tag in tags"
            :key="tag"
            class="px-3 py-1 text-xs font-medium text-gray-500 uppercase border cursor-pointer hover:border-red-500 hover:text-red-600"
          >
            {{ tag }}
          </div>
        </div>
        <div
          class="flex flex-row items-center justify-start gap-3 text-sm text-green-500"
        >
          <i class="block text-green-500">
            <font-awesome-icon icon="fa-sharp fa-sack-dollar" />
          </i>
          <span>Thoả thuận</span>
        </div>
        <div
          class="flex flex-row items-center justify-start gap-3 text-sm text-gray-500"
        >
          <i class="block">
            <font-awesome-icon icon=" fa-location-dot" />
          </i>
          <p>758/35 Xô Viết Nghệ Tĩnh, Phường 25, Binh Thanh, Ho Chi Minh</p>
          <span class="border-b border-dashed">see map</span>
        </div>
        <div
          class="flex flex-row items-center justify-start gap-3 text-sm text-gray-500"
        >
          <i class="block">
            <font-awesome-icon icon=" fa-chalkboard-user" />
          </i>
          <span class="capitalize">remote </span>
        </div>
        <div
          class="flex flex-row items-center justify-start gap-3 text-sm text-blue-500"
        >
          <i class="block">
            <font-awesome-icon icon="fa-sharp fa-calendar-days" />
          </i>
          <span>17 minute ago</span>
        </div>
      </div>
      <div class="my-3">
        <div class="text-xl font-medium">Job Description</div>
        <ul class="mt-3 ml-10 list-disc">
          <li>
            Collaborate with a team of developers and designers to develop
            mobile application on multiple platforms
          </li>
          <li>application on multiple platforms</li>
          <li>
            a team of developers and designers to develop mobile application on
            multiple platforms
          </li>
        </ul>
      </div>
      <div class="my-3">
        <div class="text-xl font-medium">Your Skills and Experience</div>
        <ul class="mt-3 ml-10 list-disc">
          <li>English language proficiency</li>
          <li>Highly proficient in rendering components with Native APIs</li>
          <li>
            Collaborate with a team of developers and designers to develop
            mobile application on multiple platforms
          </li>
        </ul>
      </div>
      <JobInfoCompany />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import JobInfoCompany from "./JobInfoCompany.vue";
export default {
  components: { JobInfoCompany },
  setup() {
    const tags = ref(["html", "javascript"]);
    return { tags };
  },
};
</script>

<style></style>
