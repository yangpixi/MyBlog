import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import axios from 'axios';


export const useArticleStore = defineStore('articles', () => {
    const allArticles = ref([]);
    const currentArticle = reactive({
        id: null,
        title: null,
        content: null,
        createdAt: null,
        updatedAt: null,
    });
    const getAllArticles = async () => {
    try {
        const res = await axios.get('/api/articles/getAll');
        allArticles.value = res.data.message;
        } catch(err) {
            ElMessage({
                message: err,
                type: "error",
                duration: 1500,
            })
        }
    }
    return {
        currentArticle,
        allArticles,
        getAllArticles,
    }
})
