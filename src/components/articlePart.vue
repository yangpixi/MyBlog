<script setup>
import {nextTick, onMounted, ref, useTemplateRef} from 'vue';
import Navigation from './navigation.vue';
import axios from 'axios';
import { useRoute} from 'vue-router';
import { ElMessage } from 'element-plus';
import Toc from './Toc.vue';

const route = useRoute();
const title = ref('');
const htmlContent = ref('');
const htmlRef = useTemplateRef("htmlRef");
const headings = ref([]);
const activeId = ref('');


onMounted(async () => {
    try {
        const res = await axios.get('/api/articles/get/' + route.params.title);
        title.value = res.data.message.title;
        htmlContent.value = res.data.message.content
    } catch(err) {
        ElMessage.warning(err);
    }
    await nextTick();
    headings.value = htmlRef.value.querySelectorAll("h2, h3");
    console.log(headings.value);
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
            activeId.value = entry.target.querySelector('a').id;
        }
      })
    }, {
        rootMargin: '-25% 0px -75% 0px',
    });
    headings.value.forEach(heading => {
        console.log(heading);
        observer.observe(heading);
    })
  });
</script>

<template>
    <div class="page">
        <Navigation></Navigation>
        <div class="background"></div>
        <div class="main">
            <div class="aside">
                <Toc :active-id="activeId"/>
            </div>
            <div class="content">
                <div class="title" style="text-align: center; padding-top: 10px; padding-bottom: 20px;">
                    <h1>{{ title }}</h1>
                </div>
                <div v-html="htmlContent" ref="htmlRef"></div>
            </div>
        </div>
        <hr style="border: 1px solid black; width: 85%; margin: 20px auto;"></hr>
        <div class="footer">
            <h2>评论区<span style="font-size: 0.8rem;">赶快来留下你的评论吧</span></h2>
        </div>
    </div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.background {
    background-image: url('/src/assest/articleReading_background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    z-index: -1;
    inset: 0;
    filter: blur(10px);
    transform: scale(1.1);
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
    top: 130px;
    display: flex;
    flex-direction: column;
}

.content {
    height: 100%;
    width: 100%;
    margin-right: 0vw;
    color: rgba(255, 255, 255, 0.7);
    background-color: rgba(0, 0, 0, 0.8);
    padding: 20px;
    margin-top: 15vh;
    border-radius: 20px;
}

.content:deep(p) {
    font-size: 1rem;
}

.content:deep(a) {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    position: relative;
}

.content:deep(a:hover::after) {
    content: '  #';
    height: 95%;
}

.footer {
    height: 50vh;
    width: 85%;
    margin: 0 auto;
}

</style>
