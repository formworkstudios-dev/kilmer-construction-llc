<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <header>
      <SharedNav />
    </header>
    <main>
      <NuxtPage />
    </main>
    <footer>
      <SharedFooter />
    </footer>
  </UApp>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
