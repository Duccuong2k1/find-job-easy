<template>
  <div class="grid lg:grid-cols-2 grid-cols-1 gap-5 my-5">
    <NewestBlog />
    <NewestBlog />
  </div>
</template>

<script>
import NewestBlog from "./NewestBlog.vue";
export default {
  components: { NewestBlog },
};
</script>

<style></style>
