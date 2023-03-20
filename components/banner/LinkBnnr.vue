<script setup lang="ts"></script>

<template>
  <!-- <section class="mt-12 overflow-x-auto px-2 ">
    <ul class="flex gap-3">
      <li v-for="i in 20" :key="i" class="flex flex-1 min-w-[12%]">
        <RouterLink to="/">
          <img
            src="https://greenpng.com/wp-content/uploads/2020/09/untitleddesign_1_original-1-300x300.png"
            alt=""
          >
        </RouterLink>
      </li>
    </ul>
  </section> -->
  <section class="mt-12 overflow-x-auto max-sm:px-2">
    <ul class="min-w-[800px] flex gap-3 px-2">
      <li v-for="i in 20" :key="i" class="flex-1 min-w-[12%] max-[480px]:min-w-[9%]">
        <RouterLink to="/" class="block">
          <img
            src="https://greenpng.com/wp-content/uploads/2020/09/untitleddesign_1_original-1-300x300.png"
            alt=""
          >
        </RouterLink>
      </li>
    </ul>
  </section>
</template>

  <style  scoped>
  </style>
