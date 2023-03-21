<script setup lang="ts">
const router = useRouter()

const search = () => {
  // input ref
  // set search pinia State...
// request search api
  router.push('')
}
</script>

<template>
  <TheHeader>
    <template #left>
      <Icon name="uil:angle-left-b" size="30" class="cursor-pointer" @click="$router.back()" />
    </template>
    <template #center>
      <!-- <span @click="$router.push('/')">제목(누르면 홈)</span> -->
      <div class="relative w-full ml-5 mr-2 ">
        <input class="border border-slate-800 w-full py-1 pl-3 pr-8 rounded" type="text">
        <button class="absolute right-2 top-0 bottom-0 my-auto flex items-center">
          <Icon name="ic:baseline-cancel" size="20" />
        </button>
      </div>
    </template>
    <template #right>
      <div class="flex items-center gap-2">
        <Icon name="ic:outline-home" size="30" class="cursor-pointer" @click="$router.push('/')" />
        <Icon name="ic:outline-shopping-cart" size="30" class="cursor-pointer" @click="search" />
      </div>
    </template>
  </TheHeader>
</template>

<style scoped>

</style>
