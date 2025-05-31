import { ref } from 'vue';

const currentSection = ref<string | null>(null);

export function useSectionTracker() {
    return {
        currentSection,
    };
}
