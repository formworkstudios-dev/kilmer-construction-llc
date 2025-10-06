<script
  setup
  lang="ts"
></script>

<template>
  <div class="">
    <UContainer>
      <section class="my-24">
        <div class="bg-elevated px-6 py-16 md:px-12 md:py-24 border border-gray-200 dark:border-gray-800">
          <div class="flex flex-col  text-center items-center justify-between gap-6">
            <div>
              <h2 class="m-0">Ready to build something great?</h2>
              <p class="text-muted mt-2">Get a free quote for your renovation, addition, or new build in NEPA.</p>
            </div>
            <div class="flex flex-col md:flex-row md:justify-center gap-3 md:gap-4 w-full max-w-xl">
              <UButton
                to="/contact-pa-contractor"
                color="primary"
                size="lg"
                variant="solid"
                class="w-full md:w-auto justify-center text-center"
              >Get Your Free Quote</UButton>
              <UButton
                href="tel:+15705551234"
                color="primary"
                size="lg"
                variant="outline"
                class="w-full md:w-auto justify-center text-center"
              >Call Now</UButton>
            </div>
          </div>
        </div>
      </section>
    </UContainer>
  </div>
</template>

<style scoped></style>
