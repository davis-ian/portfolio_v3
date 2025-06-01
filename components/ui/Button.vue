<template>
    <button
        :class="[
            'inline-flex cursor-pointer items-center justify-center rounded-sm font-medium tracking-tight transition-colors',
            'px-4 py-2',
            variant === 'primary' && 'bg-accent text-text-primary  hover:brightness-90 border-2',
            variant === 'secondary' && 'bg-btn-secondary text-text-primary  hover:brightness-90',
            variant === 'outline' && 'border border-accent text-accent hover:bg-accent hover:text-black',
            variant === 'ghost' && 'text-accent hover:underline',
            disabled && 'opacity-50 pointer-events-none',
        ]"
    >
        <slot />
    </button>
</template>

<script setup>
defineProps({
    variant: { type: String, default: 'primary' },
    disabled: { type: Boolean, default: false },
});
</script>
Z
