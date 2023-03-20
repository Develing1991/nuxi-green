<script setup lang="ts">

</script>

<template>
  <section>
    <CrslBase :items="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]">
      <template #item="{ slide }">
        <div class="carousel__item bg-green-400 w-full text-xl flex justify-center items-center cursor-pointer min-h-[350px]">
          {{ slide }}
        </div>
      </template>
    </CrslBase>
  </section>
</template>

<style scoped>
</style>
