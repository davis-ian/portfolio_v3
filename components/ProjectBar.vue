<template>
    <div class="flex flex-col group relative">
        <div class="border-solid flex-grow-1">
            <div class="relative overflow-hidden h-full">
                <img
                    :src="project.imageSrc"
                    alt="Project Preview"
                    class="transition duration-300 h-60 w-full md:h-full ease-in-out filter object-cover object-center brightness-100 grayscale-0 md:brightness-75 md:grayscale md:group-hover:brightness-100 md:group-hover:grayscale-0"
                />
            </div>
        </div>

        <div
            class="bg-black hidden md:flex text-white text-xl lg:text-2xl 2xl:text-4xl  overflow-hidden uppercase transition-all font-black  duration-500 ease-in-out w-full h-30 md:h-0 md:group-hover:h-30"
        >
            <span class="m-4">
                {{ project.name }}
            </span>
        </div>

        <div
            class="bg-black absolute bottom-0 left-0 flex w-fit md:hidden text-white text-xl uppercase  overflow-hidden transition-all duration-500 ease-in-out p-2"
        >
            <span>
                {{ project.name }}
            </span>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    project: Object,
});
</script>
