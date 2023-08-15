<template>
  <div
    class="relative h-fitScreen w-100 bg-no-repeat bg-cover bg-bottom bg-[url('/assets/img/ferrariHome.avif')]"
  >
    <div class="z-10 absolute w-full h-full flex justify-center items-center">
      <div class="text-center w-1/2">
        <h1 class="text-8xl font-serif mb-10 text-white">Find your drive</h1>
        <!-- HOME SEARCH BAR -->
        <CarSearchBar />
        <!-- HOME SEARCH BAR -->
      </div>
    </div>
    <div class="z-1 absolute w-full h-full bg-black opacity-50"></div>
  </div>
</template>

<style>
  .h-fitScreen {
    height: 92vh;
  }
</style>
