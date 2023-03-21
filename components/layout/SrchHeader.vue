<script setup lang="ts">
const router = useRouter()

const search = () => {
  // input ref
  // set search pinia State...
// request search api
  router.push('/product')
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
        <input class="border border-slate-800 w-full py-1 pl-3 pr-8 rounded" type="text" @keypress.enter="$router.push('/product')">
        <button class="absolute right-2 top-0 bottom-0 my-auto flex items-center">
          <Icon name="ic:baseline-cancel" size="20" />
        </button>
      </div>
    </template>
    <template #right>
      <Icon name="ic:baseline-search" size="30" class="cursor-pointer" @click="search" />
    </template>
  </TheHeader>
</template>

<style scoped>

</style>
