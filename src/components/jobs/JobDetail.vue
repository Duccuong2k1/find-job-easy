<template>
  <div>
    <div class="border-b">
      <div class="text-xl font-semibold">
        Fresher Front-end developer (HTML, CSS, JS, VueJs)
      </div>
      <div class="text-gray-400 text-sm">Fsoft</div>
      <div class="flex flex-row items-center justify-between my-5 gap-5">
        <button
          class="px-5 py-3 bg-red-600 text-white font-semibold w-full rounded"
        >
          Apply now
        </button>
        <span class="block cursor-pointer">
          <font-awesome-icon icon=" fa-heart" class="text-3xl px-3" />
        </span>
      </div>
    </div>
    <div class="overflow-auto h-3/4">
      <div class="border-b py-5 flex flex-col gap-3">
        <div class="flex flex-row items-center justify-start gap-3 mt-3">
          <div
            v-for="tag in tags"
            :key="tag"
            class="cursor-pointer hover:border-red-500 border text-gray-500 hover:text-red-600 px-3 py-1 uppercase text-xs font-medium"
          >
            {{ tag }}
          </div>
        </div>
        <div
          class="flex flex-row items-center justify-start gap-3 text-sm text-green-500"
        >
          <i class="text-green-500 block">
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
        <ul class="list-disc ml-10 mt-3">
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
        <ul class="list-disc ml-10 mt-3">
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
