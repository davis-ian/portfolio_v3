<template>
    <div>
        <header
            class="bg-brand-bg text-text-primary xl:min-w-3xs border-solid h-screen flex flex-col justify-center sticky top-0 left-0 bottom-0"
        >
            <div class="p-6">
                <p
                    class="transition-all duration-200"
                    :class="{
                        'opacity-50': currentSection !== 'featured',
                    }"
                >
                    <Link href="/#featured">Featured</Link>
                </p>
                <p class="transition-all duration-200" :class="{ 'opacity-50': currentSection !== 'work' }">
                    <Link href="#work">Work</Link>
                </p>
                <p class="transition-all duration-200" :class="{ 'opacity-50': currentSection !== 'about' }">
                    <Link href="/#about">About</Link>
                </p>
                <p
                    class="transition-all duration-200"
                    :class="{
                        'opacity-50': currentSection !== 'experience',
                    }"
                >
                    <Link href="/#experience">Experience</Link>
                </p>
            </div>

            <div class="p-6">
                <h3 class="text-text-secondary uppercase">Contact</h3>
                <p>
                    <Link href="mailto:iandaviswebdev@gmail.com">Mail</Link>
                </p>
                <p>
                    <Link href="https://www.linkedin.com/in/iandaviswebdev/">LinkedIn</Link>
                </p>
                <p>
                    <Link href="https://github.com/davis-ian">Github</Link>
                </p>
            </div>
        </header>
    </div>
</template>

<script setup>
import Link from './ui/Link.vue';

const { currentSection } = useSectionTracker();
</script>

<style lang="scss" scoped></style>
