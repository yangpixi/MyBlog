<script>
import axios from 'axios';
import { ElMessage } from 'element-plus';
import { pushScopeId } from 'vue';

export default {
    data() {
        return {
            articles: '',
        }
    },
    methods: {
       async getAllArticles() {
            try {
                const res = await axios.get('/api/articles/getAll');
                this.articles = res.data.message;
            } catch(err) {
                ElMessage({
                    message: err,
                    type: "error",
                    duration: 1500,
                })
            }
        },
        toEditor(article) {
            localStorage.setItem('currentArticleContent', article.content);
            localStorage.setItem('currentArticleTitle', article.title);
            this.$router.push('/manager/addArticles')
        }
    },
    mounted() {
        this.getAllArticles();
    }
}
</script>

<template>
    <div class="container">
        <div class="article_box" v-for="article in articles" @click="toEditor(article)">
            <h4 style="margin: 10px; font-size: 1rem;" class="title">#{{ article.title }}</h4>
            <div class="content" style="
            margin-left: 10px; 
            font-size: 0.8rem; 
            margin-bottom: 10px; 
            display: -webkit-box;        
            -webkit-box-orient: vertical;
            line-clamp: 2;        
            overflow: hidden;             
            text-overflow: ellipsis;
            line-height: 1.2;
            "> 
                {{ article.content }}
            </div>
            <div class="footer" style="margin-left: 10px; font-size: 0.7rem;margin-bottom: 5px; display: flex; align-items: center;gap: 5px;">
                <el-icon><Timer /></el-icon>
                {{ article.createdAt }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    font-size: 10px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
}

.article_box {
    margin: 10px; 
    border: 1px solid rgba(0, 0, 0, 0.3); 
    border-radius: 10px; 
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    background-color: rgba(0, 0, 0, 0.07);
    cursor: pointer;
    transition: all 0.3s ease;
}

.article_box:active {
    background-color: rgba(0, 0, 0, 0.4);
}
</style>