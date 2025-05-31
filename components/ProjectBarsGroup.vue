<template>
    <div class="flex md:h-screen flex-col md:flex-row">
        <ProjectBar
            v-for="(project, i) in projects"
            :key="i"
            :project="project"
            :is-active="activeIndex === i"
            @activate="() => setActive(i)"
            @hover="() => setActive(i)"
            @leave="clearActive"
        />
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

const activeIndex = ref(null);

function setActive(index) {
    activeIndex.value = activeIndex.value === index ? null : index;
}
function clearActive() {
    activeIndex.value = null;
}
</script>

<style lang="scss" scoped></style>
