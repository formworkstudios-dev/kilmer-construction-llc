<script
  setup
  lang="ts"
></script>

<template>
  <div>
    <!-- Full-width header image with overlay text -->
    <div
      class="mt-22 relative h-80 md:h-96 w-full bg-cover bg-center border-b"
      style="background-image: url('/window-installation.webp');"
    >
      <div class="absolute inset-0 bg-black/60" />
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center px-4">
          <h1 class="m-0 text-stone-100">Privacy Policy</h1>
          <p class="text-stone-300 mt-2">How we collect, use, and protect your information</p>
        </div>
      </div>
    </div>

    <UContainer class="pt-8 pb-16 max-w-3xl min-h-screen">
      <div class="flex flex-col gap-8">
        <div>
          <p class="text-muted">Effective date: October 6, 2025</p>
          <p class="mt-4">
            Kilmer Construction LLC ("we", "our", or "us") respects your privacy. This Privacy Policy explains what
            information we collect, how we use it, and your choices. By using our website, you agree to the terms
            described here.
          </p>
        </div>

        <div class="space-y-2">
          <h2>Information We Collect</h2>
          <p>
            We may collect information that you provide directly (for example, via our contact form), including your
            name, email address, phone number, and any message you submit. We may also collect certain technical
            information when you use our site, such as IP address, device and browser type, pages visited, and
            interactions with our content.
          </p>
        </div>

        <div class="space-y-2">
          <h2>Cookies and Tracking</h2>
          <p>
            We use cookies and similar technologies to operate our site and understand usage. We may use third‑party
            services such as Google (e.g., Google Analytics) and Meta (e.g., Meta Pixel), as well as other platforms, to
            help measure traffic, improve performance, and deliver or measure advertising. These providers may set their
            own cookies and collect information about your use of our site and other sites, subject to their respective
            privacy policies.
          </p>
          <p>
            You can control cookies through your browser settings. Some browsers also offer tools to block tracking
            technologies. Disabling certain cookies may affect site functionality.
          </p>
        </div>

        <div class="space-y-2">
          <h2>How We Use Information</h2>
          <ul class="list-disc pl-6 space-y-1">
            <li>To respond to your inquiries and provide customer service</li>
            <li>To operate, maintain, and improve our website and services</li>
            <li>To analyze usage and performance (including via third‑party analytics)</li>
            <li>To market our services, including measuring campaign effectiveness</li>
            <li>To comply with legal obligations and protect our rights</li>
          </ul>
        </div>

        <div class="space-y-2">
          <h2>Sharing of Information</h2>
          <p>
            We may share information with service providers that help us operate our business (for example, website
            hosting, analytics, email and communications providers). We may also share information if required by law or
            to protect our rights, users, or the public.
          </p>
        </div>

        <div class="space-y-2">
          <h2>Your Choices</h2>
          <ul class="list-disc pl-6 space-y-1">
            <li>Opt‑out of marketing emails by using the unsubscribe instructions in those emails</li>
            <li>Control cookies through your browser settings and privacy tools</li>
            <li>Contact us to request access to or deletion of information you have provided</li>
          </ul>
        </div>

        <div class="space-y-2">
          <h2>Data Security</h2>
          <p>
            We take reasonable measures to help protect your information from unauthorized access, disclosure,
            alteration,
            or destruction. However, no method of transmission or storage is 100% secure.
          </p>
        </div>

        <div class="space-y-2">
          <h2>Children’s Privacy</h2>
          <p>
            Our website is not directed to children under 13. We do not knowingly collect personal information from
            children under 13.
          </p>
        </div>

        <div class="space-y-2">
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will post the updated policy on this page with a new
            effective date. Your continued use of the site after changes are posted constitutes your acceptance of the
            revised policy.
          </p>
        </div>

        <div class="space-y-2">
          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our data practices, please contact us at
            <a
              href="mailto:info@kilmerconstruction.com"
              class="text-primary hover:underline"
            >info@kilmerconstruction.com</a>
            or by phone at <a
              href="tel:+15705551234"
              class="text-primary hover:underline"
            >(570) 555‑1234</a>.
          </p>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style scoped></style>
