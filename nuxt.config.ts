// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/main.css', 'vue3-carousel/dist/carousel.css'],

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
  ],
  imports: {
    // Auto-import pinia stores defined in `~/stores`
    dirs: ['stores'],
  },
  components: [
    {
      path: '~/components',
      // prefix: 'carousel',
      pathPrefix: false,
    },
  ],
})
