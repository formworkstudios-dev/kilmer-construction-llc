<template>
  <div>
    <!-- Full-width header image with overlay text -->
    <div
      class="mt-22 relative h-80 md:h-96 w-full bg-cover bg-center border-b"
      style="background-image: url('/siding-job-pa-contractor.webp');"
    >
      <div class="absolute inset-0 bg-black/60" />
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center px-4">
          <h1 class="hero-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-100 tracking-tight">
            Pennsylvania Contracting Blog</h1>
          <p class="text-stone-300 mt-2">Articles and updates from Kilmer Construction LLC</p>
        </div>
      </div>
    </div>

    <UContainer class="pt-8 pb-16 min-h-screen max-w-3xl">
      <div
        v-if="posts && posts.length"
        class="flex flex-col gap-6"
      >
        <NuxtLink
          v-for="post in posts"
          :key="post.path"
          :to="post.path"
          class="block group"
        >
          <UCard
            as="article"
            class="transition hover:shadow-sm bg-elevated/50"
          >
            <div class="md:flex gap-6 items-start">
              <NuxtImg
                v-if="post.image"
                :src="post.image"
                :alt="post.title"
                class="w-full md:w-48 h-40 md:h-32 object-cover"
                loading="lazy"
                format="webp"
                quality="80"
                sizes="sm:100vw md:50vw lg:33vw"
              />
              <div class="flex-1">
                <h2 class="m-0 group-hover:underline">{{ post.title }}</h2>
                <p class="text-sm text-muted mt-1 flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-calendar-days-20-solid"
                    class="text-muted"
                  />
                  {{ formatDate(post.date) }}
                </p>
                <p class="mt-3">{{ post.description }}</p>
              </div>
            </div>
          </UCard>
        </NuxtLink>
      </div>

      <div
        v-else
        class="text-center text-muted py-24"
      >
        No posts yet. Please check back soon.
      </div>
    </UContainer>
  </div>
</template>

<script
  setup
  lang="ts"
>
type PostListItem = {
  title: string
  path: string
  description: string
  date: string
  image?: string
}

const { data } = await useAsyncData<PostListItem[]>('posts-list', () => {
  return queryCollection('posts')
    .order('date', 'DESC')
    .select('title', 'path', 'description', 'date', 'image')
    .all()
})

const posts = computed(() => data.value || [])

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  if (Number.isNaN(d.getTime())) return dateStr
  return new Intl.DateTimeFormat(undefined, { year: 'numeric', month: 'long', day: 'numeric' }).format(d)
}

</script>
