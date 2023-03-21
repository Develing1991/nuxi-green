<script setup lang="ts">
const arr = ref([
  '선택',
  '낮은 가격순',
  '판매량순',
  '리뷰많은순',
  '높은 가격순',
  '최신순'])
const show = ref(false)
const selected = ref('선택')
const onSelectToggle = (item: string) => {
  show.value = !show.value
  selected.value = item
}
</script>

<template>
  <div aria-label="정렬 선택" class="relative">
    <button class="w-28 border rounded py-1 border-gray-800" @click="onSelectToggle('선택')">
      {{ selected }}
    </button>
    <ul v-show="show" class="w-28 border rounded border-gray-800 flex flex-col items-center justify-center absolute top-0 left-0 ">
      <li v-for="(item, index) in arr" :key="index" class="py-1 border-b w-full text-center cursor-pointer bg-white hover:bg-cyan-300" @click="onSelectToggle(item)">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
