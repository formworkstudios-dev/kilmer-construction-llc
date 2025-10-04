<script
  setup
  lang="ts"
>
const appConfig = useAppConfig()
const siteName = appConfig.siteName
const siteLogo = appConfig.siteLogo
</script>

<template>
  <div class="flex justify-between items-center flex-row border-b bg-elevated">
    <div class="px-4">
      <NuxtLink
        class="font-bold"
        to="/"
      >{{ siteLogo ? siteLogo : siteName }}</NuxtLink>
    </div>
    <div class="flex items-center gap-8">
      <NuxtLink
        to="/"
        class="px-4 py-4"
      >Home</NuxtLink>
      <NuxtLink
        to="/about"
        class="px-4 py-4"
      >About</NuxtLink>

      <NuxtLink
        to="/posts"
        class="px-4 py-4"
      >Contracting Blog</NuxtLink>
      <NuxtLink
        class="bg-primary text-inverted px-4 py-4 hover:bg-primary/90 h-full flex items-center"
        to="/contact-pa-contractor"
      >Contact Us</NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
