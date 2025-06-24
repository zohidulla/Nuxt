import tailwindcss from '@tailwindcss/vite'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title: 'Code Editor',
    },
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
  ],
  googleFonts: {
    display: 'swap',
    families: {
      'Open Sans': {
        wght: '300..800',
        ital: '300..800',
      },
    },
  },
  icon: {
    mode: 'svg',
    aliases: {
      code: 'heroicons:code-bracket-square-solid',
      cog: 'heroicons:cog-6-tooth-solid',
      fire: 'heroicons:fire-solid',
      puzzle: 'heroicons:puzzle-piece-solid',
      plane: 'heroicons:paper-airplane-solid',
      bars: 'heroicons:bars-3-solid',
      xMark: 'heroicons:x-mark-solid',
      globe: 'heroicons:globe-alt-solid',
      bracket: 'heroicons:code-bracket-solid',
    },
  },
})
