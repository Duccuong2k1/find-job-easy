<template>
  <div
    class="z-50 flex flex-col items-start justify-start header-search gap-y-5"
  >
    <h2 class="my-5 text-2xl font-semibold text-white">
      IT Jobs For "Chất" Developers
    </h2>
    <div
      class="flex flex-col justify-between w-full gap-5 lg:items-center lg:flex-row"
    >
      <label class="relative flex-1 block">
        <span class="absolute inset-y-0 left-0 z-10 flex items-center pl-2"
          ><font-awesome-icon icon="fa-sharp fa-magnifying-glass" />
        </span>
        <input
          class="block w-full py-3 bg-white rounded-md shadow-sm placeholder:italic placeholder:text-slate-400 pl-9 focus:outline-none focus:border-red-500 focus:ring-red-500 focus:ring-1 sm:text-sm"
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
        class="px-5 py-3 bg-white border rounded-md focus:border-red-500 focus:ring-red-500 border-slate-300"
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
      <button class="px-5 py-3 font-semibold text-white bg-red-600 rounded-md">
        Search
      </button>
    </div>
    <div class="flex flex-row items-center justify-start gap-3 mt-5">
      <div
        v-for="tag in hasTags"
        :key="tag"
        class="px-3 py-1 text-sm font-medium text-gray-300 uppercase cursor-pointer hover:bg-white hover:text-gray-700"
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
  padding: 3rem 0rem;
}
@media screen and (min-width: 768px) {
  .header-search {
    padding: 3rem 10rem;
  }
}
</style>
