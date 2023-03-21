<template>
  <TheHeader>
    <template #left>
      <Icon name="uil:angle-left-b" size="30" class="cursor-pointer" @click="$router.back()" />
    </template>
    <template #center>
      <span class="cursor-pointer" @click="$router.push('/')">제목(누르면 홈)</span>
      <!-- <span @click="$router.push('/')">{{ $route.meta.title }}</span> -->
    </template>
    <template #right>
      <span />
    </template>
  </TheHeader>
</template>
