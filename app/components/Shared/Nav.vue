<script
  setup
  lang="ts"
>
import { ref, onMounted, onUnmounted } from 'vue'

const appConfig = useAppConfig()
const siteName = appConfig.siteName
const siteLogo = appConfig.siteLogo

const isHidden = ref(false)
let lastY = 0
let ticking = false

function handleScroll() {
  const y = window.scrollY || 0
  const delta = y - lastY

  if (y <= 10) {
    isHidden.value = false
  } else if (delta > 6 && y > 64) {
    isHidden.value = true
  } else if (delta < -6) {
    isHidden.value = false
  }

  lastY = y
  ticking = false
}

function onScroll() {
  if (!ticking) {
    ticking = true
    requestAnimationFrame(handleScroll)
  }
}

onMounted(() => {
  lastY = window.scrollY || 0
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <div
:class="[
    'fixed top-0 inset-x-0 z-50 h-14 border-b bg-elevated transition-transform duration-300 will-change-transform',
    isHidden ? '-translate-y-full' : 'translate-y-0'
  ]">
    <div class="flex justify-between items-center h-full">
      <NuxtLink
        to="/"
        class="px-4 font-bold h-full flex items-center"
      >
        {{ siteLogo ? siteLogo : siteName }}
      </NuxtLink>

      <nav class="flex items-stretch h-full">
        <NuxtLink
          to="/"
          class="px-4 h-full flex items-center"
        >Home</NuxtLink>
        <NuxtLink
          to="/about"
          class="px-4 h-full flex items-center"
        >About</NuxtLink>
        <NuxtLink
          to="/posts"
          class="px-4 h-full flex items-center"
        >Contracting Blog</NuxtLink>
        <NuxtLink
          to="/contact-pa-contractor"
          class="bg-primary text-inverted px-4 h-full flex items-center hover:bg-primary/90"
        >
          Contact Us
        </NuxtLink>
      </nav>
    </div>
  </div>
</template>

<style scoped></style>
