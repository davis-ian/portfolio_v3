<template>
    <span class="relative inline-block group wrapper">
        <slot />
        <span
            class="absolute left-0 bottom-0 h-[2px] w-0 bg-text-primary transition-all duration-300 group-hover:w-full"
        ></span>
    </span>
</template>

<script setup></script>

<style scoped>
.wrapper:hover span {
    transform: scaleX(1);
}
.wrapper span {
    transform-origin: left;
}
</style>
