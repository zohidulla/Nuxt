<script setup lang="ts">
import AppFeatures from './components/AppFeatures.vue';
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppHero from './components/AppHero.vue';
import AppNewsletter from './components/AppNewsletter.vue';

</script>

<template>
  <div class="flex min-h-screen flex-col dark:bg-gray-800">
    <AppHeader />
    <main>
      <AppHero />
      <AppFeatures />
      <AppNewsletter />
    </main>
    <AppFooter />
  </div>
</template>
