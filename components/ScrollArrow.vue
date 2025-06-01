<template>
    <div ref="lottieContainer" class="w-10 h-10 z-10 pointer-events-none"></div>
</template>

<script setup>
import lottie from 'lottie-web';
import { onMounted, ref } from 'vue';

const lottieContainer = ref(null);

onMounted(() => {
    lottie.loadAnimation({
        container: lottieContainer.value,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/animations/arrow-left-down.json', // <-- place the file in public/animations
    });
});
</script>
