<template>
  <router-link :to="{ name: 'home' }">
    <div
      class="border bg-white flex flex-col justify-between items-center py-10 hover:shadow-lg transition-all delay-75 cursor-pointer"
    >
      <img
        src="../../assets/imgs/default.png"
        alt="logo"
        class="w-36 h-36 object-cover"
      />
      <div class="font-semibold my-5">FPT Software</div>
      <div class="flex flex-row items-center flex-wrap justify-center gap-2">
        <span class="text-red-500 border-b border-dashed">6 jobs</span> -
        <span>Ho Chi Minh</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {};
</script>

<style></style>
