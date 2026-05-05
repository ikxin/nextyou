// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'NextYou 未来由你 | AI Industry Company',
      htmlAttrs: {
        lang: 'zh-CN'
      },
      meta: [
        {
          name: 'description',
          content: 'NextYou 未来由你，为企业设计可落地、可生长、以人为中心的 AI 操作系统。'
        },
        {
          name: 'theme-color',
          content: '#0d0e10'
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg'
        }
      ]
    }
  },
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  vite: {
    build: {
      modulePreload: {
        polyfill: false
      }
    },
    optimizeDeps: {
      include: ['gsap', 'gsap/ScrollTrigger']
    }
  }
})
