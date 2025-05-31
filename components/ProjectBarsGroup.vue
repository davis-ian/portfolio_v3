<template>
    <div class="flex h-screen">
        <ProjectBar v-for="(project, i) in projects" :key="i" :project="project" />
    </div>
</template>

<script setup>
import ProjectBar from './ProjectBar.vue';

// import imageSrc from '@/assets/images/concert1.jpg';
import clipperMock from '@/assets/images/clipper2.png';
import upnextMock from '@/assets/images/upnext.png';
import miniMock from '@/assets/images/minigames1.png';

const projects = [
    { name: 'Upnext', description: '', imageSrc: upnextMock },
    { name: 'Minigames', description: '', imageSrc: miniMock },
    { name: 'Clipper', description: '', imageSrc: clipperMock },
    // { name: 'Lift Tracker', description: '', imageSrc: imageSrc },
];
</script>

<style lang="scss" scoped></style>
