<script setup lang="ts">
import AppFeaturesContent from './AppFeaturesContent.vue'
import AppSectionHeader from './AppSectionHeader.vue'
</script>

<template>
  <section
    id="features"
    class="flex flex-col gap-y-8 bg-gray-50 py-8 sm:gap-y-12 sm:py-16 dark:bg-gray-700"
  >
    <AppSectionHeader
      heading="Unlock the Full Potential"
      subheading="With tailored settings, keyboard shortcuts, and powerful extensions,
      you can work smarter and faster."
    />
    <AppFeaturesContent />
  </section>
</template>
