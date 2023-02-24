<template>
  <div
    class="flex flex-col items-start justify-start header-search gap-y-5 z-50"
  >
    <h2 class="text-2xl font-semibold my-5 text-white">
      IT Jobs For "Chất" Developers
    </h2>
    <div class="flex flex-row items-center justify-between w-full gap-5">
      <label class="relative block flex-1">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2 z-10"
          ><font-awesome-icon icon="fa-sharp fa-magnifying-glass" />
        </span>
        <input
          class="placeholder:italic placeholder:text-slate-400 block bg-white w-full rounded-md py-3 pl-9 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 focus:ring-1 sm:text-sm"
          placeholder="Keyword skill (javascript, html...) Jobs"
          type="text"
          name="search"
          v-model="searchInput"
        />
      </label>

      <select
        name="location"
        id=""
        v-model="selectedLocation"
        class="px-5 py-3 bg-white rounded-md focus:border-red-500 focus:ring-red-500 border border-slate-300"
      >
        <option value="All">All cities</option>
        <option
          v-for="option in locationOption"
          :value="option.value"
          :key="option.value"
        >
          {{ option.label }}
        </option>
      </select>
      <button class="bg-red-600 px-5 py-3 rounded-md text-white font-semibold">
        Search
      </button>
    </div>
    <div class="flex flex-row items-center justify-start gap-3 mt-5">
      <div
        v-for="tag in hasTags"
        :key="tag"
        class="cursor-pointer hover:bg-white text-gray-300 hover:text-gray-700 px-3 py-1 uppercase text-sm font-medium"
      >
        {{ tag }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const searchInput = ref("");
    const selectedLocation = ref("All");
    const locationOption = ref([
      { value: "HCM", label: "Hồ Chí Minh" },
      { value: "HN", label: "Hà Nội" },
      { value: "ĐN", label: "Đà Nẵng" },
    ]);
    const hasTags = ref(["html", "css", "reactJs"]);
    return { searchInput, locationOption, selectedLocation, hasTags };
  },
};
</script>

<style>
.header-search {
  padding: 3rem 10rem;
}
</style>
