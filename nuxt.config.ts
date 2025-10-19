// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],

  modules: ["@nuxt/content", "@nuxt/eslint", "@nuxt/image", "@nuxt/ui", "nuxt-resend", "@nuxt/fonts", "@nuxtjs/seo", "nuxt-og-image"],

  // app: {
  //   pageTransition: { name: "page", mode: "out-in" },
  // },
  runtimeConfig: {
    resendApiKey: import.meta.env.RESEND_API_KEY as string | undefined,
  },
  site: {
    url: "https://kilmerconstruction.com",
    name: "Kilmer Construction",
    description:
      "Kilmer Construction LLC, a family-owned contractor in Northeastern PA, delivers top-quality renovations, additions, and new builds with expert craftsmanship, reliable service, and a commitment to exceeding client expectations.",
    defaultLocale: "en",
  },
});