<script setup lang="ts">
defineProps<{
  icon: string
}>()
</script>

<template>
  <NuxtLink class="-mr-1.5 rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
    <Icon name="bars" class="size-6 dark:text-white" />
  </NuxtLink>
</template>