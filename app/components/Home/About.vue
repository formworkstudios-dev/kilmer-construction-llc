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
            <p class="text-lg text-muted mb-6">
              Building excellence through craftsmanship, integrity, and innovation
            </p>
            <p class="text-muted mb-6">
              With over two decades of experience in residential and commercial construction,
              Kilmer Construction LLC has built a reputation for delivering exceptional quality
              and service throughout Pennsylvania.
            </p>
            <p class="text-muted mb-6">
              Our team of skilled craftsmen and project managers work closely with clients to
              bring their vision to life, whether it's a kitchen renovation, home addition, or
              complete commercial build-out.
            </p>
            <p class="text-muted mb-8">
              We pride ourselves on attention to detail, timely completion, and exceeding
              expectations on every project we undertake.
            </p>
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
            <img
              src="/kitchen-construction-pa.jpg"
              alt="Kitchen Construction Project"
              class="w-full h-auto"
            >
          </div>
        </div>
      </section>
    </UContainer>
  </div>
</template>

<style scoped></style>
