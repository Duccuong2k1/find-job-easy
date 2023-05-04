<template>
  <div
    class="flex flex-row items-start justify-start gap-5 p-3 my-2 cursor-pointer odd:border odd:border-l-8 odd:border-red-500 odd:bg-orange-50 hover:shadow-md"
  >
    <img
      src="../../assets/imgs/default.png"
      alt=""
      class="object-cover w-24 h-24 border"
      loading="lazy"
    />
    <div class="flex flex-col flex-1 gap-3">
      <div class="flex flex-row flex-wrap items-start justify-between">
        <div class="flex-1 text-xl font-bold">
          Front-end developer (reactJs , HTML,CSS)
        </div>
        <span class="px-3 py-1 text-xs text-white capitalize bg-blue-500">
          new for you
        </span>
      </div>
      <div
        class="flex flex-row items-center justify-start gap-3 text-sm text-green-500"
      >
        <i class="block text-green-500">
          <font-awesome-icon icon="fa-sharp fa-sack-dollar" />
        </i>
        <span>Thoả thuận</span>
      </div>
      <div class="flex flex-row flex-wrap items-center justify-between">
        <ul class="block ml-4 list-disc">
          <li>Du lich</li>
          <li>tang lương</li>
          <li>review 2/ năm</li>
        </ul>
        <span class="inline-block px-3 py-1 text-sm text-gray-500 capitalize">
          Ho chi minh
        </span>
      </div>
      <div
        class="flex flex-col items-start justify-between lg:flex-row lg:items-center"
      >
        <div
          class="flex flex-row flex-wrap items-center justify-start gap-3 mt-3"
        >
          <div
            v-for="tag in tags"
            :key="tag"
            class="px-3 py-1 text-xs font-medium text-gray-500 uppercase border cursor-pointer hover:border-red-500 hover:text-red-600"
          >
            {{ tag }}
          </div>
        </div>
        <span class="inline-block px-3 py-1 text-sm text-blue-500 capitalize">
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
