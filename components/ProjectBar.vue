<template>
    <div class="flex flex-col group">
        <div class="border-2 border-solid flex-grow-1">
            <div class="relative overflow-hidden h-full">
                <img
                    :src="props.project.imageSrc"
                    alt="Project Preview"
                    class="transition duration-300 h-full ease-in-out filter object-cover brightness-75 grayscale group-hover:brightness-100 group-hover:grayscale-0"
                />
            </div>
        </div>
        <div
            class="bg-black text-white text-2xl overflow-hidden h-0 transition-all duration-500 ease-in-out flex group-hover:h-20"
        >
            <span class="m-4">
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

<style lang="scss" scoped></style>
