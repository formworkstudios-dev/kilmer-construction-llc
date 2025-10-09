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
    <div class="w-full h-[100dvh] md:h-auto">
      <div
        class="flex flex-col md:grid md:grid-cols-2 w-full h-full md:h-screen justify-between md:justify-between box-border min-h-0"
      >
        <!-- Left Column -->
        <div class="flex flex-col justify-center py-10 md:py-12 md:items-center flex-1 pt-24">
          <div class="max-w-lg md:max-w-xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <NuxtImg
              :src="$colorMode.value === 'dark' ? '/kilmer-construction-dark.PNG' : '/kilmer-construction.PNG'"
              alt="Kilmer Construction LLC Logo"
              width="380"
              height="380"
              class="mb-6 sm:mb-8 mx-auto w-36 h-36 sm:w-44 sm:h-44 md:w-96 md:h-96 object-contain"
              loading="eager"
              decoding="async"
              placeholder
            />

            <h1 class="hero-title text-xl sm:text-2xl lg:text-3xl font-bold text-highlighted mb-4 md:mb-6">
              Northeastern PA's trusted family-owned contractor, building on a legacy of quality since 2001.
            </h1>

            <div class="flex flex-col md:flex-row gap-3 md:gap-4 justify-center md:justify-center items-stretch">
              <UButton
                color="primary"
                variant="solid"
                size="xl"
                to="/contact-pa-contractor"
                class="w-full md:w-auto"
              >
                Get a Free Quote
              </UButton>
              <UButton
                color="primary"
                variant="outline"
                size="xl"
                href="tel:+15705551234"
                class="w-full md:w-auto"
              >
                Call Now
              </UButton>
            </div>
          </div>
        </div>

        <!-- Right Column - Before/After Slider -->
        <div class="mt-auto md:mt-0">
          <div
            ref="containerRef"
            class="relative border-l-0 md:border-l h-96 sm:h-[28rem] md:h-full w-full overflow-hidden cursor-col-resize mt-auto md:mt-0"
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
