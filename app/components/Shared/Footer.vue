<script
  setup
  lang="ts"
></script>

<template>
  <div class="border-t p-4 text-sm text-muted bg-elevated">
    <div class="flex flex-col md:flex-row justify-between items-center gap-4 w-full">
      
      <!-- Left section: Copyright -->
      <div class="flex items-center justify-center md:justify-start">
        <span class="!text-xs">© Kilmer Construction LLC 2025</span>
      </div>

      <!-- Center section: Privacy/Terms -->
      <nav class="flex items-center gap-4 order-last md:order-none">
        <NuxtLink
          to="/privacy"
          class="hover:underline !text-xs"
        >Privacy</NuxtLink>
        <span
          aria-hidden="true"
          class="opacity-50 !text-xs"
        >•</span>
        <NuxtLink
          to="/tos"
          class="hover:underline !text-xs"
        >Terms</NuxtLink>
      </nav>

      <!-- Right section: Built by + Color mode -->
      <div class="flex items-center gap-4 justify-center md:justify-end">
        <span class="!text-xs text-muted">
          Website Built by 
          <a 
            href="https://formworkstudios.com" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-primary hover:underline"
          >
            Formwork Studios
          </a>
        </span>
        <UColorModeButton class="cursor-pointer" />
      </div>

    </div>
  </div>
</template>

<style scoped></style>
