<template>
  <div
    class="p-3 odd:border odd:border-l-8 odd:border-red-500 odd:bg-orange-50 flex flex-row gap-5 items-start justify-start my-2 hover:shadow-md cursor-pointer"
  >
    <img
      src="../../assets/imgs/default.png"
      alt=""
      class="w-24 h-24 object-cover border"
      loading="lazy"
    />
    <div class="flex flex-col gap-3 flex-1">
      <div class="flex flex-row flex-wrap justify-between items-start">
        <div class="text-xl font-bold flex-1">
          Front-end developer (reactJs , HTML,CSS)
        </div>
        <span class="px-3 py-1 text-xs bg-blue-500 text-white capitalize">
          new for you
        </span>
      </div>
      <div
        class="flex flex-row items-center justify-start gap-3 text-sm text-green-500"
      >
        <i class="text-green-500 block">
          <font-awesome-icon icon="fa-sharp fa-sack-dollar" />
        </i>
        <span>Thoả thuận</span>
      </div>
      <div class="flex flex-row flex-wrap items-center justify-between">
        <ul class="list-disc block ml-4">
          <li>Du lich</li>
          <li>tang lương</li>
          <li>review 2/ năm</li>
        </ul>
        <span class="px-3 py-1 text-sm inline-block text-gray-500 capitalize">
          Ho chi minh
        </span>
      </div>
      <div
        class="flex flex-col lg:flex-row lg:items-center items-start justify-between"
      >
        <div
          class="flex flex-row flex-wrap items-center justify-start gap-3 mt-3"
        >
          <div
            v-for="tag in tags"
            :key="tag"
            class="cursor-pointer hover:border-red-500 border text-gray-500 hover:text-red-600 px-3 py-1 uppercase text-xs font-medium"
          >
            {{ tag }}
          </div>
        </div>
        <span class="px-3 py-1 text-sm inline-block text-blue-500 capitalize">
          1h
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const tags = ref(["html", "javascript"]);
    return { tags };
  },
};
</script>

<style></style>
