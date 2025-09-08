<script>
import Navigation from '@/components/navigation.vue';


</script>

<template>
    <Navigation></Navigation>
    <div class="background">
        <div class="content">
            <div>
                <h1 style="position: relative; z-index: 2; color: rgba(0, 0, 0, 0.8); top: 20vh; left: 22vh; font-size: 3rem; font-family: 'Varela Round', sans-serif; text-shadow: 0 0 2px rgba(0, 0, 0, 0.7);">
                    yangpixi’s Blog
                </h1>
            </div>
            <div class="introduce">
                <p style="font-size: 1.5rem; top: 10px; left: 15px;">
                    欢迎来到yangpixi的小站
                </p>
                <p style="line-height: 40px; font-size: 1rem; left: 15px;">
                    这里记录了一些有意思的东西～<br >
                    <ul>
                        <li>随缘更新的<span style="text-decoration: line-through; font-size: inherit;">技术类</span>文章</li>
                        <li>大学中的碎碎念</li>
                        <li>折腾过程中遇到的困难</li>
                    </ul>
                </p>
               <p style="line-height: 20px; font-size: 1rem; left: 15px;">
                莫愁前路无知己，天下谁人不识君。<br >
                让我们带着梦想，一起在代码的欢乐中不断远航！ 
               </p>
            </div>
            <div class="about">
                <p style="font-size: 1.5rem; position: relative; top: 10px; left: 15px;">关于我:</p>
                <p style="font-size: 1rem; position: relative; top: 10px; left: 15px;">
                    一个刚上大学的菜鸟，喜欢折腾各种东西(软路由,手机rom,美食...)。<br >
                    最喜欢干的事情是用各种bug拼凑代码(bushi)。<br >
                    技术栈: java,vue,springboot,redis,mysql...
                </p>
            </div>
            <div class="decoration">
                <img src="/src/assest/decoration.jpg" style="position: absolute; z-index: 2; 
                    width: 400px; height: 600px; top: 15vh; left: 55vw; border-radius: 30px;
                    box-shadow: 0 0 10px black; display: block;"/>
            </div>
            <div class="continue" style="position: absolute; z-index: 2; top: 95vh; left: 49vw;">
                <p style="color: gray; text-shadow: 0 0 5px black;">继续阅读</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
* { 
    font-size: 10px;
    box-sizing: border-box;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Lato, Roboto, 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

.background {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    
}

.background::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url('/src/assest/back.jpg');
    background-size: cover;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.3);
    filter: blur(5px);
    transform: scale(1.1);
    z-index: 1;
}

.content {
    position: relative;
    display: flex;
}

.introduce {
    display: flex;
    position: relative;
    flex-direction: column;
    width: 30vw;
    height: 22vh; 
    background-color: rgba(255, 255, 255, 0.3); 
    backdrop-filter: blur(10px);
    z-index: 2; 
    top: 28vh;
    left: -12vw;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    animation: fade-in 1s ease;
}

.introduce p {
    position: relative;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.introduce ul li {
    font-size: 0.8rem;
}

.about {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 30vw;
    height: 15vh; 
    background-color: rgba(255, 255, 255, 0.3); 
    backdrop-filter: blur(10px);
    z-index: 2;
    border-radius: 20px;
    top: 53vh;
    left: -42vw;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    animation: fade-in 1s ease-in-out;
}

.decoration img {
    animation-delay: 1s;
    animation: fade-in 1s ease;
}

@keyframes fade-in {
    from {
        opacity: 0;
    };
    to {
        opacity: 100%;
    }
}                              

</style>
