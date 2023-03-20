// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
  ],
  imports: {
    // Auto-import pinia stores defined in `~/stores`
    dirs: ['stores'],
  },
  //   components: [
  //     {
  //         path: "~/components/layouts",
  //         pathPrefix: false,
  //     },
  //   ],
})
