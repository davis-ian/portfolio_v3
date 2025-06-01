<template>
    <div class="flex flex-col xl:flex-row">
        <div class="relative overflow-hidden flex-grow-1">
            <div class="bg-black flex justify-center overflow-hidden">
                <video
                    class="w-full h-full max-h-screen aspect-9/16 md:aspect-video object-cover object-bottom border-0"
                    :src="videoSrc"
                    autoplay
                    muted
                    loop
                    playsinline
                />
            </div>

            <div
                class="hidden xl:flex absolute bottom-0 left-0 m-6 p-6 max-w-md rounded-md backdrop-blur-md text-surface flex-col gap-4"
            >
                <h3 class="text-xl uppercase font-bold xl:text-3xl">Forma</h3>
                <p class="text-sm xl:text-base">
                    Forma is a 3D roguelite sandbox with custom ECS and procedurally generated dungeons — all in a
                    modern Vue + Three.js stack.
                </p>

                <div class="flex flex-wrap gap-2">
                    <!-- <Chip>Vue 3</Chip>
                    <Chip>TypeScript</Chip>
                    <Chip>Three.js</Chip> -->
                    <Chip>Custom ECS Engine</Chip>
                    <Chip>Procedurally Generated Levels</Chip>
                </div>

                <div class="flex gap-2 mt-2">
                    <!-- <Button @click="openTab('https://forma.iandavis.dev/')">Play</Button>
                    <Button @click="openTab('/projects/forma')" variant="secondary">Details</Button> -->

                    <Button
                        variant="primary"
                        @click="openTab('https://forma.iandavis.dev/')"
                        class="shadow-md scale-105 hover:scale-110 transition-transform group"
                    >
                        <Icon name="ph:play-fill" class="mr-2 group-hover:animate-spin" />
                        <span> Play Demo </span>
                    </Button>
                    <Button variant="outline" @click="openTab('/projects/forma')">Details</Button>
                </div>
            </div>
        </div>

        <div class="p-4 xl:max-w-md xl:hidden">
            <h3 class="text-xl uppercase font-bold xl:text-3xl">Forma</h3>
            <p class="mt-2">
                Forma is a 3D roguelite sandbox with custom ECS and procedurally generated dungeons — all in a modern
                Vue + Three.js stack.
            </p>
            <div class="mt-3 flex flex-wrap gap-2">
                <!-- <Chip>Vue 3</Chip>
                <Chip>TypeScript</Chip>
                <Chip>Three.js</Chip> -->
                <Chip>Custom ECS Engine</Chip>
                <Chip>Procedurally Generated Levels</Chip>
            </div>

            <div class="mt-6 flex gap-2">
                <Button @click="openTab('https://forma.iandavis.dev/')">Play</Button>
                <!-- <Button @click="openTab('https://github.com/davis-ian/forma')" variant="secondary">Code</Button> -->
                <Button @click="openTab('/projects/forma')" variant="secondary">Details</Button>
            </div>
        </div>
    </div>
</template>

<script setup>
import videoSrc from '@/assets/videos/forma-demo.mp4?url';
// import videoSrcZoomed from '@/assets/videos/forma-demo-zoomed.mp4?url';

import Chip from '~/components/ui/Chip.vue';
import Button from './ui/Button.vue';

function openTab(url) {
    window.open(url, '_blank');
}
</script>

<style lang="scss" scoped>
// .bg-noise {
//     background: radial-gradient(ellipse at center, #f9f9f9 0%, #f0f0f0 100%);
// }
</style>
