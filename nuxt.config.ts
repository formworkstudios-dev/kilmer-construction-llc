import { defineLocalBusiness } from "nuxt-schema-org/schema";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  schemaOrg: {
    identity: defineLocalBusiness({
      "@type": "Contractor",
      name: "Kilmer Construction LLC",
      description:
        "Family-owned contractor in Northeastern PA specializing in renovations, additions, and new builds with expert craftsmanship and reliable service.",
      url: "https://kilmerconstruction.com",
      address: {
        streetAddress: "132 Cherry St.",
        addressLocality: "Archbald",
        addressRegion: "PA",
        postalCode: "18403",
        addressCountry: "US",
      },
    }),
  },
  fonts: {
    families: [
      {
        name: "Alfa Slab One",
        provider: "google",
        subsets: ["latin"],
      },
    ],
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "nuxt-resend",
    "@nuxt/fonts",
    "@nuxtjs/seo",
    "nuxt-og-image",
    "nuxt-schema-org",
  ],

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
