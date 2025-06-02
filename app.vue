<template>
    <NuxtLayout>
        <NuxtPage :transition="pageTransition" />

        <!-- <div
            ref="cursorGrain"
            class="fixed top-0 left-0 w-48 h-48 rounded-full pointer-events-none z-50 overflow-hidden"
        >
            <div class="grain w-full h-full rounded-full"></div>
        </div> -->
    </NuxtLayout>
</template>

<script setup>
// import { ref, onMounted, onBeforeUnmount } from 'vue';
const pageTransition = {
    name: 'page-fade-slide',
    mode: 'out-in',
};

// const cursorGrain = ref(null);

// const handleMouseMove = e => {
//     const el = cursorGrain.value;
//     if (el) {
//         el.style.transform = `translate(${e.clientX - 96}px, ${e.clientY - 96}px)`;
//     }
// };

// onMounted(() => {
//     window.addEventListener('mousemove', handleMouseMove);
// });

// onBeforeUnmount(() => {
//     window.removeEventListener('mousemove', handleMouseMove);
// });
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

.grain {
    background-image: url('/assets/images/grain.png'); /* Add a small grain texture in public/textures */
    background-size: cover;
    /* animation: grainMotion 0.5s infinite; */
    opacity: 0.3;
    /* border: 2px solid red; */
}

/* @keyframes grainMotion {
    0% {
        background-position: 0 0;
    }

    20% {
        background-position: 20% 20%;
    }
    40% {
        background-position: 40% 40%;
    }
    60% {
        background-position: 60% 60%;
    }
    80% {
        background-position: 80% 80%;
    }
    100% {
        background-position: 100% 100%;
    }
} */
</style>
