<template>
  <ProdHeader />
  <ProdBuyBttm v-if="$route.name === 'product-id'" />
  <slot />
</template>
