// /data/projects.ts

import clipperMock from '@/assets/images/clipper2.png';
import upnextMock from '@/assets/images/upnext.png';
import miniMock from '@/assets/images/minigames1.png';
import formaVideo from '@/assets/videos/forma-demo.mp4?url';

export const projects = [
    {
        slug: 'upnext',
        title: 'UpNext',
        tagline: 'Track what you watch. Share what you love.',
        coverImage: upnextMock,
        coverVideo: null,
        role: 'Full-stack Developer (Frontend + Backend)',
        stack: [
            'TypeScript',
            'Node.js',
            'Express',
            'PostgreSQL (Railway)',
            'Auth0',
            'TMDB API',
            'Vue 3',
            'Tailwind CSS',
        ],
        highlights: [
            {
                icon: 'ph:users-three',
                text: 'Users can create shared watchlists to collaborate with friends.',
            },
            {
                icon: 'ph:check-circle',
                text: 'Tracks which shows and movies each user has watched.',
            },
            {
                icon: 'ph:film-slate',
                text: 'Integrates with TMDB for title data, images, and trailers.',
            },
            {
                icon: 'ph:key',
                text: 'Auth0 handles secure authentication and session management.',
            },
            {
                icon: 'ph:database',
                text: 'PostgreSQL hosted on Railway stores user lists and activity.',
            },
        ],
        description: `
    <p><strong>UpNext</strong> is a collaborative watchlist platform where users can keep track of movies and shows they want to watch—and share lists with others. It's designed to be social and easy to use, combining the simplicity of a to-do list with the richness of a streaming companion app.</p>
    <p>Authentication is handled by <strong>Auth0</strong>, and data is persisted with <strong>PostgreSQL</strong> via Railway. The app fetches title metadata, trailers, and cover art using the TMDB API.</p>
    <p>The backend is written in <strong>TypeScript</strong> with <strong>Express</strong>, while the frontend is built using <strong>Vue 3</strong> and <strong>Tailwind CSS</strong>.</p>
  `,
        liveUrl: 'https://upnext.iandavis.dev/',
        repoUrl: 'https://github.com/davis-ian?tab=repositories&q=upnext&type=public&language=&sort=',
    },
    {
        slug: 'forma',
        title: 'Forma',
        tagline: 'A pixel-perfect roguelite dungeon crawler with real-time combat, built in Three.js and ECS.',
        coverImage: null,
        coverVideo: formaVideo,
        role: 'Game Architect & Developer (solo)',
        stack: ['TypeScript', 'Three.js', 'Custom ECS', 'Vite', 'SCSS'],
        description: `
      <p>
        <strong>Forma</strong> is a real-time, action roguelite game built entirely in JavaScript using <strong>Three.js</strong>
        and a custom-built <strong>Entity Component System (ECS)</strong> architecture. The game blends smooth 2D sprite aesthetics
        with a fully dynamic 3D world, enabling tight control over animation timing, hitbox precision, and camera effects.
      </p>
      <p>
        This project was designed not only as a gameplay prototype, but as a demonstration of clean system architecture,
        ECS design principles, and performant render pipelines using raw Three.js and GLSL shaders. The ECS system supports
        full modularity, real-time combat, damage systems, AI pathfinding, room generation, and debugging tools.
      </p>
      <p>
        I built Forma to challenge myself to apply <strong>FAANG-level engineering patterns</strong> in a creative domain,
        prioritizing clean separation of concerns, system debuggability, and maintainability at scale. All animations, physics,
        enemy behavior, and effects are managed through ECS-driven update cycles.
      </p>
    `,
        highlights: [
            {
                icon: 'ph:swords',
                text: 'Custom ECS engine with tag-based targeting, collision, damage, and animation systems.',
            },
            { icon: 'ph:brain', text: 'AI behavior with player tracking and group spawning using spatial logic.' },
            { icon: 'ph:map-trifold', text: 'Procedurally generated dungeon rooms using node-based layout logic.' },
            { icon: 'ph:bounding-box', text: 'Pixel-accurate sprite positioning and collision with 3D ECS physics.' },
            {
                icon: 'ph:camera-shake',
                text: 'Custom camera follow, screen shake, and hit-pause mechanics for satisfying feedback.',
            },
            {
                icon: 'ph:wrench',
                text: 'Developer-friendly debug tools for entity inspection and state visualization.',
            },
        ],
        liveUrl: 'https://forma.iandavis.dev/',
        repoUrl: 'https://github.com/davis-ian/forma',
    },
    {
        slug: 'minigames',
        title: 'Minigames',
        tagline: 'A collection of lightweight, interactive web-based games built with Vue 3.',
        coverImage: miniMock,
        coverVideo: null,
        role: 'Frontend Developer (solo)',
        stack: ['Vue 3', 'TypeScript', 'Vite', 'Pinia', 'TailwindCSS'],
        description: `
      <p>
        <strong>Minigames</strong> is a growing suite of playful browser-based games built to explore interactive UI,
        state management patterns, and responsive design using <strong>Vue 3</strong>. Each game is a self-contained Vue
        component with smooth animations, sound effects, and clean game loop logic.
      </p>
      <p>
        This project serves as a creative sandbox to test modern frontend patterns like global state management with <strong>Pinia</strong>,
        reactivity handling in game loops, and performance optimization in real-time interactions.
        It’s also a visual playground — each game is styled using <strong>TailwindCSS</strong> and adapts to mobile and desktop layouts.
      </p>
      <p>
        Beyond prototyping game logic, the goal was to write production-quality component structure for each game,
        while still preserving the joy and spontaneity of classic arcade challenges.
      </p>
    `,
        highlights: [
            {
                icon: 'ph:game-controller',
                text: 'Memory Match Game with animated tile flipping and high score saving.',
            },
            {
                icon: 'ph:function',
                text: 'Clean separation between game loop logic and presentation using Vue composables.',
            },
            {
                icon: 'ph:stack',
                text: 'Built as a modular platform for expanding new game types without refactoring core structure.',
            },
            { icon: 'ph:device-mobile', text: 'Responsive mobile-friendly layout with minimal dependencies.' },
            {
                icon: 'ph:speaker-high',
                text: 'Sound effect hooks and reset/play-again logic handled via component state.',
            },
        ],
        liveUrl: 'https://minigames.iandavis.dev/',
        repoUrl: 'https://github.com/davis-ian/minigame',
    },
    {
        slug: 'ffmpeg-wa',
        title: 'FFmpeg WebAssembly Thumbnail Clipper',
        tagline: 'Client-side video thumbnail clipping using FFmpeg compiled to WebAssembly.',
        coverImage: clipperMock,
        coverVideo: null,
        role: 'Full-stack Developer (solo)',
        stack: ['Vue 3', 'FFmpeg.wasm', 'TypeScript', 'Vite'],
        description: `
      <p>
        <strong>FFmpeg WebAssembly Clipper</strong> is a browser-based tool that allows users to clip thumbnails from local
        video files — entirely client-side. Built with <strong>FFmpeg.wasm</strong>, this project eliminates the need for file uploads or
        server processing by running FFmpeg directly in the browser via WebAssembly.
      </p>
      <p>
        This project explores the potential of high-performance native tools like FFmpeg being ported to the web.
        It demonstrates the power of WebAssembly for enabling complex video operations within the browser sandbox,
        without any backend dependencies.
      </p>
      <p>
        Users can load local video files, scrub through frames, and extract high-resolution thumbnail clips
        in seconds — ideal for developers, content creators, or media platforms seeking lightweight tooling.
      </p>
    `,
        highlights: [
            { icon: 'ph:cpu', text: '100% client-side FFmpeg video processing using FFmpeg.wasm.' },
            { icon: 'ph:video', text: 'Efficient video loading and frame extraction with zero upload delay.' },
            { icon: 'ph:film-strip', text: 'Interactive UI with real-time video scrubbing and frame preview.' },
            { icon: 'ph:shield-check', text: 'No server — ideal for privacy and portability.' },
            { icon: 'ph:puzzle-piece', text: 'Modular setup ready for expanding to trim/crop/transcode workflows.' },
        ],
        liveUrl: 'https://thumbnail.iandavis.dev/',
        repoUrl: 'https://github.com/davis-ian/ffmpeg_wa',
    },
];
