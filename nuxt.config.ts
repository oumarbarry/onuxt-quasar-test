export default defineNuxtConfig({
  typescript: { shim: false },

  experimental: { inlineSSRStyles: false },
  css: ['@unocss/reset/tailwind.css'],

  modules: [
    'nuxt-icon',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'nuxt-quasar-ui',
    '@nuxt/image-edge',
    '@nuxt/devtools',
  ],

  quasar: {
    sassVariables: 'assets/quasar-variables.sass',
    extras: {
      font: 'roboto-font',
      fontIcons: ['material-icons'],
    },
  },

  image: {
    domains: ['https://images.unsplash.com'],
    alias: { unsplash: 'https://images.unsplash.com' },
    unsplash: {},
  },

  sourcemap: false,
})
