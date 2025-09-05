<script>
import Navigation from '@/components/navigation.vue';


</script>

<template>
    <Navigation></Navigation>

    <div class="background">
        <div class="content">


        </div>
    </div>

</template>

<style scoped>
* { 
    font-size: 10px;
    box-sizing: border-box;
    margin: 0;
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
    top: -5px;
    left: -5px;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    background-image: url('/src/assest/back.jpg');
    background-size: cover;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.3);
    filter: blur(5px);
    z-index: 1;
    /* background-attachment: fixed; */
}

</style>
