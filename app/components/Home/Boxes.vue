<script
  setup
  lang="ts"
></script>

<template>
  <div class="border-b">
    <UContainer>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
        <UCard class="border border-gray-200 dark:border-gray-800 shadow-none">
          <div class="flex flex-col items-start text-left p-6 gap-3">
            <UIcon
              name="i-mdi-home"
              size="40"
              class="text-primary mb-1"
            />
            <h3>Quality Craftsmanship</h3>
            <p class="text-muted">
              Top‑notch construction with attention to detail and materials that last.
            </p>
          </div>
        </UCard>

        <UCard class="border border-gray-200 dark:border-gray-800 shadow-none">
          <div class="flex flex-col items-start text-left p-6 gap-3">
            <UIcon
              name="i-mdi-timer-sand"
              size="40"
              class="text-primary mb-1"
            />
            <h3>Family‑Owned</h3>
            <p class="text-muted">
              Reliable scheduling, clear communication, and respect for your home.
            </p>
          </div>
        </UCard>

        <UCard class="border border-gray-200 dark:border-gray-800 shadow-none">
          <div class="flex flex-col items-start text-left p-6 gap-3">
            <UIcon
              name="i-mdi-account-group"
              size="40"
              class="text-primary mb-1"
            />
            <h3>Customer Satisfaction</h3>
            <p class="text-muted">
              We listen first and deliver results that meet your goals and budget.
            </p>
          </div>
        </UCard>
      </div>
    </UContainer>
  </div>
</template>

<style scoped></style>
