<script setup lang="ts">
withDefaults(defineProps<ICarousel>(), {
  itemsToShow: 1,
  itemsToScroll: 1,
  wrapAround: false,
  snapAlign: 'center',
  transition: 300,
  autoplay: 0,
  settings: () => ({}),
  breakpoints: undefined,
  modelValue: 0,
  mouseDrag: true,
  touchDrag: true,
  pauseAutoplayOnHover: false,
  dir: 'ltr',
  hasNavi: true,
  hasPage: true,
  items: () => [1, 2], // object array
  gap: 0,
})
</script>

<script lang="ts">
export type SnapAlign = 'start' | 'end' | 'center' | 'center-even' | 'center-odd'

export type Dir = 'rtl' | 'ltr'
export interface ICarousel {
  itemsToShow?: number //
  itemsToScroll?: number //
  modelValue?: number
  transition?: number
  throttle?: number
  autoplay?: number
  snapAlign?: SnapAlign //
  wrapAround?: boolean
  pauseAutoplayOnHover?: boolean
  mouseDrag?: boolean
  touchDrag?: boolean
  dir?: Dir
  breakpoints?: Record<string, any>
  settings?: Record<string, any>
  hasNavi?: boolean
  hasPage?: boolean
  items?: number[] // object[]
  gap?: number
}
export interface ITest {
  name?: string
}
</script>

<template>
  <Carousel
    :items-to-show="itemsToShow"
    :items-to-scroll="itemsToScroll"
    :wrap-around="wrapAround"
    :snap-align="snapAlign"
    :transition="transition"
    :autoplay="autoplay"
    :settings="settings"
    :breakpoints="breakpoints"
    :model-value="modelValue"
    :mouse-drag="mouseDrag"
    :touch-drag="touchDrag"
    :pause-autoplay-on-hover="pauseAutoplayOnHover"
    :dir="dir"
  >
    <Slide v-for="slide in items" :key="slide" :style="{ '--gap': `${gap}px` }">
      <slot name="item" :slide="slide" />
    </Slide>

    <!-- <template #addons>
      <Navigation />
      <Pagination />
    </template> -->
  </Carousel>
</template>

<style scoped>
.carousel__slide {
  /* padding: 10px; */
  padding: 0 var(--gap);
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
