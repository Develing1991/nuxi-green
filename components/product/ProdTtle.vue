<script lang="ts">
interface Props {
  title: string
  hasMore?: boolean
}
</script>

<script setup lang="ts">
withDefaults(defineProps<Props>(), {
  title: '',
  hasMore: true,
})
</script>

<template>
  <div class="flex items-center justify-between mt-16 mb-4 px-2">
    <h2 class="text-xl font-bold max-sm:text-base">
      {{ title }}
    </h2>
    <BtnBase v-if="hasMore">
      더보기
    </BtnBase>
  </div>
</template>

<style scoped>

</style>
