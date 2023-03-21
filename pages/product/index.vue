<script setup lang="ts">
definePageMeta({
  layout: 'product',
})
const cols = ref<number>(2)
const gridToggle = (col: number) => {
  cols.value = col
}
</script>

<template>
  <TheMain>
    <section class="flex justify-end gap-4 px-4 mt-4">
      <!-- <SlctBase /> -->
      <!-- <BtnBase class="flex border border-gray-800">
            랭킹순
            <Icon name="ic:twotone-arrow-drop-down" size="15" />
        </BtnBase> -->
      <MenuSlide />
      <div class="hidden  max-[480px]:block">
        <!-- <div class=""> -->
        <Icon v-show="cols === 1" name="ic:sharp-grid-view" size="25" class="cursor-pointer" @click="gridToggle(2)" />
        <Icon v-show="cols === 2" name="ic:sharp-view-list" size="25" class="cursor-pointer" @click="gridToggle(1)" />
      </div>
    </section>

    <section>
      <ProdList :cols="cols">
        <ProdItem v-for="i in 10" :key="i" :cols="cols" />
      </ProdList>
    </section>
  </TheMain>
</template>

<style scoped>

</style>
