<template>
  <div
    class="sticky top-0 flex flex-row flex-wrap items-center justify-between bg-gray-900 shadow h-14 z-100"
  >
    <div class="flex flex-row items-center justify-start py-3">
      <router-link to="/">
        <span class="text-2xl font-semibold uppercase shadow-md">
          <span class="text-white">Job</span
          ><span class="text-red-800">Ease</span></span
        >
      </router-link>
      <div class="items-center justify-start hidden ml-8 lg:flex-row lg:flex">
        <div v-for="item in menus" :key="item.href" class="mx-4">
          <router-link :to="{ name: item.name }"
            ><span
              class="font-medium text-gray-400 capitalize hover:text-white"
            >
              {{ item.label }}
            </span></router-link
          >
        </div>
      </div>
    </div>
    <button class="block lg:hidden" @click="toggleMenu">
      <font-awesome-icon :icon="['fas', 'bars']" class="text-2xl text-white" />
    </button>
    <div class="items-center hidden gap-8 lg:flex-row lg:flex">
      <div
        class="flex flex-row items-center gap-3 text-gray-500 cursor-pointer"
      >
        <div>Nguyen van A</div>
        <img
          src="../../assets/imgs/avatar-default.png"
          alt=""
          class="object-cover w-8 rounded-full"
        />
      </div>
      <div class="flex flex-row items-center text-gray-400">
        <span class="px-3 border-r-2 cursor-pointer">EN</span>
        <span class="px-3 cursor-pointer">VI</span>
      </div>
    </div>
  </div>
  <MenuSlideout v-if="isMenuOpen" />
</template>

<script lang="js">
import MenuSlideout from "@/lib/shares/MenuSlideout.vue";
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
        const isMenuOpen = ref(false);
        const toggleMenu = () => {
            isMenuOpen.value = !isMenuOpen.value;
        };
        return { menus, isMenuOpen, toggleMenu };
    },
    components: { MenuSlideout }
};
</script>

<style></style>
