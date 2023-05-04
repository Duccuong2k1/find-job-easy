<template>
  <div class="flex flex-col items-start justify-start">
    <div v-for="item in menus" :key="item.href" class="mx-4">
      <router-link :to="{ name: item.name }"
        ><span class="font-medium text-gray-400 capitalize hover:text-white">
          {{ item.label }}
        </span></router-link
      >
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
        label: "All Jobs",
      },
      {
        name: "it-story",
        label: "IT Story",
      },
      {
        name: "it-companies",
        label: "IT Companies",
      },
    ]);
    return { menus };
  },
};
</script>

<style></style>
