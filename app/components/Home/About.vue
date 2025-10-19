<script
  setup
  lang="ts"
></script>

<template>
  <div class="border-b">
    <UContainer>
      <section class="my-16">
        <!-- Content Row: Text & Image -->
        <div class="flex flex-col lg:flex-row-reverse gap-12 items-center lg:items-start">
          <!-- Text Content -->
          <div class="lg:w-1/2 lg:self-start">
            <h2>About Kilmer Construction</h2>
            <p class="text-lg text-muted mb-6 mt-4">Kilmer Construction is a family-owned business based in Olyphant,
              Pennsylvania, dedicated to providing top-quality construction services across Northeastern PA.</p>

            <p class="text-muted mb-6">Led by Jim Kilmer, our company takes pride in craftsmanship and attention to
              detail, ensuring every project meets the highest standards.</p>

            <p class="text-muted mb-6">Fully licensed and insured, Kilmer Construction offers peace of mind and
              reliability for every client.</p>

            <p class="text-muted mb-8">From kitchen and bathroom remodels to home additions and new construction, we
              handle each project with professionalism and care. Our experienced team is committed to delivering
              exceptional results that exceed expectations. Contact us today to learn how we can help bring your vision
              to life.</p>

            <p class="text-muted mb-4"><strong>Phone:</strong> <a
                href="tel:5708786334"
                class="text-primary hover:underline"
              >(570) 878-6334</a></p>

            <UButton
              color="primary"
              variant="solid"
              size="lg"
              class="w-full md:w-auto justify-center text-center"
              to="/about"
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
