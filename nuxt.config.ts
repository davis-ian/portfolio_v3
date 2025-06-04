// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },
    components: true,
    modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxt/eslint', '@nuxtjs/tailwindcss'],
    css: ['~/assets/css/main.css'],
    icon: {
        serverBundle: {
            collections: ['ph', 'mdi'],
        },
    },
    app: {
        head: {
            title: 'Ian Davis',
            meta: [
                {
                    name: 'description',
                    content:
                        'Portfolio of Ian Davis – Sofware Engineer. Building performant, creative, and production-ready applications with C#, Vue.js, and modern tools.',
                },
                { name: 'keywords', content: 'Ian Davis, Software Developer, Full Stack Engineer, C#, Vue, Portfolio' },
                { name: 'author', content: 'Ian Davis' },

                // Open Graph
                { property: 'og:title', content: 'Ian Davis – Software Engineer' },
                {
                    property: 'og:description',
                    content:
                        'Creative and technically solid software developer. Explore projects in full-stack development, dev tools, and game architecture.',
                },
                { property: 'og:image', content: 'https://iandavis.dev/social-preview.png' },
                { property: 'og:url', content: 'https://iandavis.dev' },
                { property: 'og:type', content: 'website' },

                // Twitter Card
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: 'Ian Davis – Software Engineer' },
                {
                    name: 'twitter:description',
                    content:
                        'Explore projects built by Ian Davis, a software engineer focused on high-quality frontend, backend, and creative tooling.',
                },
                { name: 'twitter:image', content: 'https://iandavis.dev/social-preview.png' },
            ],
            link: [{ rel: 'canonical', href: 'https://iandavis.dev' }],
        },
    },
});
