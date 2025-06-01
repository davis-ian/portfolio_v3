// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },
    components: true,
    modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxt/eslint', '@nuxtjs/tailwindcss'],
    css: ['~/assets/css/main.css'],
    icon: {
        serverBundle: {
            collections: ['ph', 'mdi'], // <!--- this
        },
    },
});
