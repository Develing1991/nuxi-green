<script setup lang="ts">

</script>

<template>
  <Teleport to="body">
    <nav class="fixed bottom-0 max-w-3xl mx-auto left-0 right-0 bg-green-400 opacity-90 z-[9]">
      <ul class="flex justify-around p-2">
        <li>
          <Icon name="ic:outline-home" size="30" class="cursor-pointer" />
        </li>
        <li>
          <Icon name="ic:baseline-search" size="30" class="cursor-pointer" @click="$router.push('/search')" />
        </li>
        <li>
          <Icon name="material-symbols:favorite-outline" size="30" class="cursor-pointer" />
        </li>
        <li>
          <Icon name="ic:outline-shopping-cart" size="30" class="cursor-pointer" />
        </li>
        <li>
          <Icon name="tabler:user-heart" size="30" class="cursor-pointer" />
        </li>
      </ul>
    </nav>
  </Teleport>
</template>

<style scoped>

</style>
