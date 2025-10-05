<script
  setup
  lang="ts"
>
// Gallery images with construction-themed placeholders
const galleryImages = [
  {
    id: 1,
    src: 'https://picsum.photos/600/400?random=1&blur=0',
    alt: 'Kitchen renovation project'
  },
  {
    id: 2,
    src: 'https://picsum.photos/600/400?random=2&blur=0',
    alt: 'Bathroom remodeling work'
  },
  {
    id: 3,
    src: 'https://picsum.photos/600/400?random=3&blur=0',
    alt: 'Custom home construction'
  },
  {
    id: 4,
    src: 'https://picsum.photos/600/400?random=4&blur=0',
    alt: 'Roofing installation project'
  },
  {
    id: 5,
    src: 'https://picsum.photos/600/400?random=5&blur=0',
    alt: 'Foundation and concrete work'
  },
  {
    id: 6,
    src: 'https://picsum.photos/600/400?random=6&blur=0',
    alt: 'Interior finishing details'
  },
  {
    id: 7,
    src: 'https://picsum.photos/600/400?random=7&blur=0',
    alt: 'Exterior siding project'
  },
  {
    id: 8,
    src: 'https://picsum.photos/600/400?random=8&blur=0',
    alt: 'Deck and outdoor construction'
  },
  {
    id: 9,
    src: 'https://picsum.photos/600/400?random=9&blur=0',
    alt: 'Commercial building project'
  },
  {
    id: 10,
    src: 'https://picsum.photos/600/400?random=10&blur=0',
    alt: 'Flooring installation work'
  },
  {
    id: 11,
    src: 'https://picsum.photos/600/400?random=11&blur=0',
    alt: 'Electrical and plumbing rough-in'
  },
  {
    id: 12,
    src: 'https://picsum.photos/600/400?random=12&blur=0',
    alt: 'Finished construction project'
  }
]
</script>

<template>
  <UContainer>
    <section class="my-16">
      <!-- Section Header -->
      <div class="mb-12">
        <h2>Our Work</h2>
        <p class="text-lg text-muted mt-4 max-w-3xl">
          Take a look at some of our recent construction projects. From kitchen renovations to custom homes,
          we take pride in delivering quality craftsmanship that exceeds expectations.
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
          />

          <!-- Overlay on hover -->
          <div
            class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end"
          >
            <div class="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p class="text-sm font-medium">{{ image.alt }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="mt-12 text-center">
        <p class="text-muted mb-6">
          Ready to start your next construction project?
        </p>
        <UButton
          color="primary"
          variant="solid"
          size="lg"
          to="contact-pa-contractor"
        >
          Get Your Free Quote
        </UButton>
      </div>
    </section>
  </UContainer>
</template>

<style scoped></style>
