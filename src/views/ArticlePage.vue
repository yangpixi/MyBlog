<script>
import Navigation from '@/components/navigation.vue';
export default {
    data() {
        return {

        }
    },
    methods: {
        
    }

}




</script>

<template>
    <Navigation></Navigation>
    <body>
        <div class="container">
            <div class="content">
                <div class="all">
                    <p style="color: black; margin-top: 15vh; margin-left: 20vw; font-size: 2.5rem; text-shadow: 0 1px 1px black;">全部文章</p>
                </div>
                <div class="articles">
                    <div class="box" v-for="x in 3" @click="">
                        <h3 class="title" style="font-size: 1.5rem; margin-top: 2vh; margin-left: 2vw;">第{{ x }}篇文章标题</h3>
                        <p></p>
                    </div>
                </div>
                <div class="footer" >

                </div>
            </div>
        </div>
    </body>
</template>

       
<style scoped>

* {
    font-size: 10px;
    margin: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Lato, Roboto, 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

body {
    height: 100%;
    width: 100vw;
    overflow: hidden;
}

.container {
    background-image: url('/src/assest/article_background.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    position: relative;
    z-index: 1;
}

.container::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    filter: blur(5px);
    background: inherit;
    z-index: -1;
    transform: scale(1.1);
}

.content {
    overflow-y: auto; 
    height: 100%; 
    position: relative;
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