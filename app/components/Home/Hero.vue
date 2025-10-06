<script
  setup
  lang="ts"
>
import { ref, onMounted, onUnmounted } from 'vue'

const sliderPosition = ref(50) // Start at 50% (middle)
const containerRef = ref<HTMLElement>()
const isDragging = ref(false)

const handleMouseDown = () => {
  isDragging.value = true
}

const handleMouseMove = (event: MouseEvent) => {
  if (!isDragging.value || !containerRef.value) return

  const rect = containerRef.value.getBoundingClientRect()
  const x = event.clientX - rect.left
  const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
  sliderPosition.value = percentage
}

const handleMouseUp = () => {
  isDragging.value = false
}

const handleTouchStart = () => {
  isDragging.value = true
}

const handleTouchMove = (event: TouchEvent) => {
  if (!isDragging.value || !containerRef.value || event.touches.length === 0) return

  const rect = containerRef.value.getBoundingClientRect()
  const touch = event.touches.item(0)
  if (!touch) return
  const x = touch.clientX - rect.left
  const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
  sliderPosition.value = percentage
}

const handleTouchEnd = () => {
  isDragging.value = false
}

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
  document.addEventListener('touchmove', handleTouchMove)
  document.addEventListener('touchend', handleTouchEnd)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseup', handleMouseUp)
  document.removeEventListener('touchmove', handleTouchMove)
  document.removeEventListener('touchend', handleTouchEnd)
})
</script>

<template>
  <div class="min-h-screen flex items-stretch border-b">
    <div class="w-full h-full">
      <div class="grid grid-cols-1 md:grid-cols-2 h-screen w-full">
        <!-- Left Column -->
        <div class="flex flex-col justify-center py-12">
          <div class="max-w-xl mx-auto px-8 lg:px-12">
            <NuxtImg
              :src="$colorMode.value === 'dark' ? '/kilmer-construction-dark.PNG' : '/kilmer-construction.PNG'"
              alt="Kilmer Construction LLC Logo"
              width="192"
              height="192"
              class="mb-8 mr-autonr w-48 h-48 object-contain"
              loading="eager"
              decoding="async"
              placeholder
            />

            <h1 class="hero-title text-4xl lg:text-6xl font-bold text-highlighted mb-6">
              Best NEPA Contracting
            </h1>
            <p class="text-lg mb-8 leading-relaxed">
              Kilmer Construction LLC is a second-generation, family-owned contracting company based in Northeastern
              Pennsylavania. If you are looking for a local contractor "near me", we are your trusted choice for quality
              craftsmanship and reliable service.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <UButton
                color="primary"
                variant="solid"
                size="lg"
              >
                Get Started
              </UButton>
              <UButton
                color="primary"
                variant="outline"
                size="lg"
                href="tel:+15705551234"
              >
                Call Now
              </UButton>
            </div>
          </div>
        </div>

        <!-- Right Column - Before/After Slider -->
        <div
          ref="containerRef"
          class="relative border-l-0 md:border-l h-full w-full overflow-hidden cursor-col-resize"
        >
          <!-- Before Image (Background) -->
          <div
            class="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url(/kitchen-construction.jpg)]"
            style="background-position: center center;"
          >
            <div class="absolute inset-0 bg-black/30 flex items-end justify-start p-6">
              <div class="text-white">
                <p class="text-sm !font-semibold mb-1">AFTER</p>
                <p class="text-xs opacity-75">Completed Project</p>
              </div>
            </div>
          </div>

          <!-- After Image (Overlay) -->
          <div
            class="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url(/kitchen-construction-pa.jpg)]"
            style="background-position: center center;"
            :style="{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }"
          >
            <div class="absolute inset-0 bg-black/30 flex items-end justify-end p-6">
              <div class="text-white text-right">
                <p class="text-sm !font-semibold mb-1 ">BEFORE</p>
                <p class="text-xs opacity-75">Original State</p>
              </div>
            </div>
          </div>

          <!-- Slider Handle -->
          <div
            class="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 cursor-col-resize"
            :style="{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }"
            @mousedown="handleMouseDown"
            @touchstart="handleTouchStart"
          >
            <!-- Slider Circle -->
            <div
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center"
            >
              <div class="flex gap-0.5">
                <div class="w-0.5 h-4 bg-gray-400" />
                <div class="w-0.5 h-4 bg-gray-400" />
              </div>
            </div>
          </div>

          <!-- Instructions -->
          <div
            class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm z-20 animate-pulse-primary shadow-sm"
          >
            <UIcon
              name="i-mdi-drag-horizontal"
              class="inline mr-2"
              size="16"
            />
            Slide to compare
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes pulsePrimaryBg {

  0%,
  100% {
    background-color: rgba(239, 68, 68, 0.55);
  }

  /* red-500 */
  50% {
    background-color: rgba(185, 28, 28, 0.65);
  }

  /* red-700 */
}

.animate-pulse-primary {
  animation: pulsePrimaryBg 2.2s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .animate-pulse-primary {
    animation: none;
    background-color: rgba(239, 68, 68, 0.55);
  }
}
</style>
