<template>
    <div class="min-h-screen flex-grow-1 py-24 snap-y snap-proximity overflow-y-auto overflow-x-hidden scroll-smooth">
        <Section class="text-center md:my-24">
            <Heading class="uppercase lg:text-7xl" style="letter-spacing: -0.06em">Ian Davis</Heading>
            <Heading class="text-xl">Software Engineer</Heading>
            <!-- <p>I build clean and modern websites that focus on <strong>UX</strong> and <strong>performance</strong>.</p> -->
            <p>I build things that feel good and work hard — real-time tools, smart media workflows, and clean UI.</p>
            <!-- <Button variant="primary" @click="emailMe" class="mt-12">Contact Me</Button> -->

            <ContactIconGroup />
        </Section>

        <div id="featured">
            <Heading class="my-3 px-6">Featured</Heading>
            <FeaturedProject />
        </div>

        <div id="work" class="mt-20 md:snap-center md:h-screen flex flex-col">
            <Heading class="my-3 px-6">Selected Works</Heading>
            <ProjectBarsGroup />
        </div>

        <Section id="about">
            <Heading class="my-3">About</Heading>
            <p>
                I’m Ian Davis — a full-stack software engineer who thrives at the intersection of creative UX and
                high-performance systems. I design and build thoughtful web experiences, balancing clean design with
                scalable backend architecture. At <a href="https://memoryshare.com" target="_blank">MemoryShare</a>, I
                lead development across the entire stack — from Vue.js frontends to C# APIs, background render
                pipelines, and real-time features powered by SignalR and Azure. I’ve architected video rendering
                engines, built perceptual hashing systems, and shipped real-time collaborative tools. Outside of work, I
                obsess over developer experience, visual polish, and building tools that feel fun to use. Whether I’m
                crafting custom ECS engines for game prototypes or shipping Stripe-integrated SaaS tools, I bring
                curiosity, care, and end-to-end ownership to every project.
            </p>
        </Section>

        <Section id="experience">
            <Heading class="my-3">Experience</Heading>

            <div class="mb-12">
                <h3 class="uppercase text-text-secondary my-1">2022 - Present</h3>
                <h3 class="md:text-xl font-bold">Software Engineer - MemoryShare</h3>
                <p>
                    Design, build, and maintain scalable web applications spanning front-end, API, and background
                    systems. Led architecture of real-time video rendering pipelines, internal tooling, and
                    customer-facing features, with a focus on performance, UX, and reliability.
                </p>
                <div class="mt-3 flex gap-2 flex-wrap">
                    <Chip>Vue.js</Chip>
                    <Chip>C#</Chip>
                    <Chip>FFmpeg</Chip>
                    <Chip>MySQL</Chip>
                </div>
            </div>
            <div class="my-12">
                <h3 class="uppercase text-text-secondary my-1">2021 - 2022</h3>
                <h3 class="md:text-xl font-bold">Instructor Assistant - PDX Code Guild</h3>
                <p>
                    Supported developer bootcamp students in learning full-stack web development, with emphasis on
                    JavaScript, Python, and debugging workflows. Facilitated code reviews and mentored students in
                    real-world project execution.
                </p>
                <div class="mt-3 flex gap-2 flex-wrap">
                    <Chip>Javascript</Chip>
                    <Chip>Python</Chip>
                    <Chip>HTML/CSS</Chip>
                </div>
            </div>
        </Section>
        <hr class="border-gray-200" />
        <Section class="text-center">
            <Heading class="text-xl md:text-3xl mb-6">Like what you see?</Heading>
            <p class="text-base md:text-lg mb-4">
                I'm open to new opportunities, collaborations, or just chatting dev tools.
            </p>
            <a href="mailto:iandaviswebdev@gmail.com" class="font-bold underline text-lg md:text-xl hover:text-accent">
                iandaviswebdev@gmail.com
            </a>
        </Section>
    </div>
</template>

<script setup>
import Chip from '~/components/ui/Chip.vue';
import Button from '~/components/ui/Button.vue';
import Section from '~/components/ui/Section.vue';
import Heading from '~/components/ui/Heading.vue';
import FeaturedProject from '~/components/FeaturedProject.vue';
import ProjectBarsGroup from '~/components/ProjectBarsGroup.vue';

import { onMounted, onUnmounted } from 'vue';
import ContactIconGroup from '~/components/ContactIconGroup.vue';

function emailMe() {
    window.location.href = 'mailto:iandaviswebdev@gmail.com';
}

const { currentSection } = useSectionTracker();

const sectionIds = ['featured', 'work', 'about', 'experience']; // your section anchors

let observer = null;
onMounted(() => {
    currentSection.value = 'featured';

    observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    currentSection.value = entry.target.id;
                }
            });
        },
        {
            threshold: 0.9, // adjust based on how much of the section should be visible
        },
    );

    sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
    });
});

onUnmounted(() => {
    observer?.disconnect();
});
</script>

<style lang="scss" scoped></style>
