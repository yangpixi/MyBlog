<script setup>
import { useArticleStore } from '@/store/articleStore';
import { ref } from 'vue';
import {marked} from 'marked';
import Navigation from './navigation.vue';

const articleStore = useArticleStore();

const article = sessionStorage.getItem('currentArticle');

const htmlContent = ref(marked(article));
</script>

<template>
    <div class="page">
        <Navigation></Navigation>
        <div class="title" style="text-align: center;padding-top: 150px; padding-bottom: 20px;">
            <h2>{{ articleStore.currentArticle.title }}</h2>
        </div>
        <div class="main">
            <div class="aside">
                
            </div>
    
            <div class="content">
                <div v-html="htmlContent"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.main {
    display: flex;
    margin: 0 auto;
    width: 80%;
    height: 100%;
    gap: 30px;
}

.aside {
    max-height: 40vh;
    width: 30%;
}

.content {
    height: 100%;
    width: 100%;
    margin-right: 0vw;
}





</style>