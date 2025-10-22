<script
  setup
  lang="ts"
>
// Gallery images with construction-themed placeholders
const galleryImages = [
  {
    id: 1,
    src: '/kitchen-construction.jpg',
    alt: 'Completed kitchen construction project'
  },
  {
    id: 2,
    src: '/kitchen-construction-pa.jpg',
    alt: 'Before photo kitchen construction project'
  },
  {
    id: 3,
    src: '/kitchen-remodeling-scranton.webp',
    alt: 'Kitchen and cabinet remodeling'
  },
  {
    id: 4,
    src: '/old-home-contracting-remodeling.webp',
    alt: 'Kitchen countertop installation'
  },
  {
    id: 5,
    src: '/best-remodeling-pa.webp',
    alt: 'Kitchen sink installation'
  },
  {
    id: 6,
    src: 'sliding-glass-door-installation.webp',
    alt: 'Sliding glass door installation'
  },
  {
    id: 7,
    src: '/window-installation.webp',
    alt: 'Window installation project'
  },
  {
    id: 8,
    src: '/siding-job-pa-contractor.webp',
    alt: 'Siding job on old home'
  },
  {
    id: 9,
    src: '/siding-job-in-nepa.webp',
    alt: 'Siding job in NEPA'
  },
  {
    id: 13,
    src: '/deck-construction-near-me-pa.webp',
    alt: 'Professional deck construction'
  },
  {
    id: 14,
    src: '/deck-construction-nepa.webp',
    alt: 'Quality deck building services'
  },
  {
    id: 15,
    src: '/new-deck-construction.webp',
    alt: 'Deck construction in Pennsylvania'
  },

]
</script>

<template>
  <UContainer>
    <section class="my-16">
      <!-- Section Header -->
      <div class="mb-12">
        <h2>Our Work</h2>
        <p class="text-lg text-muted mt-4 max-w-2xl">
          We take pride in our work. From kitchen renovations to siding and the construction of new homes,
          we deliver quality craftsmanship that that stands out.
        </p>
      </div>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="image in galleryImages"
          :key="image.id"
          class="group relative overflow-hidden bg-gray-100 aspect-[4/3] hover:shadow-lg transition-all duration-300"
        >
          <NuxtImg
            :src="image.src"
            :alt="image.alt"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            format="webp"
            quality="80"
            sizes="sm:100vw md:50vw lg:33vw"
            placeholder
          />

          <!-- Overlay on hover -->
          <div class="absolute inset-0 bg-black/0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
            <div class="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p class="text-sm font-medium">{{ image.alt }}</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  </UContainer>
</template>

<style scoped></style>
