<template>
    <div class="min-h-screen flex-grow-1 n py-24">
        <!-- Hero Section -->
        <!-- <section class="max-w-4xl mx-auto text-center space-y-8">
            <h1 class="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">FULL STACK DEVELOPER</h1>
            <p class="text-lg max-w-xl mx-auto">
                I build clean and modern websites that focus on <span class="font-semibold">UX</span> and
                <span class="font-semibold">performance</span>.
            </p>
            <button>Book Free Consultation</button>
        </section> -->

        <Section class="text-center">
            <Heading class="uppercase text-7xl" style="letter-spacing: -0.06em">Ian Davis</Heading>
            <Heading class="text-xl mono">Software Engineer</Heading>
            <p>I build clean and modern websites that focus on <strong>UX</strong> and <strong>performance</strong>.</p>
        </Section>

        <FeaturedProject />

        <ProjectBarsGroup class="mt-20" />
    </div>
</template>

<script setup>
import Section from '~/components/ui/Section.vue';
import Heading from '~/components/ui/Heading.vue';
import FeaturedProject from '~/components/FeaturedProject.vue';
import ProjectBarsGroup from '~/components/ProjectBarsGroup.vue';
</script>

<style lang="scss" scoped></style>
