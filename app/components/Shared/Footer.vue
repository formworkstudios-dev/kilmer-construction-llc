<script
  setup
  lang="ts"
></script>

<template>
  <div class="border-t p-4 text-sm text-muted flex justify-between items-center w-full bg-elevated">
    <div class="flex items-center gap-6">
      <span class="!text-xs">© Kilmer Construction LLC 2025</span>
      <nav class="flex items-center gap-4">
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
    </div>

    <UColorModeButton class="cursor-pointer" />
  </div>
</template>

<style scoped></style>
