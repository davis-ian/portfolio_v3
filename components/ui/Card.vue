<template>
    <div class="bg-surface text-text border border-border p-6 rounded-sm space-y-4">
        <slot name="header" />
        <div>
            <slot />
        </div>
        <slot name="footer" />
    </div>
</template>

<script setup></script>
