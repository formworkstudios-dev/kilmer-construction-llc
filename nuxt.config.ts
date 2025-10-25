import { defineLocalBusiness } from "nuxt-schema-org/schema";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  makesOffer: [
    { "@type": "Service", name: "Home Renovation" },
    { "@type": "Service", name: "Deck Construction" },
    { "@type": "Service", name: "Kitchen Remodeling" },
    { "@type": "Service", name: "General Contracting" },
  ],
  schemaOrg: {
    identity: defineLocalBusiness({
      "@type": "HomeAndConstructionBusiness",
      name: "Kilmer Construction LLC",
      description:
        "Family-owned contractor in Northeastern PA specializing in renovations, additions, and new builds with expert craftsmanship and reliable service.",
      url: "https://kilmerconstruction.com",
      image: "https://kilmerconstruction.com/kilmer-construction.PNG",
      telephone: "+1-570-878-6334",
      address: {
        offers: [
          { "@type": "Service", name: "Home Renovation" },
          { "@type": "Service", name: "Deck Construction" },
          { "@type": "Service", name: "Kitchen Remodeling" },
          { "@type": "Service", name: "General Contracting" },
        ],
        streetAddress: "841 Spruce Street",
        addressLocality: "Olyphant",
        addressRegion: "PA",
        postalCode: "18447",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "City", name: "Olyphant" },
        { "@type": "City", name: "Scranton" },
        { "@type": "City", name: "Dickson City" },
        { "@type": "City", name: "Throop" },
        { "@type": "City", name: "Pittston" },
        { "@type": "City", name: "Carbondale" },
        { "@type": "City", name: "Mt Pocono" },
      ],
      hasMap:
        "https://www.google.com/maps?q=841+Spruce+Street,+Olyphant,+PA+18447",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 41.4682,
        longitude: -75.6013,
      },
      sameAs: ["https://www.facebook.com/kilmerconstruction/"],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "08:00",
          closes: "20:00",
        },
      ],
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
