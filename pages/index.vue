<template>
    <div class="min-h-screen flex-grow-1 n py-24 snap-y snap-proximity overflow-auto">
        <Section class="text-center my-24">
            <Heading class="uppercase text-7xl" style="letter-spacing: -0.06em">Ian Davis</Heading>
            <Heading class="text-xl">Software Engineer</Heading>
            <!-- <p>I build clean and modern websites that focus on <strong>UX</strong> and <strong>performance</strong>.</p> -->
            <p>I build things that feel good and work hard — real-time tools, smart media workflows, and clean UI.</p>
            <Button variant="primary" class="mt-12">Contact Me</Button>
        </Section>

        <FeaturedProject class="snap-center" />

        <ProjectBarsGroup class="mt-20 snap-start" />

        <Section>
            <Heading>About</Heading>
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

        <Section>
            <Heading>Experience</Heading>

            <div class="mb-12">
                <h3 class="text-xl">Software Engineer - MemoryShare</h3>
                <h3 class="uppercase text-text-secondary">2022 - Present</h3>
                <p>
                    Design, build, and maintain scalable web applications spanning front-end, API, and background
                    systems. Led architecture of real-time video rendering pipelines, internal tooling, and
                    customer-facing features, with a focus on performance, UX, and reliability.
                </p>
                <div class="mt-3 flex gap-6">
                    <Chip>Vue.js</Chip>
                    <Chip>C#</Chip>
                    <Chip>FFmpeg</Chip>
                    <Chip>Azure</Chip>
                    <Chip>MySQL</Chip>
                </div>
            </div>
            <div class="my-12">
                <h3 class="text-xl">Instructor Assistant - PDX Code Guild</h3>
                <h3 class="uppercase text-text-secondary">2021 - 2022</h3>
                <p>
                    Supported developer bootcamp students in learning full-stack web development, with emphasis on
                    JavaScript, Python, and debugging workflows. Facilitated code reviews and mentored students in
                    real-world project execution.
                </p>
                <div class="mt-3 flex gap-6">
                    <Chip>Javascript</Chip>
                    <Chip>Python</Chip>
                    <Chip>HTML/CSS</Chip>
                </div>
            </div>
        </Section>
        <hr class="my-16 border-gray-200" />
        <Section class="text-center py-24">
            <Heading class="text-3xl mb-6">Like what you see?</Heading>
            <p class="text-lg mb-4">I'm open to new opportunities, collaborations, or just chatting dev tools.</p>
            <a href="mailto:iandaviswebdev@gmail.com" class="font-bold underline text-xl hover:text-yellow-500">
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
</script>

<style lang="scss" scoped></style>
