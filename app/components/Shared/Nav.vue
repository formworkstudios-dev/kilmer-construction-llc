<script
  setup
  lang="ts"
>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const appConfig = useAppConfig()
const siteName = appConfig.siteName
const siteLogo = appConfig.siteLogo

const isHidden = ref(false)
const menuOpen = ref(false)
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

  // Lock page scroll when mobile menu is open
  watch(menuOpen, (open) => {
    if (typeof document !== 'undefined') {
      const overflow = open ? 'hidden' : ''
      document.documentElement.style.overflow = overflow
      document.body.style.overflow = overflow
    }
  }, { immediate: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  // Ensure scroll is restored on unmount
  if (typeof document !== 'undefined') {
    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <div :class="[
    'fixed top-0 inset-x-0 z-[1200] transition-transform duration-300 will-change-transform',
    isHidden ? '-translate-y-full' : 'translate-y-0'
  ]">
    <!-- Top Call Now strip -->
    <div class="bg-yellow-400 dark:bg-yellow-600 dark:text-white text-black text-sm border-b relative z-[1150]">
      <a
        href="tel:+15705551234"
        class="block text-center h-8 leading-8 px-4 hover:underline font-semibold"
      >
        Call Now: (570) 555-1234
      </a>
    </div>

    <!-- Main navigation bar -->
    <div class="flex justify-between items-center h-14 border-b bg-elevated relative z-[1150]">
      <NuxtLink
        to="/"
        class="px-4 font-bold h-full flex items-center uppercase logo text-sm md:text-base"
      >
        {{ siteLogo ? siteLogo : siteName }}
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-stretch h-full">
        <NuxtLink
          to="/"
          class="px-4 h-full flex items-center"
        >Home</NuxtLink>
        <NuxtLink
          to="/about"
          class="px-4 h-full flex items-center"
        >About</NuxtLink>
        <!-- <NuxtLink
          to="/posts"
          class="px-4 h-full flex items-center"
        >Contracting Blog</NuxtLink> -->
        <NuxtLink
          to="/contact-pa-contractor"
          class="bg-primary text-inverted px-4 font-bold ml-3 h-full flex items-center hover:bg-primary/90 border-l"
        >
          Contact Us
        </NuxtLink>
      </nav>

      <!-- Mobile menu button -->
      <button
        type="button"
        class="md:hidden px-4 h-full flex items-center focus:outline-none"
        :aria-expanded="menuOpen ? 'true' : 'false'"
        aria-controls="mobile-nav"
        @click="menuOpen = !menuOpen"
      >
        <UIcon
          name="i-heroicons-bars-3-20-solid"
          class="w-6 h-6"
        />
      </button>
    </div>

    <!-- Mobile full-screen menu teleported to body to avoid stacking/transform issues -->
    <teleport to="body">
      <transition
        enter-active-class="transform transition ease-out duration-300"
        enter-from-class="translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transform transition ease-in duration-200"
        leave-from-class="translate-x-0"
        leave-to-class="translate-x-full"
      >
        <div
          v-if="menuOpen"
          id="mobile-nav"
          class="fixed inset-0 z-[9999] md:hidden bg-white dark:bg-neutral-900 text-foreground will-change-transform"
          @click.self="menuOpen = false"
        >
          <!-- Close button -->
          <button
            type="button"
            class="absolute top-4 right-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/95 dark:bg-neutral-800/90 text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/60"
            aria-label="Close menu"
            @click="menuOpen = false"
          >
            <UIcon
              name="i-heroicons-x-mark-20-solid"
              class="w-5 h-5"
            />
          </button>

          <!-- Panel content -->
          <div class="flex flex-col h-full py-16 px-6">
            <nav class="flex-1 flex flex-col gap-6 text-lg">
              <NuxtLink
                to="/"
                class="py-2"
                @click="menuOpen = false"
              >Home</NuxtLink>
              <NuxtLink
                to="/about"
                class="py-2"
                @click="menuOpen = false"
              >About</NuxtLink>
              <!-- <NuxtLink
                to="/posts"
                class="py-2"
                @click="menuOpen = false"
              >Contracting Blog</NuxtLink> -->
              <NuxtLink
                to="/contact-pa-contractor"
                class="py-2"
                @click="menuOpen = false"
              >Contact Us</NuxtLink>
            </nav>
            <div class="mt-6">
              <a
                href="tel:+15705551234"
                class="block text-center bg-primary text-inverted py-3 font-medium"
              >Call Now</a>
            </div>
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<style scoped></style>
