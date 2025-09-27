<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';


const subtitles = ref([]);
const route = useRoute();

onMounted(async () => {
    const res = await axios.get('/api/articles/get/' + route.params.title);
    subtitles.value = res.data.message.subtitles;
    console.log(subtitles.value);
})

</script>

<template>
    <div class="container">
        <p></p>
        <ul>
           <li v-for="ele in subtitles">
               <a :href="ele.id">{{ ele.text }}</a>
           </li>
        </ul>
    </div>
</template>

<style scoped>
ul {
    list-style: none;
}

ul li {
    line-height: 1.8;
}

ul li a {
    font-size: 1.0rem;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease;
    padding: 5px;
    border-radius: 10px;
}

ul li a:hover {
    background-color: rgba(0, 0, 0, 0.07);
    color: black;
}

</style>