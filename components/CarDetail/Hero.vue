<script setup>
  const props = defineProps({
    car: Object,
  });
</script>

<template>
  <div class="mt-6">
    <NuxtImg
      class="w-full"
      :src="car.url"
      :alt="car?.name"
    />
    <h1 class="mt-10 text-4xl">{{ car?.name }}</h1>
    <div class="text-slate-500 flex text-lg mt-3 border-b pb-5 justify-between">
      <div class="flex">
        <p class="mr-2">{{ car?.seats }} seats</p>
        <p class="mr-2">|</p>
        <p class="mr-2">{{ car?.miles }} miles</p>
      </div>
      <div>
        <p class="text-2xl font-bold">$ {{ car?.price }}</p>
      </div>
    </div>
  </div>
</template>
