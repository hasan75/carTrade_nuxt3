<script setup>
  const route = useRoute();

  const { toCapitalize } = useUtilities();

  useHead({
    title: route.params.make
      ? `${toCapitalize(route.params.make)} in ${toCapitalize(
          route.params.city
        )}`
      : `Cars in ${toCapitalize(route.params.city)}`,
  });

  definePageMeta({ layout: "custom" });
</script>

<template>
  <!-- Cars Page  -->
  <div class="mt-32 flex">
    <NuxtErrorBoundary>
      <!-- cars sidebar  -->
      <CarSideBar />
      <!-- cars sidebar ends  -->
      <!-- car cards  -->
      <NuxtPage />
      <!-- car cards  -->
      <template #error="{ error }">
        <div
          class="text-center mx-auto flex flex-col justify-center items-center space-y-5"
        >
          <h1 class="text-5xl text-bold text-red-400">
            Sorry, Something Went Wrong
          </h1>
          <code>{{ error }}</code>
          <button
            @click="error.value = null"
            class="px-10 mt-7 py-4 bg-blue-400 text-white text-3xl rounded shadow-sm hover:shadow-md"
          >
            Go Back
          </button>
        </div>
      </template>
    </NuxtErrorBoundary>
  </div>
  <!-- Cars Page Ends  -->
</template>
