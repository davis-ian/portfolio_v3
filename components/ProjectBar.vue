<template>
    <div class="flex flex-col group" @click="emit('activate')" @mouseenter="emit('hover')" @mouseleave="emit('leave')">
        <div class="border-solid flex-grow-1">
            <div class="relative overflow-hidden h-full">
                <img
                    :src="props.project.imageSrc"
                    alt="Project Preview"
                    class="transition duration-300 h-50 w-full md:h-full ease-in-out filter object-cover object-center brightness-75 grayscale"
                    :class="{ 'brightness-100 grayscale-0': props.isActive }"
                />
            </div>
        </div>
        <div
            class="bg-black text-white text-2xl overflow-hidden h-0 transition-all duration-500 ease-in-out flex"
            :class="props.isActive ? 'h-20' : 'h-0'"
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
    isActive: Boolean,
});

const emit = defineEmits(['activate']);
</script>

<style lang="scss" scoped></style>
