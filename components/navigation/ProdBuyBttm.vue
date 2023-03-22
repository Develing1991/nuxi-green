<script setup lang="ts">

</script>

<template>
  <ClientOnly>
    <Teleport to="body">
      <div class="fixed bottom-0 max-w-3xl mx-auto left-0 right-0 bg-green-400 opacity-90 z-[9] ">
        <div class="flex justify-between p-3 gap-2 h-16">
          <BtnBase class="flex-1 bg-red-100">
            <Icon name="material-symbols:favorite-outline" size="30" class="cursor-pointer" />
          </BtnBase>
          <BtnBase class="flex-1 bg-blue-400">
            <Icon name="ic:outline-shopping-cart" size="30" class="cursor-pointer" />
          </BtnBase>

          <BtnBase class="bg-red-400 flex-[9]">
            구매하기
          </BtnBase>
        </div>
      </div>
    </Teleport>
  </ClientOnly>
</template>

<style scoped>

</style>
