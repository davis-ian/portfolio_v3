<!-- pages/projects/[slug].vue -->
<template>
    <div class="min-h-screen px-4 py-12 md:px-16 lg:px-32">
        <section class="max-w-4xl mx-auto">
            <Heading class="text-5xl font-bold mb-6">{{ project.title }}</Heading>
            <p class="text-xl mb-4 text-gray-600">{{ project.tagline }}</p>

            <img :src="project.coverImage" alt="Project cover" class="rounded-lg mb-8 w-full object-cover" />

            <div class="prose prose-lg max-w-none mb-12" v-html="project.description"></div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h3 class="font-semibold text-gray-800 mb-2">My Role</h3>
                    <p>{{ project.role }}</p>
                </div>

                <div>
                    <h3 class="font-semibold text-gray-800 mb-2">Tech Stack</h3>
                    <div class="flex flex-wrap gap-2">
                        <Chip v-for="tech in project.stack" :key="tech" :label="tech" />
                    </div>
                </div>
            </div>

            <div class="mt-12">
                <Button v-if="project.liveUrl" :href="project.liveUrl" target="_blank">Live Demo</Button>
                <Button v-if="project.repoUrl" :href="project.repoUrl" class="ml-4" target="_blank" variant="ghost"
                    >GitHub</Button
                >
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { projects } from '~/data/projects';
import { ref } from 'vue';

const route = useRoute();
const project = ref(projects.find(p => p.slug === route.params.slug));

if (!project.value) {
    // Redirect or show 404
    throw createError({ statusCode: 404, statusMessage: 'Project not found' });
}
</script>
