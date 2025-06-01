<template>
    <div class="flex h-screen overflow-hidden bg-brand-bg text-text-primary">
        <SideNav class="hidden md:block" />
        <div class="overflow-y-auto w-full">
            <slot />
            <Footer />
        </div>
    </div>
</template>

<script></script>
