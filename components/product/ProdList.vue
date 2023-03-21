<script setup lang="ts">
withDefaults(defineProps<Props>(), {
  cols: 2,
})
</script>

<script  lang="ts">
interface Props {
  cols: number
}
</script>

<template>
  <div class="grid gap-4 p-4 max-[360px]:gap-x-2 max-[360px]:p-2 max-[279px]:grid-cols-1" :class="cols === 2 ? 'grid-cols-2' : 'grid-cols-1'">
    <!-- {{ cols }} -->
    <slot />
  </div>
</template>

<style scoped>

</style>
