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
      <li class="border-b p-5 flex justify-between cursor-pointer">
        <p>
          <Icon name="ic:baseline-access-time" size="25" class="mr-4" @click="$router.back()" />
          <a>이전 검색어</a>
        </p>
        <Icon name="ic:sharp-close" size="25" @click="$router.back()" />
      </li>
    </ul>
  </TheMain>
</template>

<style scoped>

</style>
