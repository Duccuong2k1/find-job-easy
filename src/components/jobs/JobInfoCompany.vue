<template>
  <div class="p-5 mt-5 bg-gray-100">
    <div class="flex flex-row items-center justify-start gap-3">
      <img
        src="../../assets/imgs/default.png"
        alt=""
        class="object-cover w-20 h-20 border"
      />
      <div>
        <div class="text-2xl font-medium">FSoft Technology</div>
        <div class="text-sm text-gray-500">
          fsoft technolygy - AI technolygy industry
        </div>
      </div>
    </div>
    <div
      class="flex flex-col items-start justify-between gap-2 mt-3 lg:flex-row lg:items-center lg:gap-5"
    >
      <div>
        <div class="flex flex-row items-center gap-2 my-2">
          <span><font-awesome-icon icon="fa-sharp  fa-gear" /></span
          ><span>product</span>
        </div>
        <div class="flex flex-row items-center gap-2 my-2">
          <span><font-awesome-icon icon="fa-sharp fa-calendar-days" /></span
          ><span>Monday - Friday</span>
        </div>
        <div class="flex flex-row items-center gap-2 my-2">
          <span><font-awesome-icon icon="fa-sharp fa-clock" /></span
          ><span>No OT </span>
        </div>
      </div>
      <div>
        <div class="flex flex-row items-center gap-2 my-2">
          <span><font-awesome-icon icon=" fa-user" /></span><span>1-50</span>
        </div>
        <div class="flex flex-row items-center gap-2 my-2">
          <span><font-awesome-icon icon="fa-sharp  fa-earth-americas" /></span
          ><span>Singapore</span>
        </div>
      </div>
      <router-link
        :to="{ name: 'detail-company', params: { companyId: '123' } }"
      >
        <button
          class="px-5 py-2 text-red-600 transition-all delay-75 rounded outline hover:bg-red-600 hover:text-white"
        >
          view company profile
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
