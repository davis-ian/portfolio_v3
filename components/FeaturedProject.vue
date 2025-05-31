<template>
    <div class="flex justify-center bg-black">
        <div class="relative max-h-300 overflow-hidden aspect-video">
            <video class="w-full object-cover border-0" :src="videoSrc" autoplay muted loop playsinline />
            <div class="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent"></div>

            <div class="text-white absolute bottom-0 left-0 right-0 m-auto p-4">
                <h3 class="text-2xl mt-5">Forma</h3>
                <p class="mt-2 max-w-3xl">
                    Forma is a 3D action sandbox built with Vue 3, TypeScript, and Three.js — featuring a
                    <strong>hand-rolled ECS engine</strong> and <strong>procedurally generated levels</strong>. It’s
                    designed to demonstrate scalable architecture and real-time rendering in a modern frontend stack.
                </p>

                <div class="mt-3 flex gap-6">
                    <Chip>Vue 3</Chip>
                    <Chip>TypeScript</Chip>
                    <Chip>Three.js</Chip>
                    <Chip>Custom ECS Engine</Chip>
                    <Chip>Procedurally Generated Levels</Chip>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import videoSrc from '@/assets/videos/forma-demo.mp4?url';

import Chip from '~/components/ui/Chip.vue';
</script>

<style lang="scss" scoped></style>
