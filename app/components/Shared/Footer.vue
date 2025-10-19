<script
  setup
  lang="ts"
></script>

<template>
  <div class="border-t p-4 text-sm text-muted bg-elevated">
    <div class="flex flex-col items-center gap-2 w-full text-center">
      <span class="!text-xs">© Kilmer Construction LLC 2025</span>
      <nav class="flex gap-4">
        <NuxtLink
          to="/privacy"
          class="hover:underline !text-xs"
        >Privacy</NuxtLink>
        <NuxtLink
          to="/tos"
          class="hover:underline !text-xs"
        >Terms</NuxtLink>
      </nav>
      <div class="flex flex-col items-center gap-2">
        <span class="!text-xs text-muted text-center">
          Website Built by
          <a
            href="https://formworkstudios.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-muted hover:underline"
          >
            Formwork Studios
          </a>
        </span>
        <UColorModeButton
          class="cursor-pointer"
          style="font-size:0.85em;"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
