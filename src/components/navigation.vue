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
        toLogin() {
           if (this.isLogin === true) {
            ElMessage.warning("你已登录");
           }else {
            this.$router.push('/login');
           }
        },
        toManager() {
            if (this.isLogin === true) {
                this.$router.push('/manager');
            } else {
                ElMessage.warning("请登录");
            }
        },
        async logout() {
            try {
                const res = await axios.post('/api/logout');
                ElMessage({
                    message: '已退出登录',
                    duration: 1000,
                    type: 'success'
                });
                this.isLogin = false;
            }catch(err) {
                ElMessage.warning('退出登录出现问题');
            }
        },
    },
    mounted() {
        checkIsLogin().then(value => {
            this.isLogin = value;
        });
    }
}
</script>

<template>
    <nav>
        <el-row style="display: flex; align-items: center;">
            <el-col :span="1" :offset="1">
                <el-button circle @click="toManager"><img src="/src/assest/favicon.ico" style="width: 30px; height: 30px; overflow: hidden;"></img></el-button>
            </el-col>

            <el-col :span="6" :offset="7">
                <ul style="display: flex;">
                    <li>
                        <RouterLink to="/">首页</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/articles">文章</RouterLink>
                    </li>
                    <li>
                        <a href="123">记录</a>
                    </li>
                    <li>
                        <a href="123">标签</a>
                    </li>
                </ul>
            </el-col>

            <el-col :span="1" :offset="6">
                <button class="search"><svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="NavBar_searchIcon___Bq0r"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></button>
            </el-col>

            <el-col :span="1" v-show="!isLogin">
                <button @click="toLogin" class="login"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round-plus"><path d="M2 21a8 8 0 0 1 13.292-6"></path><circle cx="10" cy="8" r="5"></circle><path d="M19 16v6"></path><path d="M22 19h-6"></path></svg></button>
            </el-col>

            <el-col :span="1" v-show="isLogin">
                <button @click="logout" class="logout">退出</button>
            </el-col>
        </el-row>
    </nav>
</template>

<style scoped>
* {
    font-size: 10px;
    box-sizing: border-box;
}

nav {
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    margin: 0;
    padding: 5px;
    z-index: 1000;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

ul li {
    list-style: none;
    margin-right: 20px;
}

ul a:hover {
    transform: translateY(-2px);
    background-color: rgba(0, 0, 0, 0.1);
}

ul a:active {
    background-color: rgba(0, 0, 0, 0.3);
}

ul a {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Lato, Roboto, 'PingFang SC', 'Microsoft YaHei', sans-serif;
    border-radius: 15px;
    color: rgb(0, 0, 0);
    font-size: 0.9rem;
    text-decoration: none;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 15px;
    padding-left: 15px;
    transition: all 0.3s ease;
    display: block;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.384);
}

.search {
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
}

.search:hover {
    background-color: rgba(255, 255, 255, 0.247);
}

.login  {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
}

.login:hover {
    background-color: rgba(255, 255, 255, 0.247);
}

.logout {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 0.9rem;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 15px;
    padding-left: 15px;
    border-radius: 15px;
    transition: all 0.3s ease;
}

.logout:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

.logout:active {
    background-color: rgba(0, 0, 0, 0.3);
}

</style>