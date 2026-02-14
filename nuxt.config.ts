// https://nuxt.com/docs/api/configuration/nuxt-config
const siteUrl = 'https://marc-troesken.de'
const canonicalUrl = `${siteUrl}/`
const isProd = process.env.NODE_ENV === 'production'
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  "font-src 'self' data:",
  "connect-src 'self'",
  'upgrade-insecure-requests',
].join('; ')

const securityHeaders: Record<string, string> = {
  ...(isProd ? { 'Strict-Transport-Security': 'max-age=15552000; includeSubDomains' } : {}),
  'Content-Security-Policy': contentSecurityPolicy,
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Resource-Policy': 'same-origin',
  'X-Permitted-Cross-Domain-Policies': 'none',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'X-Powered-By': '',
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
    url: canonicalUrl,
    name: 'Marc Troesken',
  },

  sitemap: {
    zeroRuntime: isProd,
    urls: [
      { loc: '/', lastmod: new Date().toISOString().split('T')[0] },
    ],
  },

  googleFonts: {
    families: {
      'Instrument Serif': [400],
      'Space Grotesk': [400, 500, 600],
      'Syne': [600, 700, 800],
    },
    subsets: ['latin'],
    display: 'swap',
    preload: true,
    prefetch: true,
  },

  nitro: {
    compressPublicAssets: isProd,
    prerender: {
      routes: isProd ? ['/sitemap.xml'] : [],
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
      '/fonts/**': {
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
      title: 'Marc Troesken — Cloud Engineering Leader in Fintech | Berlin',
      titleTemplate: '%s | Marc Trösken',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Marc Troesken is a Cloud Engineering Leader at DKB in Berlin. He builds and leads platform teams for scalable AWS infrastructure in fintech.' },
        { name: 'author', content: 'Marc Troesken' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'keywords', content: 'Cloud Engineering, AWS, Fintech, Berlin, DKB, Engineering Leadership, Infrastructure as Code, Terraform, Cloud Architecture, Platform Engineering' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Marc Troesken' },
        { property: 'og:title', content: 'Marc Troesken — Cloud Engineering Leader' },
        { property: 'og:description', content: 'Cloud Engineering Leader in Fintech. Building and leading platform teams for scalable cloud infrastructure at DKB Service GmbH.' },
        { property: 'og:url', content: canonicalUrl },
        { property: 'og:image', content: `${siteUrl}/og-image.jpg` },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Portrait of Marc Troesken, Cloud Engineering Leader' },
        { property: 'og:locale', content: 'en_US' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Marc Troesken — Cloud Engineering Leader' },
        { name: 'twitter:description', content: 'Cloud Engineering Leader in Fintech. Expertise Lead at DKB Service GmbH.' },
        { name: 'twitter:image', content: `${siteUrl}/og-image.jpg` },
      ],
      link: [
        { rel: 'canonical', href: canonicalUrl },
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
            '@graph': [
              {
                '@type': 'WebSite',
                '@id': `${siteUrl}/#website`,
                url: siteUrl,
                name: 'Marc Troesken',
                description: 'Personal portfolio of Marc Troesken, Cloud Engineering Leader in Fintech at DKB Service GmbH, Berlin.',
                publisher: { '@id': `${siteUrl}/#person` },
                inLanguage: 'en',
              },
              {
                '@type': 'ProfilePage',
                '@id': `${siteUrl}/#profilepage`,
                url: siteUrl,
                name: 'Marc Troesken — Cloud Engineering Leader',
                isPartOf: { '@id': `${siteUrl}/#website` },
                about: { '@id': `${siteUrl}/#person` },
                mainEntity: { '@id': `${siteUrl}/#person` },
                inLanguage: 'en',
                dateModified: '2026-02-14',
              },
              {
                '@type': 'Person',
                '@id': `${siteUrl}/#person`,
                name: 'Marc Troesken',
                url: siteUrl,
                image: `${siteUrl}/og-image.jpg`,
                description: 'Cloud Engineering Leader in Fintech. Building and leading platform teams for scalable cloud infrastructure at DKB Service GmbH in Berlin.',
                jobTitle: 'Expertise Lead - Cloud Engineering',
                worksFor: {
                  '@type': 'Organization',
                  name: 'DKB Service GmbH',
                  url: 'https://www.dkb.de',
                },
                hasOccupation: {
                  '@type': 'Occupation',
                  name: 'Expertise Lead - Cloud Engineering',
                  occupationLocation: { '@type': 'City', name: 'Berlin' },
                  skills: 'Cloud Architecture, AWS, Terraform, Infrastructure as Code, Engineering Leadership, Platform Engineering',
                },
                sameAs: [
                  'https://www.linkedin.com/in/marc-troesken',
                  'https://github.com/MarcTroesken',
                ],
                knowsAbout: [
                  'Cloud Architecture', 'AWS', 'Infrastructure as Code',
                  'Terraform', 'Engineering Leadership', 'Fintech',
                  'Platform Engineering', 'Security & Compliance', 'GitOps', 'Observability',
                ],
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Berlin',
                  addressCountry: 'DE',
                },
              },
            ],
          }),
        },
      ],
    },
  },

  css: ['~/assets/css/main.css'],
})
