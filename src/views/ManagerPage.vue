<script>
import { checkIsLogin } from '@/js/utils';
import axios from 'axios';
import { ElMessage } from 'element-plus';

export default {
    data() {
        return {
            isLogin: false,
        }
    },
    methods: {
        async doLogout() {
            try {
                const res = await axios.get('/api/logout');
                ElMessage({
                    message: "已退出登录",
                    type: 'success',
                    duration: 1000,
                })
                this.$router.push('/');
            } catch(err) {
                ElMessage.warning(err);
            }
        },
        doBack() {
            this.$router.push('/')
        }
    },
    mounted() {
        checkIsLogin().then(value => {
            this.isLogin = value;
            if(this.isLogin === false) {
                ElMessage({
                    message: "请登录",
                    type: 'warning',
                    duration: 1500,
                });
                this.$router.push('/');
            }
        });
    }
}
</script>

<template> 
    <div class="manager">
        <div class="container">
            <el-container>
                <el-header style="background-color: rgb(160, 207, 255); border: 1px solid rgba(0, 0, 0, 0.2);">
                    <div class="header">
                        <h1 style="font-size: 1.3rem;">后台管理界面</h1>
                        <el-button circle @click="doBack"><el-icon><House /></el-icon></el-button>
                    </div>
                </el-header>

                <el-container>
                    <el-aside>
                        <el-menu style="height: 100vh;" :router="true">
                            <el-sub-menu index="1">
                                <template #title>
                                    <el-icon><User /></el-icon>
                                    <span>用户管理</span>
                                </template>
                                <el-menu-item index="1-1" route="/manager/changeName">修改名称</el-menu-item>
                                <el-menu-item index="1-2" route="/manager/changepassword">修改密码</el-menu-item>
                                <el-menu-item index="1-3" @click="doLogout" route="/manager/logout">退出登录</el-menu-item>
                            </el-sub-menu>

                            <el-sub-menu index="2">
                                <template #title>
                                    <el-icon><Document /></el-icon>
                                    <span>文章管理</span>
                                </template>
                                <el-menu-item index="2-1" route="/manager/allArticles">所有文章</el-menu-item>
                                <el-menu-item index="2-2" route="/manager/addArticles">新增文章</el-menu-item>
                            </el-sub-menu>
                        </el-menu>
                    </el-aside>

                    <el-main>
                        <RouterView />
                    </el-main>

                </el-container>
            </el-container>
        </div>
    </div>
</template>

<style scoped>
* {
    font-size: 10px;
    margin: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Lato, Roboto, 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

.header {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;

}

span {
    font-size: 1rem;
}

li {
    font-size: 0.8rem;
}

</style>