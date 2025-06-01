<template>
    <NuxtLayout>
        <NuxtPage :transition="pageTransition" />
    </NuxtLayout>
</template>

<script setup>
const pageTransition = {
    name: 'page-fade-slide',
    mode: 'out-in',
};
</script>

<style>
.page-fade-slide-enter-active,
.page-fade-slide-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-fade-slide-enter-from,
.page-fade-slide-leave-to {
    opacity: 0;
    transform: translateY(6px);
}
</style>
