<template>
  <div class="flex flex-row items-center justify-start gap-3">
    <img
      :src="image ? image : '../../assets/imgs/default.png'"
      class="w-72 h-40 object-cover"
      alt="image blog"
    />
    <div>
      <div
        class="text-gray-500 hover:text-red-500 font-medium lg:text-lg text-sm cursor-pointer"
      >
        IT Salary Report 2022-2023: By developer type, programming languages &
        job expectation
      </div>
      <p class="text-ellipsis-2 text-gray-500 text-sm my-2">
        IT Salary Report, salary in tech industry by developer type, programming
        languages & job expectati...
      </p>
      <router-link to="/" class="flex flex-row items-center gap-2">
        <span class="text-blue-500 capitalize text-sm">read more</span>
        <font-awesome-icon icon=" fa-caret-right" class="text-blue-500" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const image =
      "https://itviec.com/assets/it_stories/salary-report-en-9063b2d7ce844f98061efec99963c3629c9017c95a2d3ec5bf491f40234be882.svg";
    return { image };
  },
};
</script>

<style></style>
