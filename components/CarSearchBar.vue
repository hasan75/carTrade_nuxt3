<script setup>
  const city = ref("");
  const cityError = ref(false);
  /**
   * * instead of useRouter we can use navigateTo()
   */

  // const router = useRouter();

  const searchCar = () => {
    if (!city.value) {
      return (cityError.value = true);
    }
    // router.push(`/city/${city.value}/car`)
    navigateTo(`/city/${city.value}/car`);
  };
</script>

<template>
  <div
    class="font-serif w-[850px] text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto"
    :class="cityError ? 'border border-red-500' : ''"
  >
    <input
      type="text"
      class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none"
      :placeholder="
        cityError ? 'You did not enter any city name' : 'Search by city...'
      "
      v-model="city"
      @keyup.enter="searchCar"
    />
    <button
      class="bg-sky-500 px-10 text-white"
      @click="searchCar"
    >
      Search
    </button>
  </div>
</template>
