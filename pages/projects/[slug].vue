<!-- pages/projects/[slug].vue -->
<template>
    <div class="min-h-screen flex-grow-1 py-24 px-6">
        <section v-if="project" class="max-w-6xl mx-auto">
            <Heading class="md:text-5xl text-3xl font-bold mb-6">{{ project.title }}</Heading>
            <p class="text-xl mb-4 text-gray-600">{{ project.tagline }}</p>

            <video
                v-if="project?.coverVideo"
                :src="project.coverVideo"
                alt="Project cover"
                class="rounded-lg mb-8 w-full object-cover"
                autoplay
                muted
                loop
                playsinline
            />
            <img
                v-else-if="project?.coverImage"
                :src="project.coverImage"
                alt="Project cover"
                class="rounded-lg mb-8 w-full object-cover"
            />

            <div class="my-12 flex gap-4">
                <Button v-if="project.liveUrl" variant="primary" @click="openTab(project.liveUrl)">Live Demo</Button>
                <Button v-if="project.repoUrl" variant="secondary" @click="openTab(project.repoUrl)">GitHub</Button>
            </div>

            <div class="prose prose-lg max-w-none mb-12" v-html="project.description"></div>

            <div class="mb-12">
                <h3 class="font-semibold">Highlights</h3>
                <div class="flex gap-1 my-2 flex-col">
                    <div v-for="(highlight, i) in project.highlights" :key="i" class="">
                        <div class="flex items-center gap-2">
                            <Icon :name="highlight.icon" class="text-lg font-bold shrink-0" />
                            <p class="leading-relaxed">
                                {{ highlight.text }}
                            </p>
                        </div>
                        <hr v-if="i !== project.highlights.length - 1" class="border-t border-gray-200 my-2" />
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h3 class="font-semibold text-gray-800 mb-2">My Role</h3>
                    <p>{{ project.role }}</p>
                </div>

                <div>
                    <h3 class="font-semibold text-gray-800 mb-2">Tech Stack</h3>
                    <div class="flex flex-wrap gap-2">
                        <Chip v-for="tech in project.stack" :key="tech">{{ tech }}</Chip>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { projects } from '~/data/projects';
import { ref } from 'vue';
import Button from '~/components/ui/Button.vue';
import Heading from '~/components/ui/Heading.vue';
import Chip from '~/components/ui/Chip.vue';

const route = useRoute();
const project = ref(projects.find(p => p.slug === route.params.slug));

if (!project.value) {
    // Redirect or show 404
    throw createError({ statusCode: 404, statusMessage: 'Project not found' });
}

function openTab(url) {
    window.open(url, '_blank');
}
</script>
