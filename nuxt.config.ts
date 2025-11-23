export default defineNuxtConfig({
  compatibilityDate: '2024-11-22',
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon'
  ],

  app: {
    head: {
      title: 'Marc Trösken - Cloud Engineering Leader',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Passionate Leader in Fintech guiding Cloud Engineers in Cloud Infrastructure.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.ts'
  }
})
