<template>
    <a :href="href" class="relative inline-block group">
        <slot />
        <span
            class="absolute left-0 bottom-0 h-[2px] w-0 bg-text-primary transition-all duration-300 group-hover:w-full"
        ></span>
    </a>
</template>

<script setup>
defineProps({
    href: { type: String, required: true },
});
</script>

<style scoped>
a:hover span {
    transform: scaleX(1);
}
a span {
    transform-origin: left;
}
</style>
