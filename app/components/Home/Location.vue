<script
  setup
  lang="ts"
>
import { onMounted, ref } from 'vue'
import type { Map } from 'leaflet'

const mapContainer = ref<HTMLElement>()
let map: Map | null = null

// Structured Data for SEO
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Kilmer Construction LLC",
        "description": "Professional construction services in Pennsylvania",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "132 Cherry St.",
          "addressLocality": "Archbald",
          "addressRegion": "PA",
          "postalCode": "18403",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 41.5051,
          "longitude": -75.5398
        },
        "telephone": "+15705551234",
        "email": "info@kilmerconstruction.com",
        "url": "https://kilmerconstruction.com",
        "openingHours": [
          "Mo-Fr 08:00-17:00",
          "Sa 09:00-15:00"
        ],
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 41.5051,
            "longitude": -75.5398
          },
          "geoRadius": "50000"
        },
        "priceRange": "$$",
        "areaServed": [
          "Archbald, PA",
          "Scranton, PA",
          "Carbondale, PA",
          "Lackawanna County, PA"
        ]
      })
    }
  ]
})

onMounted(async () => {
  // Dynamically import Leaflet to avoid SSR issues
  const L = await import('leaflet')

  // Initialize map with broader view to show service area
  map = L.map(mapContainer.value!).setView([41.4, -75.6], 10)

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map)

  // Service area polygon covering Lackawanna County and surrounding areas
  const serviceAreaCoords: [number, number][] = [
    // Approximate boundary of service area covering:
    // Archbald, Scranton, Carbondale, Dunmore, Clarks Summit, etc.
    [41.65, -75.85], // Northwest
    [41.65, -75.35], // Northeast  
    [41.25, -75.25], // Southeast
    [41.15, -75.75], // Southwest
    [41.35, -75.95], // West
    [41.65, -75.85]  // Back to start
  ]

  // Add service area polygon
  const serviceArea = L.polygon(serviceAreaCoords, {
    color: '#3b82f6',      // Blue border
    fillColor: '#3b82f6',  // Blue fill
    fillOpacity: 0.2,      // Semi-transparent
    weight: 2,             // Border thickness
    opacity: 0.8           // Border opacity
  }).addTo(map)

  // Add business location marker
  const businessMarker = L.marker([41.5051, -75.5398], {
    icon: L.divIcon({
      html: '<div style="background: #ef4444; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>',
      className: 'business-marker',
      iconSize: [16, 16],
      iconAnchor: [8, 8]
    })
  }).addTo(map)

  businessMarker.bindPopup(`
    <div class="text-center">
      <strong>Kilmer Construction LLC</strong><br>
      132 Cherry St.<br>
      Archbald, PA 18403<br>
      <small>📍 Our Office Location</small>
    </div>
  `)

  // Add service area popup
  serviceArea.bindPopup(`
    <div class="text-center">
      <strong>🏗️ Service Area</strong><br>
      <small>Lackawanna County & Surrounding Areas</small><br>
      <em>Archbald • Scranton • Carbondale<br>
      Dunmore • Clarks Summit & More</em>
    </div>
  `)

  // Fit map to show the entire service area
  map.fitBounds(serviceArea.getBounds(), { padding: [20, 20] })
})
</script>

<template>
  <div class="border-y bg-elevated">
    <UContainer>
      <section class="py-16">


        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <!-- Contact Information -->
          <div>

            <div class="">
              <h3>Contact Us</h3>
              <div class="space-y-3 mt-4">
                <div class="flex items-center gap-3">
                  <UIcon
                    name="i-mdi-phone"
                    class="text-primary"
                    size="20"
                  />
                  <a
                    href="tel:+15705551234"
                    class="text-primary hover:underline"
                  >
                    (570) 555-1234
                  </a>
                </div>

                <div class="flex items-center gap-3">
                  <UIcon
                    name="i-mdi-email"
                    class="text-primary"
                    size="20"
                  />
                  <a
                    href="mailto:info@kilmerconstruction.com"
                    class="text-primary hover:underline"
                  >
                    info@kilmerconstruction.com
                  </a>
                </div>
                <div class="flex items-center gap-3">
                  <UIcon
                    name="i-mdi-map-marker"
                    class="text-primary"
                    size="20"
                  />
                  <a
                    href="https://www.google.com/maps?q=841+Spruce+Street,+Olyphant,+PA+18447"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-primary hover:underline"
                  >
                    841 Spruce Street, Olyphant, PA 18447
                  </a>
                </div>
              </div>
            </div>

            <div class="mt-8">
              <h3>Service Area</h3>
              <p class="text-muted mt-4">
                Professional construction services throughout Archbald, Scranton, Carbondale, Dunmore, Clarks Summit,
                and surrounding communities in Lackawanna County and Northeast Pennsylvania.
              </p>
            </div>


          </div>

          <!-- Map -->
          <div>
            <div
              ref="mapContainer"
              class="w-full h-80 lg:h-96 bg-gray-100 border border-stone-500/40"
              style="min-height: 320px;"
            />
            <p class="!text-sm text-muted mt-2 text-center">
              Blue area shows our service coverage • Red dot is our office location
            </p>
          </div>
        </div>
      </section>
    </UContainer>
  </div>
</template>

<style>
/* Import Leaflet CSS */
@import 'leaflet/dist/leaflet.css';
</style>
