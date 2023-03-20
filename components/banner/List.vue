<script setup lang="ts">

</script>

<template>
  <CarouselBase :items="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]">
    <template #item="{ slide }">
      <div class="carousel__item bg-green-400 min-h-[300px] w-full text-xl flex justify-center items-center">
        {{ slide }}
      </div>
    </template>
  </CarouselBase>
</template>

<style scoped>
</style>
