<script
  setup
  lang="ts"
></script>

<template>
  <div class="border-b">
    <UContainer>
      <section class="my-16">
        <!-- Content Row: Text & Image -->
        <div class="flex flex-col lg:flex-row-reverse gap-12 items-center">
          <!-- Text Content -->
          <div class="lg:w-1/2">
            <h2>About Kilmer Construction</h2>
            <p class="text-lg text-muted mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p class="text-muted mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.</p>
            <p class="text-muted mb-6">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.</p>
            <p class="text-muted mb-8">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.</p>
            <UButton
              color="primary"
              variant="solid"
              size="lg"
            >
              Learn More About Us
            </UButton>
          </div>

          <!-- Image -->
          <div class="lg:w-1/2">
            <nuxt-img
              src="/sliding-glass-door-installation.webp"
              alt="Sliding Glass Door Installation"
              class="w-full h-auto"
              placeholder
            />
          </div>
        </div>
      </section>
    </UContainer>
  </div>
</template>

<style scoped></style>
