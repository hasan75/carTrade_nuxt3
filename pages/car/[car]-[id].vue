<script setup>
  const route = useRoute();
  const { toCapitalize } = useUtilities();
  const { cars } = useCars();

  useHead({ title: `${toCapitalize(route.params.car)}` });
  definePageMeta({
    layout: "custom",
  });

  const car = computed(() => {
    return cars.find((car) => {
      return car.id === parseInt(route.params.id);
    });
  });

  if (!car.value) {
    throw createError({
      statusCode: 404,
      message: `Car with ID: ${route.params.id} not found`,
    });
  }
</script>
<template>
  <!-- Cars Detail Page  -->
  <div v-if="car">
    <!-- car hero  -->
    <CarDetailHero :car="car" />
    <!-- car hero ends  -->

    <!-- car attributes  -->
    <CarDetailAttributes :features="car?.features" />
    <!-- car attributes  -->

    <!-- car information  -->
    <CarDetailInformation :description="car?.description" />
    <!-- car information  -->

    <!-- car contact  -->
    <CarDetailContact />
    <!-- car contact  -->
  </div>
  <div
    v-else
    class="flex items-center justify-center"
  >
    <h1 class="text-red-400 font-semibold text-5xl">Content Not Found</h1>
  </div>

  <!-- Cars Detail Page Ends  -->
</template>
