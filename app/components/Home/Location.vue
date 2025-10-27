<script
  setup
  lang="ts"
>
import { onMounted, ref } from 'vue'
import type { Map } from 'leaflet'

const mapContainer = ref<HTMLElement>()
let map: Map | null = null


onMounted(async () => {
  // Dynamically import Leaflet to avoid SSR issues
  const L = await import('leaflet')

  // Initialize map with broader view to show service area
  map = L.map(mapContainer.value!).setView([41.4, -75.6], 10)

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map)

  // Load counties.geojson for service area
  const response = await fetch('/counties.geojson')
  const countiesGeoJson = await response.json()

  // Add GeoJSON layer for counties
  const countiesLayer = L.geoJSON(countiesGeoJson, {
    style: {
      color: '#3b82f6',      // Blue border
      fillColor: '#3b82f6',  // Blue fill
      fillOpacity: 0.2,      // Semi-transparent
      weight: 2,             // Border thickness
      opacity: 0.8           // Border opacity
    }
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

  // Fit map to show the entire counties layer
  map.fitBounds(countiesLayer.getBounds(), { padding: [20, 20] })
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
                    href="tel:+15708786334"
                    class="text-primary hover:underline"
                  >
                    (570) 878-6334
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
              Don't see your service area? <NuxtLink
                to="/contact-pa-contractor"
                class="text-primary hover:underline"
              >Contact us</NuxtLink>.
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

/* Hide Leaflet attribution and logo (including Ukrainian flag) */
.leaflet-control-attribution,
.leaflet-control-logo {
  display: none !important;
}
</style>
