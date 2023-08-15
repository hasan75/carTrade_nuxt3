<script setup>

const error = useError();

const handleError = () => {
    // navigateTo('/');
    clearError({
        redirect: '/',
    })
}

</script>

<template>
    <div class="flex flex-col justify-center items-center h-screen w-full space-y-7">
        <h1 class="text-8xl font-semibold">{{ error?.statusCode }}</h1>
        <p class="text-3xl text-justify">{{ error?.message }}</p>
        <button class="px-7 py-3 text-2xl text-white bg-blue-500 rounded-md hover:shadow-md" @click="handleError">Go
            Back</button>
    </div>
</template>