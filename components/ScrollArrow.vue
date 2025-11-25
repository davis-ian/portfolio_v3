<template>
    <div ref="lottieContainer" class="w-10 h-10 z-10 pointer-events-none"></div>
</template>

<script setup>
import lottie from 'lottie-web';
import { onMounted, ref } from 'vue';

const lottieContainer = ref(null);

onMounted(() => {
    const animation = lottie.loadAnimation({
        container: lottieContainer.value,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/animations/arrow-left-down2.json', // <-- place the file in public/animations
    });

    animation.addEventListener('DOMLoaded', () => {
        // Change all paths to red
        const paths = lottieContainer.value.querySelectorAll('path');
        paths.forEach(path => {
            path.setAttribute('fill', '#fe9900');
            path.setAttribute('stroke', '#fe9900');
        });
    });
});
</script>
