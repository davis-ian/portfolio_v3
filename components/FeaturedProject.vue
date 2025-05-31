<template>
    <div class="flex flex-col xl:flex-row bg-black">
        <div class="relative overflow-hidden flex-grow-1">
            <div class="bg-black flex justify-center">
                <video
                    class="w-full h-full max-h-200 md:max-h-full max-w-400 aspect-9/16 md:aspect-video object-cover object-bottom border-0"
                    :src="videoSrc"
                    autoplay
                    muted
                    loop
                    playsinline
                />
            </div>
        </div>

        <div class="bg-black text-white p-4 border-y xl:max-w-md border-2 border-black">
            <h3 class="text-xl uppercase font-bold xl:text-3xl">Forma</h3>
            <p class="mt-2">
                Forma is a 3D action sandbox built with Vue 3, TypeScript, and Three.js — featuring a
                <strong>hand-rolled ECS engine</strong> and <strong>procedurally generated levels</strong>. It’s
                designed to demonstrate scalable architecture and real-time rendering in a modern frontend stack.
            </p>
            <div class="mt-3 flex flex-wrap gap-2">
                <Chip>Vue 3</Chip>
                <Chip>TypeScript</Chip>
                <Chip>Three.js</Chip>
                <Chip>Custom ECS Engine</Chip>
                <Chip>Procedurally Generated Levels</Chip>
            </div>

            <div class="mt-6 flex gap-2">
                <Button @click="openTab('https://forma.iandavis.dev/')">Play</Button>
                <Button @click="openTab('https://github.com/davis-ian/forma')" variant="secondary">Code</Button>
            </div>
        </div>
    </div>
</template>

<script setup>
import videoSrc from '@/assets/videos/forma-demo.mp4?url';

import Chip from '~/components/ui/Chip.vue';
import Button from './ui/Button.vue';

function openTab(url) {
    window.open(url, '_blank');
}
</script>

<style lang="scss" scoped></style>
