<script setup>
  const props = defineProps({
    description: String,
  });
</script>

<template>
  <div class="mt-5">
    <p class="mb-10 text-justify">{{ description }}</p>
  </div>
</template>
