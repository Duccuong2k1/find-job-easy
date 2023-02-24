<template>
  <div
    class="flex flex-row items-center justify-between flex-wrap sticky h-14 top-0 z-100 bg-gray-900 shadow"
  >
    <div class="py-3 flex flex-row items-center justify-start">
      <router-link to="/">
        <span class="font-semibold text-2xl uppercase">Logo</span>
      </router-link>
      <div class="flex flex-row items-center justify-start ml-8">
        <div v-for="item in menus" :key="item.href" class="mx-4">
          <router-link :to="{ name: item.name }"
            ><span
              class="capitalize font-medium text-gray-400 hover:text-white"
            >
              {{ item.label }}
            </span></router-link
          >
        </div>
      </div>
    </div>
    <div class="flex flex-row items-center gap-8">
      <div
        class="flex gap-3 flex-row items-center cursor-pointer text-gray-500"
      >
        <div>Nguyen van A</div>
        <img
          src="../../assets/imgs/avatar-default.png"
          alt=""
          class="w-8 rounded-full object-cover"
        />
      </div>
      <div class="flex flex-row items-center text-gray-400">
        <span class="px-3 border-r-2 cursor-pointer">EN</span>
        <span class="px-3 cursor-pointer">VI</span>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { ref } from "vue";
export default {
  setup() {
    const menus = ref([

      {
        name: "all-jobs",
        label:"All Jobs",
      },
      {
        name: "it-story",
        label:"IT Story",
      },
      {
        name: "it-companies",
        label:"IT Companies",
      },
    ]);
    return { menus };
  },
};
</script>

<style></style>
