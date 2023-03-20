<script setup lang="ts">

</script>

<template>
  <Carousel>
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item bg-green-400">
        {{ slide }}
      </div>
    </Slide>

    <!-- <template #addons>
      <Navigation />
      <Pagination />
    </template> -->
  </Carousel>
</template>

<style scoped>
.carousel__item {
  min-height: 300px;
  width: 100%;
  /* background-color: green; */
  color: white;
  font-size: 20px;
  /* border-radius: 8px; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
    /* margin-top: 0px; */
  /* padding: 10px; */
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
