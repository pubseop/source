// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script : [
        {src: '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js'},
      ]
    }
  },
})
