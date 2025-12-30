// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/sitemap',
  ],

  sitemap: {
    siteUrl: 'https://marc-troesken.de',
  },

  googleFonts: {
    families: {
      'Instrument Serif': [400],
      'Space Grotesk': [300, 400, 500, 600, 700],
      'Syne': [400, 500, 600, 700, 800],
    },
    display: 'swap',
  },

  app: {
    head: {
      title: 'Marc Trösken — Cloud Engineering Leader',
      titleTemplate: '%s | Marc Trösken',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Marc Trösken ist Cloud Engineering Leader im Fintech-Sektor. Als Expertise Lead bei DKB Service GmbH führt er Teams für skalierbare Cloud-Infrastrukturen in Berlin.' },
        { name: 'author', content: 'Marc Trösken' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'keywords', content: 'Cloud Engineering, AWS, Fintech, Berlin, DKB, Engineering Leadership, Infrastructure as Code, Terraform, Cloud Architecture' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Marc Trösken' },
        { property: 'og:title', content: 'Marc Trösken — Cloud Engineering Leader' },
        { property: 'og:description', content: 'Cloud Engineering Leader im Fintech-Sektor. Expertise Lead bei DKB Service GmbH mit Fokus auf skalierbare Cloud-Infrastrukturen.' },
        { property: 'og:url', content: 'https://marc-troesken.de' },
        { property: 'og:image', content: 'https://marc-troesken.de/og-image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:locale', content: 'de_DE' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Marc Trösken — Cloud Engineering Leader' },
        { name: 'twitter:description', content: 'Cloud Engineering Leader im Fintech-Sektor. Expertise Lead bei DKB Service GmbH.' },
        { name: 'twitter:image', content: 'https://marc-troesken.de/og-image.jpg' },
      ],
      link: [
        { rel: 'canonical', href: 'https://marc-troesken.de' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      ],
      htmlAttrs: {
        lang: 'de',
      },
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Marc Trösken',
            url: 'https://marc-troesken.de',
            jobTitle: 'Expertise Lead - Cloud Engineering',
            worksFor: {
              '@type': 'Organization',
              name: 'DKB Service GmbH',
              url: 'https://www.dkb.de',
            },
            sameAs: [
              'https://linkedin.com/in/marc-troesken',
              'https://github.com/MarcTroesken',
            ],
            knowsAbout: [
              'Cloud Architecture',
              'AWS',
              'Infrastructure as Code',
              'Terraform',
              'Engineering Leadership',
              'Fintech',
            ],
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Berlin',
              addressCountry: 'DE',
            },
          }),
        },
      ],
    },
  },

  css: ['~/assets/css/main.css'],
})
