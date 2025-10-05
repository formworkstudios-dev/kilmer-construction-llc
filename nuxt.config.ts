// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "nuxt-resend",
  ],

  runtimeConfig: {
    resendApiKey: import.meta.env.RESEND_API_KEY as string | undefined,
  },
});
