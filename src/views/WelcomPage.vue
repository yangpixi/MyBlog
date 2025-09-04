<script>
import router from '@/router';

export default {
    data() {
        return {

        }
    },
    methods: {
        toLogin() {
            router.push('/login');
        },
    }
}
</script>

<template>
    <h1>主界面</h1>
    <el-button round @click="toLogin" type="primary">去登录</el-button>
</template>

<style scoped>
</style>
