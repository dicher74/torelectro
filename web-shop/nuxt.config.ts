// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Tor Electro',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
      ]
	  },
  },
	vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/css/global.scss";',
                },
            },
        },
	},
	css: ['./assets/css/master.css'],
	ssr: true,
})
