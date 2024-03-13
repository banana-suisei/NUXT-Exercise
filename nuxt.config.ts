// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    buildAssetsDir: "/assets/",
  },
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxt/ui"],
})
