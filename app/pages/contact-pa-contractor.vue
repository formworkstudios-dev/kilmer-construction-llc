<script
  setup
  lang="ts"
>
import { reactive, ref } from 'vue'
import type { FormError, FormErrorEvent, FormSubmitEvent } from '@nuxt/ui'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const formRef = useTemplateRef('formRef')
const submitting = ref(false)
const success = ref(false)
const serverError = ref<string | null>(null)

const validate = (state: typeof form): FormError[] => {
  const errors: FormError[] = []
  if (!state.name || state.name.trim().length < 2) {
    errors.push({ name: 'name', message: 'Please provide your name.' })
  }
  const emailRe = /[^\s@]+@[^\s@]+\.[^\s@]+/
  if (!state.email || !emailRe.test(state.email)) {
    errors.push({ name: 'email', message: 'Please provide a valid email.' })
  }
  if (!state.message || state.message.trim().length < 10) {
    errors.push({ name: 'message', message: 'Please include a short message (10+ characters).' })
  }
  return errors
}

async function onSubmit(event: FormSubmitEvent<typeof form>) {
  submitting.value = true
  serverError.value = null
  success.value = false
  try {
    const { error } = await useFetch('/api/contact', {
      method: 'POST',
      body: { ...event.data },
    })
    if (error.value) {
      const err = error.value as { message?: string } | null
      serverError.value = err?.message || 'Something went wrong. Please try again.'
      return
    }
    success.value = true
    Object.assign(form, { name: '', email: '', phone: '', message: '' })
  } finally {
    submitting.value = false
  }
}

function onError(e: FormErrorEvent) {
  if (e?.errors?.[0]?.id) {
    const el = document.getElementById(e.errors[0].id)
    el?.focus()
    el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}
</script>

<template>
  <div>
    <!-- Full-width header image with overlay text -->
    <div
      class="mt-22 relative h-80 md:h-96 w-full bg-cover bg-center border-b"
      style="background-image: url('/kitchen-construction.jpg');"
    >
      <div class="absolute inset-0 bg-black/60" />
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center px-4">
          <h1 class="hero-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-100 tracking-tight">Contact
            Kilmer Construction</h1>
          <p class="text-stone-300 mt-2">Tell us about your project and we’ll get back to you soon</p>
        </div>
      </div>
    </div>

    <UContainer class="pt-8 pb-16 max-w-3xl min-h-screen">
      <div class="mb-8 text-center">
        <div class="text-lg font-semibold text-stone-700">Call or Email Us Directly:</div>
        <div class="mt-2">
          <span class="inline-block mr-4">
            <UIcon
              name="i-mdi-phone"
              class="mr-1 align-middle"
              size="18"
            />
            <a
              href="tel:5035551234"
              class="text-primary font-medium hover:underline"
            >(503) 555-1234</a>
          </span>
          <span class="inline-block">
            <UIcon
              name="i-mdi-email"
              class="mr-1 align-middle"
              size="18"
            />
            <a
              href="mailto:info@kilmerconstruction.com"
              class="text-primary font-medium hover:underline"
            >info@kilmerconstruction.com</a>
          </span>
        </div>
      </div>
      <UCard
        class="mt-8 rounded-none bg-elevated"
        variant="outline"
      >
        <template #header>
          <div class="flex items-center justify-between ">
            <h2 class="m-0 pt-2">Request a Free Quote</h2>
          </div>
        </template>

        <div class="space-y-4">
          <UAlert
            v-if="success"
            class="rounded-none pb-2 mb-4"
            color="success"
            variant="soft"
            title="Thanks!"
            description="We’ve received your message and will be in touch shortly."
          />
          <UAlert
            v-if="serverError"
            class="rounded-none pb-2 mb-4"
            color="error"
            variant="soft"
            title="There was a problem"
            :description="serverError"
          />
        </div>

        <UForm
          ref="formRef"
          :state="form"
          :validate="validate"
          class="space-y-6"
          @submit="onSubmit"
          @error="onError"
        >
          <UFormField
            label="Name"
            name="name"
            class="w-full"
          >
            <UInput
              v-model="form.name"
              placeholder="Your full name"
              class="w-full rounded-none"
            />
          </UFormField>

          <UFormField
            label="Email"
            name="email"
            class="w-full"
          >
            <UInput
              v-model="form.email"
              type="email"
              placeholder="you@example.com"
              class="w-full rounded-none"
            />
          </UFormField>

          <UFormField
            label="Phone"
            name="phone"
            class="w-full"
          >
            <UInput
              v-model="form.phone"
              type="tel"
              placeholder="(555) 555-5555"
              class="w-full rounded-none"
            />
          </UFormField>

          <UFormField
            label="Message"
            name="message"
            class="w-full"
          >
            <UTextarea
              v-model="form.message"
              :rows="6"
              placeholder="What would you like to build?"
              class="w-full rounded-none"
            />
          </UFormField>

          <div class="flex items-center gap-4">
            <UButton
              :loading="submitting"
              :disabled="submitting"
              type="submit"
              color="primary"
              size="lg"
              variant="solid"
              class="rounded-none w-full md:w-auto justify-center text-center"
            >
              <template
                #leading
                v-if="submitting"
              >
                <UIcon
                  name="i-mdi-loading"
                  class="animate-spin mr-2"
                  size="20"
                />
              </template>
              Send Message
            </UButton>
          </div>
        </UForm>
      </UCard>
    </UContainer>
  </div>
</template>

<style scoped></style>
