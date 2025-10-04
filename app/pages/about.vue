<script setup lang="ts"></script>

<template>
  <UContainer>
    <section class="py-16">
      <!-- Header -->
      <div class="max-w-3xl">
        <h1>About Kilmer Construction LLC</h1>
        <p class="mt-4 text-lg text-muted">
          Kilmer Construction LLC is a third-generation, family-owned contracting company based in Northeastern Pennsylvania.
          If you are looking for a local contractor “near me”, we are your trusted choice for quality craftsmanship
          and reliable service.
        </p>
      </div>

      <!-- Value Props -->
      <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="flex items-start gap-3">
          <UIcon name="i-mdi-hammer-wrench" class="text-primary" size="24" />
          <div>
            <p class="font-semibold">Craftsmanship First</p>
            <p class="text-muted">Quality materials, expert execution, and attention to detail on every project.</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <UIcon name="i-mdi-shield-check" class="text-primary" size="24" />
          <div>
            <p class="font-semibold">Licensed & Insured</p>
            <p class="text-muted">Professional, dependable, and fully insured for your peace of mind.</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <UIcon name="i-mdi-handshake" class="text-primary" size="24" />
          <div>
            <p class="font-semibold">Family-Owned Values</p>
            <p class="text-muted">Transparent communication, integrity, and respect from start to finish.</p>
          </div>
        </div>
      </div>

      <!-- Story + Service Area -->
      <div class="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div class="space-y-6">
          <h2>Our Story</h2>
          <p class="text-muted">
            Built on decades of hands-on experience, Kilmer Construction LLC brings proven expertise to residential and
            light commercial projects across Northeastern Pennsylvania. From renovations and additions to full builds
            and exterior improvements, our team delivers results that stand the test of time.
          </p>
          <p class="text-muted">
            We believe great projects start with great conversations. We listen first, provide clear expectations,
            and keep you informed every step of the way. Our process focuses on safety, schedule, and workmanship—so
            you can enjoy the finished result without the stress.
          </p>
        </div>

        <div class="space-y-6">
          <h2>Service Area</h2>
          <p class="text-muted">
            We proudly serve homeowners and businesses in Archbald, Scranton, Carbondale, Dunmore, Clarks Summit,
            and communities throughout Lackawanna County and Northeast Pennsylvania.
          </p>
          <ul class="grid grid-cols-2 gap-3 text-muted">
            <li class="flex items-center gap-2"><UIcon name="i-mdi-map-marker" class="text-primary" /> Archbald</li>
            <li class="flex items-center gap-2"><UIcon name="i-mdi-map-marker" class="text-primary" /> Scranton</li>
            <li class="flex items-center gap-2"><UIcon name="i-mdi-map-marker" class="text-primary" /> Carbondale</li>
            <li class="flex items-center gap-2"><UIcon name="i-mdi-map-marker" class="text-primary" /> Dunmore</li>
            <li class="flex items-center gap-2"><UIcon name="i-mdi-map-marker" class="text-primary" /> Clarks Summit</li>
            <li class="flex items-center gap-2"><UIcon name="i-mdi-map-marker" class="text-primary" /> Surrounding Areas</li>
          </ul>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="mt-16 flex flex-col sm:flex-row items-start gap-4">
        <UButton to="/contact-pa-contractor" color="primary" size="lg" variant="solid">
          Get Your Free Quote
        </UButton>
        <UButton to="/" color="primary" size="lg" variant="outline">
          See Our Work
        </UButton>
      </div>
    </section>
  </UContainer>
</template>

<style scoped></style>
