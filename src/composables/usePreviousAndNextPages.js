import { computed } from "vue";

const usePreviousAndNextPages = (currentPage , maxPage) => {
    const previousPage = computed(() => {
        let previousPage = currentPage.value - 1;
        let firstPage = 1;
        return previousPage >= firstPage ? previousPage : undefined;
    });

    const nextPage = computed(() => {
        let nextPage = currentPage.value + 1;
        return nextPage <= maxPage.value ? nextPage : undefined;
    });

    return { previousPage, nextPage };
}

export default usePreviousAndNextPages;