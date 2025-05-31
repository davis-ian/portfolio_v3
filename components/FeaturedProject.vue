<template>
    <div class="flex flex-col justify-center bg-black">
        <div class="relative overflow-hidden">
            <div class="flex justify-center">
                <video
                    class="w-full object-cover border-0 max-w-6xl aspect-video"
                    :src="videoSrc"
                    autoplay
                    muted
                    loop
                    playsinline
                />
            </div>

            <!-- Gradient overlay: only visible on md+ -->
            <div
                class="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent hidden md:block"
            ></div>

            <!-- Overlaid text (md and up only) -->
            <div class="text-white absolute bottom-0 left-0 right-0 p-4 hidden lg:block">
                <h3 class="text-2xl mt-5">Forma</h3>
                <p class="mt-2 max-w-3xl">
                    Forma is a 3D action sandbox built with Vue 3, TypeScript, and Three.js — featuring a
                    <strong>hand-rolled ECS engine</strong> and <strong>procedurally generated levels</strong>. It’s
                    designed to demonstrate scalable architecture and real-time rendering in a modern frontend stack.
                </p>
                <div class="mt-3 flex flex-wrap gap-4">
                    <Chip>Vue 3</Chip>
                    <Chip>TypeScript</Chip>
                    <Chip>Three.js</Chip>
                    <Chip>Custom ECS Engine</Chip>
                    <Chip>Procedurally Generated Levels</Chip>
                </div>
            </div>
        </div>

        <!-- Standalone text (mobile only) -->
        <div class="bg-white text-black p-4 block lg:hidden">
            <h3 class="text-2xl mt-5">Forma</h3>
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
                <Button>Play</Button>
                <Button variant="secondary">Code</Button>
            </div>
        </div>
    </div>
</template>

<script setup>
import videoSrc from '@/assets/videos/forma-demo.mp4?url';

import Chip from '~/components/ui/Chip.vue';
import Button from './ui/Button.vue';
</script>

<style lang="scss" scoped></style>
