<template>
  <div class="bg-gray-900 px-3">
    <nav class="container mx-auto my-0">
      <HeaderTop />
      <HeaderSearch />
    </nav>
  </div>
</template>

<script>
import HeaderSearch from "./HeaderSearch.vue";
import HeaderTop from "./HeaderTop.vue";
export default {
  components: { HeaderTop, HeaderSearch },
};
</script>

<style></style>
