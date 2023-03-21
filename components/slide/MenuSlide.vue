<script setup lang="ts">
const show = ref(false)
const arr = ref([
  '낮은 가격순',
  '판매량순',
  '리뷰많은순',
  '높은 가격순',
  '최신순'])
</script>

<template>
  <div>
    <BtnBase class="flex border border-gray-800" @click="show = true">
      랭킹순
      <Icon name="ic:twotone-arrow-drop-down" size="15" />
    </BtnBase>
    <Teleport to="body">
      <div v-show="show" class="h-full bg-black absolute w-full z-10 opacity-80 max-w-3xl mx-auto left-0 right-0 cursor-pointer" @click="show = false">
        <!-- background -->
      </div>
      <ClientOnly>
        <Transition name="slide-fade">
          <ul v-show="show" class="bg-white absolute w-full bottom-0 opacity-100 z-10 max-w-3xl mx-auto left-0 right-0 border">
            <li class="flex justify-between p-2 items-center border-b-2 border-gray-300">
              <span class="font-bold">
                정렬
              </span>
              <Icon name="ic:baseline-close" size="25" class="cursor-pointer" @click="show = false" />
            </li>

            <li v-for="(item, index) in arr" :key="index" class="px-4 py-2 hover:bg-cyan-200 cursor-pointer" @click="show = false">
              <!-- <Icon name="ic:outline-radio-button-checked" size="20" /> -->
              <Icon name="ic:outline-radio-button-unchecked" size="20" />
              <a class="ml-3">
                {{ item }}
              </a>
            </li>
          </ul>
        </Transition>
      </ClientOnly>
    </Teleport>
  </div>
</template>

<style scoped>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-from{
    /* opacity: 0; */
    transform: translateY(200px);
}
.slide-fade-leave-from{
    transform: translateY(0px);
}

.slide-fade-enter-active {
  transition: transform .2s ease-out;
}

.slide-fade-leave-active {
    transition: transform .2s ease-out;
  /* transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1); */
}

.slide-fade-enter-to {
  transform: translateY(0px);
  /* opacity: 0; */
}
.slide-fade-leave-to{
    transform: translateY(200px);
}
</style>
