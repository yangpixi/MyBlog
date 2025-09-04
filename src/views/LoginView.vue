<script>
import router from '@/router';
export default {
    data() {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        login() {
            router.push('/')
        },
    }
}

</script>

<template>
    <main>
        <div class="container" style="height: 100vh; width: 100vw; overflow: hidden; display: flex;">
            <div class="img">
                <el-image style="width: 100%; height: 100%;" fit="cover"
                src="/src/assest/background.png" />
            </div>
            <div class="funcPart" style="width: 60vh;">
                <div style="text-align: center; margin-top: 7vh;">
                    <h2 style="font-family: Arial, Helvetica, sans-serif; font-size: 2rem;">请登录</h2>
                    <p style="font-size: 1.1rem; color: grey;">后台管理界面登录</p>
                </div>
                <div style="margin: 0 20px;">
                    <el-input type="text" placeholder="用户名/邮箱" v-model="username" style="margin-bottom: 10px; margin-top: 50px;font-size: 0.8rem;">
                        <template #prefix>
                            <el-icon><User /></el-icon>
                        </template>
                    </el-input>
                    <el-input type="password" placeholder="密码" v-model="password" style="font-size: 0.8rem;">
                        <template #prefix>
                            <el-icon><Lock /></el-icon>
                        </template>
                    </el-input>
                </div>
                <div>
                    <el-button type="success" style="margin: 40px auto; display: block;" size="large" @click="login" round plain>登录</el-button>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>

* {
    font-size: 10px;
    margin: 0;
    box-sizing: border-box;
}

.funcPart {
    border: 2px solid rgba(90, 89, 89, 0.692);
    margin-top: 20vh;
    margin-bottom: 35vh;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 20px;
}

</style>