<script
  setup
  lang="ts"
>
type PostDoc = {
  title: string
  description: string
  date: string
  image?: string
  tags?: string[]
  path: string
  // Other fields from content renderer
  body?: unknown
}

const route = useRoute()
const { data: page } = await useAsyncData<PostDoc | null>(route.path, () => {
  return queryCollection('posts').path(route.path).first()
})

const headerImage = computed(() => page.value?.image || '/kitchen-remodeling-scranton.webp')

function formatDate(dateStr?: string) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  if (Number.isNaN(d.getTime())) return dateStr
  return new Intl.DateTimeFormat(undefined, { year: 'numeric', month: 'long', day: 'numeric' }).format(d)
}
</script>

<template>
  <div>
    <!-- Full-width header image with overlay text -->
    <div
      class="mt-22 relative h-72 md:h-80 w-full bg-cover bg-center border-b"
      :style="`background-image: url('${headerImage}')`"
    >
      <div class="absolute inset-0 bg-black/60" />
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center px-4">
          <h1
            class="hero-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-100 max-w-3xl tracking-tight"
          >{{ page?.title }}</h1>
          <p
            v-if="page?.date"
            class="text-stone-300 mt-2 flex items-center justify-center gap-2"
          >
            <UIcon
              name="i-heroicons-calendar-days-20-solid"
              class="text-stone-300"
            />
            {{ formatDate(page?.date) }}
          </p>
        </div>
      </div>
    </div>

    <UContainer class="pt-8 pb-16 min-h-screen max-w-3xl">
      <div class="flex flex-col gap-6">
        <ContentRenderer
          prose
          v-if="page"
          :value="page"
          class="prose max-w-none"
        />

        <div class="pt-4">
          <NuxtLink
            to="/posts"
            class="inline-flex items-center gap-2 text-primary-600 hover:underline"
          >
            <UIcon name="i-heroicons-arrow-left-20-solid" />
            Back to all posts
          </NuxtLink>
        </div>
      </div>
    </UContainer>
  </div>
</template>
