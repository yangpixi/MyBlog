import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useArticleStore = defineStore('articles', () => {
    const currentArticle = reactive({
        id: null,
        title: null,
        content: null,
        createdAt: null,
        updatedAt: null,
    });
    return {
        currentArticle,
    }
})