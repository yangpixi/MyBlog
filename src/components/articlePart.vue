<script setup>
import { useArticleStore } from '@/store/articleStore';
import { ref } from 'vue';
import {marked} from 'marked';


const articleStore = useArticleStore();



const htmlContent = ref(marked(articleStore.currentArticle.content));

</script>

<template>
    <div class="content" v-html="htmlContent"></div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


</style>