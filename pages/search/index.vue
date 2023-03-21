<script setup lang="ts">
definePageMeta({
  layout: 'search',
})
useHead({
  titleTemplate: (titleChunk?: string) => {
    return titleChunk ? `${titleChunk} - 검색 페이지` : '검색 페이지'
  },
})
</script>

<template>
  <TheMain>
    <ul class="">
      <li class="border-b flex justify-between  items-center">
        <p class="flex-1  p-6 mr-2 cursor-pointer" @click="$router.push('/product')">
          <Icon name="ic:baseline-access-time" size="25" class="mr-4 " />
          <a>이전 검색어</a>
        </p>
        <div class="p-4">
          <Icon name="ic:sharp-close" class=" cursor-pointer" size="30" />
        </div>
      </li>
    </ul>
  </TheMain>
</template>

<style scoped>

</style>
