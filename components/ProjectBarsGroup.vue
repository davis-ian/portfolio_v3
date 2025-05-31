<template>
    <div class="flex h-full flex-col md:flex-row overflow-hidden">
        <NuxtLink
            v-for="(project, i) in projects"
            :key="i"
            :to="`/projects/${project.slug}`"
            class="transition-transform hover:scale-[1.02] duration-300 border-0"
        >
            <ProjectBar class="h-full" :project="project" />
        </NuxtLink>
    </div>
</template>

<script setup>
import ProjectBar from './ProjectBar.vue';

// import imageSrc from '@/assets/images/concert1.jpg';
import clipperMock from '@/assets/images/clipper2.png';
import upnextMock from '@/assets/images/upnext.png';
import miniMock from '@/assets/images/minigames1.png';

const projects = [
    { name: 'Upnext', slug: 'upnext', imageSrc: upnextMock },
    { name: 'Minigames', slug: 'minigames', imageSrc: miniMock },
    { name: 'Clipper', slug: 'ffmpeg-wa', imageSrc: clipperMock },
    // { name: 'Lift Tracker', description: '', imageSrc: imageSrc },
];
</script>

<style lang="scss" scoped></style>
