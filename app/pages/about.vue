<script
  setup
  lang="ts"
></script>

<template>
  <div>
    <!-- Full-width header image with overlay text -->
    <div
      class="mt-22 relative h-80 md:h-96 w-full bg-cover bg-center border-b"
      style="background-image: url('/deck-construction-pa.webp');"
    >
      <div class="absolute inset-0 bg-black/60" />
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center px-4">
          <h1 class="hero-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-100 tracking-tight">About
            Kilmer Construction LLC</h1>
          <p class="text-stone-300 mt-2">A quarter of a century building homes in Northeastern Pennsylvania</p>
        </div>
      </div>
    </div>

    <UContainer class="pt-8 pb-16 max-w-3xl min-h-screen">
      <UCard
        class="mt-8 rounded-none bg-elevated"
        variant="outline"
      >
        <div class="flex flex-col items-center text-center">
          <p class="mt-4 text-xl">
            Kilmer Construction LLC is a second-generation, family-owned contracting
            company
            based in Northeastern Pennsylvania.
            If you’re looking for a local contractor “near me”, we’re your trusted choice for quality craftsmanship and
            reliable service.
          </p>
          <p class="mt-4 text-xl">
            We handle renovations, additions, kitchens, bathrooms, exterior improvements, and light commercial work with
            clear communication and dependable timelines.
          </p>
          <p class="mt-4 text-xl">
            Proudly serving Archbald, Scranton, Carbondale, Dunmore, Clarks Summit, and surrounding NEPA communities.
          </p>
          <div class="mt-8 w-full flex justify-center">
            <UButton
              to="/contact-pa-contractor"
              color="primary"
              size="lg"
              variant="solid"
              class="w-full md:w-auto justify-center text-center"
            >
              Get Your Free Quote
            </UButton>
          </div>
        </div>
      </UCard>
    </UContainer>
  </div>
</template>

<style scoped></style>