<script setup>
import axios from 'axios';
import { onMounted, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const subtitles = ref([]);
const route = useRoute();
const props = defineProps({
    activeId: {
        type: String,
        required: true,
    }
})

onMounted(async () => {
    const res = await axios.get('/api/articles/get/' + route.params.title);
    subtitles.value = res.data.message.subtitles;
})

watchEffect(() => {
    console.log(props.activeId);
})

</script>

<template>
    <div class="container">
        <p>目录</p>
        <ul>
           <li v-for="ele in subtitles" :key="ele.text">
               <a :href="'#' + ele.id" class="toc" :class="{active: ele.id === props.activeId}" v-if="ele.level === 2">{{ ele.text }}</a>
               <a :href="'#' + ele.id" class="toc" :class="{active: ele.id === props.activeId}" v-if="ele.level === 3" style="margin-left: 13px;">{{ ele.text }}</a>
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

.toc.active {
    color: black;
}

</style>
