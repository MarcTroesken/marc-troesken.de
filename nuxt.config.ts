// https://nuxt.com/docs/api/configuration/nuxt-config
const siteUrl = 'https://marc-troesken.de'
const isProd = process.env.NODE_ENV === 'production'
const securityHeaders: Record<string, string> = {
  ...(isProd ? { 'Strict-Transport-Security': 'max-age=15552000; includeSubDomains' } : {}),
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
}

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: !isProd },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/sitemap',
  ],

  site: {
    url: siteUrl,
    name: 'Marc Troesken',
  },

  sitemap: {
    siteUrl,
    zeroRuntime: isProd,
  },

  googleFonts: {
    families: {
      'Instrument Serif': [400],
      'Space Grotesk': [300, 400, 500, 600, 700],
      'Syne': [400, 500, 600, 700, 800],
    },
    display: 'swap',
  },

  nitro: {
    prerender: {
      routes: isProd ? ['/sitemap.xml', '/sitemap_index.xml'] : [],
    },
    routeRules: {
      '/**': {
        headers: securityHeaders,
      },
      '/_nuxt/**': {
        headers: {
          ...securityHeaders,
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      },
      '/favicon*': {
        headers: {
          ...securityHeaders,
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      },
      '/apple-touch-icon.png': {
        headers: {
          ...securityHeaders,
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      },
      '/sitemap*.xml': {
        headers: {
          ...securityHeaders,
          'Cache-Control': 'public, max-age=3600',
        },
      },
      '/__sitemap__/**': {
        headers: {
          ...securityHeaders,
          'Cache-Control': 'public, max-age=3600',
        },
      },
      '/robots.txt': {
        headers: {
          ...securityHeaders,
          'Cache-Control': 'public, max-age=3600',
        },
      },
    },
  },

  app: {
    head: {
      title: 'Marc Trösken — Cloud Engineering Leader',
      titleTemplate: '%s | Marc Trösken',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Marc Troesken is a Cloud Engineering Leader in Fintech. As Expertise Lead at DKB Service GmbH, he builds and leads teams for scalable cloud infrastructure in Berlin.' },
        { name: 'author', content: 'Marc Troesken' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'keywords', content: 'Cloud Engineering, AWS, Fintech, Berlin, DKB, Engineering Leadership, Infrastructure as Code, Terraform, Cloud Architecture, Platform Engineering' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Marc Troesken' },
        { property: 'og:title', content: 'Marc Troesken — Cloud Engineering Leader' },
        { property: 'og:description', content: 'Cloud Engineering Leader in Fintech. Building and leading platform teams for scalable cloud infrastructure at DKB Service GmbH.' },
        { property: 'og:url', content: siteUrl },
        { property: 'og:image', content: `${siteUrl}/og-image.jpg` },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:locale', content: 'en_US' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Marc Troesken — Cloud Engineering Leader' },
        { name: 'twitter:description', content: 'Cloud Engineering Leader in Fintech. Expertise Lead at DKB Service GmbH.' },
        { name: 'twitter:image', content: `${siteUrl}/og-image.jpg` },
      ],
      link: [
        { rel: 'canonical', href: siteUrl },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      ],
      htmlAttrs: {
        lang: 'en',
      },
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Marc Trösken',
            url: siteUrl,
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
