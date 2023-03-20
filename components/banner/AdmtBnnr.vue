<script setup lang="ts">

</script>

<template>
  <section class="mt-20 max-[480px]:mt-10 max-[360px]:mt-7 p-2">
    <CrslBase
      :items="[1, 2]"
      :autoplay="4000"
      :wrap-around="true"
      :has-page="false"
      :has-navi="false"
      :gap="5"
    >
      <template #item="{ slide }">
        <div class="min-h-[130px] w-full rounded-xl bg-green-500 text-white text-xl flex justify-center items-center cursor-pointer max-[480px]:min-h-[100px] max-[360px]:min-h-[70px] ">
          ad - {{ slide }}
        </div>
      </template>
    </CrslBase>
  </section>
</template>

  <style  scoped>
  </style>
