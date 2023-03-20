import { addComponent, defineNuxtModule } from '@nuxt/kit'
export default defineNuxtModule({
  setup(_, _nuxt) {
    addComponent({
      name: 'Carousel',
      export: 'Carousel',
      filePath: 'vue3-carousel',
    })
    addComponent({
      name: 'Slide',
      export: 'Slide',
      filePath: 'vue3-carousel',
    })
    addComponent({
      name: 'Navigation',
      export: 'Navigation',
      filePath: 'vue3-carousel',
    })
    addComponent({
      name: 'Pagination',
      export: 'Pagination',
      filePath: 'vue3-carousel',
    })
  },
})
