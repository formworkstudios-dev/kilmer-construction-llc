<script
  setup
  lang="ts"
>
import { definePageMeta } from '#imports'

// Note: does not work for dynamic pages, only accepts strings
definePageMeta({
  title: '#1 NEPA Construction Company'
})

defineOgImageComponent('NuxtSeo', {
  title: 'Kilmer Construction LLC',
  description: 'Top-rated construction company in NEPA specializing in kitchen remodeling, siding, decks, and more. Quality craftsmanship and customer satisfaction guaranteed.',
  image: '/kilmer-construction.PNG',
  theme: "#fb2c36"
})
</script>

<template>
  <div>
    <HomeHero />
    <HomeBoxes />
    <HomeAbout />
    <HomeGallery />
    <HomeLocation />
    <HomeClosingCTA />
  </div>
</template>

<style scoped></style>
