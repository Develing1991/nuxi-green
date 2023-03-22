<script setup lang="ts">
withDefaults(defineProps<Props>(), {
  cols: 2,
})
</script>

<script  lang="ts">
interface Props {
  cols?: number
}
</script>

<template>
  <div class="card border-b border-gray-400 pb-4 " :class="cols === 1 ? 'flex  gap-4 items-center max-[360px]:gap-x-2' : ''">
    <!-- <div class="card max-w-[200px] p-1"> -->
    <div class="cursor-pointer ">
      <a>
        <img src="https://cdn.msgtong.com/new_partner/_THUMB_400x280_MTMM9AYT_20210308122202.jpg" class="min-w-[120px]" alt="">
      </a>
    </div>
    <div class="flex flex-col items-start gap-1">
      <div class="text-xs text-gray-700">
        피자에땅
      </div>
      <h3 class="text-sm line-clamp-2 cursor-pointer text-start">
        상품 타이틀 상품 타이틀 상품 타이틀 상품 상품 타이틀 상품 타이틀 상품 타이틀 상품
      </h3>
      <p class="flex gap-2 items-end flex-wrap">
        <span class="text-sm font-bold text-red-500">50%</span>
        <span class="text-sm font-bold ">5,000</span>
        <span class="text-xs line-through text-gray-500">10,000</span>
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>
