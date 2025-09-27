<script setup>
import { useArticleStore } from '@/store/articleStore';
import { nextTick, onMounted, onUnmounted, onUpdated, ref, watchEffect } from 'vue';
import {marked} from 'marked';
import Navigation from './navigation.vue';
import axios from 'axios';
import { useRoute} from 'vue-router';
import { ElMessage } from 'element-plus';
import Toc from './Toc.vue';

const route = useRoute();
const title = ref('');
const htmlContent = ref('');

onMounted(async () => {
    try {
        const res = await axios.get('/api/articles/get/' + route.params.title);
        title.value = res.data.message.title;
        htmlContent.value = res.data.message.content
    } catch(err) {
        ElMessage.warning(err);
    }
});

</script>

<template>
    <div class="page">
        <Navigation></Navigation>
        <div class="main">
            <div class="aside">
                <Toc />
            </div>
            <div class="content">
                <div class="title" style="text-align: center; padding-top: 150px; padding-bottom: 20px;">
                    <h1>{{ title }}</h1>
                </div>
                <div v-html="htmlContent"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>

html {
    
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.main {
    display: flex;
    margin: 0 auto;
    width: 85%;
    height: 100%;
    gap: 30px;
}

.aside {
    max-height: 40vh;
    width: 30%;
    position: sticky;
    top: 150px;
    display: flex;
    flex-direction: column;
}

.content {
    height: 100%;
    width: 100%;
    margin-right: 0vw;
}

.content ::v-deep p {
    font-size: 1rem;
}

.content ::v-deep a {
    color: black;
    text-decoration: none;
    position: relative;
}

.content ::v-deep a:hover::after {
    content: '  #';
    height: 95%;
}


</style>