<script setup>
  const props = defineProps({
    listing: Object,
  });
</script>

<template>
  <div class="shadow rounded overflow-hidden flex justify-between mb-4">
    <div class="flex">
      <NuxtImg
        :src="listing.url"
        :alt="listing.name"
        class="w-80 mr-3 h-44"
      />
      <div class="p-3">
        <h1 class="text-2xl">{{ listing.name }}</h1>
        <p class="text-blue-400">$ {{ listing.price }}</p>
      </div>
    </div>
    <div class="p-3 flex">
      <NuxtLink
        :to="`/profile/listing/view/${listing.id}`"
        class="text-blue-400 mr-5"
        >View</NuxtLink
      >
      <p class="cursor-pointer text-red-400">Delete</p>
    </div>
  </div>
</template>
