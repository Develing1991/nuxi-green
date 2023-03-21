<script setup lang="ts">
const breakpoints = ref({
  0: {
    itemsToShow: 2.5,
    snapAlign: 'start',
  },
  280: {
    itemsToShow: 2.5,
    snapAlign: 'start',
  },
  480: {
    itemsToShow: 3.5,
    snapAlign: 'start',
  },
  768: {
    itemsToShow: 4.5,
    snapAlign: 'start',
  },
})
</script>

<template>
  <section class="px-2">
    <!-- <ProductItem v-for="i in 10" :key="i" /> -->
    <CrslBase :items="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" :items-to-show="4" :breakpoints="breakpoints" :gap="7">
      <template #item="{ slide }">
        <!-- <BannerItem :slide="slide" /> -->
        <MainProdItem />
      </template>
    </CrslBase>
  </section>
</template>

<style scoped>

</style>
