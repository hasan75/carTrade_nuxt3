<script setup>
  const { sliceSentence } = useSentenceSlice();

  import heartFilled from "@/assets/img/heartFilled.png";
  import heartOutline from "@/assets/img/heartOutline.png";

  const props = defineProps({
    car: Object,
    favorite: Boolean,
  });

  /**
   * * Using useState
   */

  // const favorite = useState(`favorite-${props.car.name}`, () => {
  //     return false;
  // })

  const emit = defineEmits(["favor"]);
</script>

<template>
  <div
    class="shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px] hover:shadow-md relative"
  >
    <img
      :src="favorite ? heartFilled : heartOutline"
      :alt="favorite ? 'filled heart' : 'outlined heart'"
      class="absolute w-7 top-2 z-20 right-3"
      @click="emit('favor', car.id)"
    />
    <div
      class="h-full flex"
      @click="navigateTo(`/car/${car.name}-${car.id}`)"
    >
      <NuxtImg
        :src="car?.url"
        :alt="car?.name"
        class="w-[350px] h-full min-w-[320px]"
      />
      <div class="flex flex-col p-4">
        <div>
          <h1 class="text-2xl text-blue-400">{{ car?.name }}</h1>
          <p class="text-gray-700 text-justify py-2">
            {{ sliceSentence(car?.description, 130) }}
          </p>
        </div>
        <h1 class="mt-auto text-xl">$ {{ car?.price }}</h1>
      </div>
    </div>
  </div>
</template>
