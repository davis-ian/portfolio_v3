<template>
    <div class="flex h-screen">
        <ProjectBar v-for="(project, i) in projects" :key="i" :project="project" />
    </div>
</template>

<script setup>
import ProjectBar from './ProjectBar.vue';

import imageSrc from '@/assets/images/concert1.jpg';

const projects = [
    { name: 'Upnext', description: '', imageSrc: imageSrc },
    { name: 'Minigames', description: '', imageSrc: imageSrc },
    { name: 'Clipper', description: '', imageSrc: imageSrc },
    { name: 'Lift Tracker', description: '', imageSrc: imageSrc },
];
</script>

<style lang="scss" scoped></style>
