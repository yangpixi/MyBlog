<script setup>
import Navigation from '@/components/navigation.vue';
import { useArticleStore } from '@/store/articleStore';
import { onMounted } from 'vue';

const articleStore = useArticleStore();

onMounted(() => {
    articleStore.getAllArticles();
})

</script>

<template>
    <Navigation></Navigation>
    <div class="body">
        <div class="container">
            <div class="background"></div>
            <div class="content" style="margin-bottom: 10vh;">
                <div class="all">
                    <p style="color: black; margin-top: 15vh; margin-left: 20vw; font-size: 2.5rem; text-shadow: 0 1px 1px black;">全部文章</p>
                </div>
                <div class="articles">
                    <div class="box" v-for="article in articleStore.allArticles" @click="">
                        <h3 class="title" style="font-size: 1.5rem; margin-top: 2vh; margin-left: 2vw;">{{ article.title }}</h3>
                        <div class="para" style="font-size: 0.8rem;">
                            {{ article.content }}
                        </div>
                    </div>
                </div>
                <div class="footer" >

                </div>
            </div>
        </div>
    </div>
</template>

       
<style scoped>

* {
    font-size: 10px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Lato, Roboto, 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

.background {
    background-image: url('/src/assest/article_background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    z-index: -1;
    inset: 0;
    filter: blur(10px);
    transform: scale(1.1);
}

.content {
    overflow-y: auto; 
    height: 100%; 
    position: relative;
    padding-bottom: 5vh;
}

.articles {
    display: flex;
    flex-direction: column;
    margin-left: 15vw;
    margin-right: 15vw;
    margin-top: 1.5rem;
    position: relative;
}

.box {
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    will-change: backdrop-filter;
    width: 90%;
    margin: 0 auto;
    margin-top: 1rem;
    height: 18vh;
    border-radius: 20px;
    transition: all 0.3s ease;
    cursor: pointer;
    overflow: hidden;
}

.para {
    margin-left: 10px;         
    margin-bottom: 10px; 
    display: -webkit-box;        
    -webkit-box-orient: vertical;
    line-clamp: 5;       
    -webkit-line-clamp: 5;       
    overflow: hidden;             
    text-overflow: ellipsis;
    line-height: 1.2;
    margin: 5px auto;
    width: 95%;
}


.box:hover {
    transform: translateX(5px);
    background-color: rgba(255, 255, 255, 0.5);
}

@keyframes anime {
    from {
        opacity: 0;
        transform: translateY(10px);
    };
    to {
        opacity: 0.3;
        transform: translateY(0);
    }
}

.box {
    animation: anime 2s ease;
}

</style>