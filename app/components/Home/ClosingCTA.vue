<script
  setup
  lang="ts"
></script>

<template>
  <div class="border-t">
    <UContainer>
      <section class="my-24">
        <div class="bg-elevated px-6 py-16 md:px-12 md:py-24">
          <div class="flex flex-col  text-center items-center justify-between gap-6">
            <div>
              <h2 class="m-0">Ready to build something great?</h2>
              <p class="text-muted mt-2">Get a free quote for your renovation, addition, or new build in NEPA.</p>
            </div>
            <div class="flex gap-4">
              <UButton
                to="/contact-pa-contractor"
                color="primary"
                size="lg"
                variant="solid"
              >Get Your Free Quote</UButton>
              <UButton
                href="tel:+15705551234"
                color="primary"
                size="lg"
                variant="outline"
              >Call Now</UButton>
            </div>
          </div>
        </div>
      </section>
    </UContainer>
  </div>
</template>

<style scoped></style>
