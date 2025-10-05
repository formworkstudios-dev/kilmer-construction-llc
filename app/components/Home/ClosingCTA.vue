<script
  setup
  lang="ts"
></script>

<template>
  <div class="border-t">
    <UContainer>
      <section class="my-16">
        <div class="bg-elevated p-12">
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
                to="/posts"
                color="primary"
                size="lg"
                variant="outline"
              >Learn More</UButton>
            </div>
          </div>
        </div>
      </section>
    </UContainer>
  </div>
</template>

<style scoped></style>
