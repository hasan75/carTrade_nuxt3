<script setup>
  const { cars } = useCars();

  const favorites = useLocalStorage("favorites", {});

  const updateFavorite = (id) => {
    if (id in favorites.value) {
      delete favorites.value[id];
    } else {
      favorites.value = {
        ...favorites.value,
        [id]: true,
      };
    }
  };

  /**
   ** We can use <ClientOnly></ClientOnly> and wrap the<CarCard /> into it. For this the CarCard will be rendered in ClientSite only
   */

  const loading = ref(true);

  onMounted(() => {
    loading.value = false;
  });
</script>

<template>
  <div class="w-full">
    <div
      v-if="loading"
      class="flex items-center justify-center text-center"
    >
      <h2 class="text-blue-400 text-3xl mt-3">Loading...</h2>
    </div>
    <!-- card  -->
    <CarCard
      v-if="!loading"
      v-for="car in cars"
      :key="car.id"
      :car="car"
      :favorites="favorites"
      @favor="updateFavorite"
      :favorite="car.id in favorites"
    />
    <!-- card  -->
  </div>
</template>
