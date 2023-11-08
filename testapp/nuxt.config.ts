// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true 
  },
  imports:{
    autoImport: true
  },
  ssr: true,
  modules:['@nuxtjs/tailwindcss'],
})
