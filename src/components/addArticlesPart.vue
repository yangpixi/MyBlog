<script setup>
    import { useArticleStore } from '@/store/articleStore';
    import axios from 'axios';
    import { ElMessage } from 'element-plus';
    import { ref } from 'vue';

    const articleStore = useArticleStore();

    const content_md = ref(articleStore.currentArticle.content === null ? '' : articleStore.currentArticle.content);
    const dialogVisible = ref(false);
    const title = ref(articleStore.currentArticle.title === null ? '' : articleStore.currentArticle.title);

    const updateArticle = async () => {
        try {
            const res = await axios.post('/api/articles/update', {
                title: title.value,
                content: content_md.value,            
            });
            ElMessage({
                message: '保存成功',
                type: 'success',
                duration: 1500,
            });
            } catch(err) {
                ElMessage.warning('发生错误');
            }
    };

    const pushArticle = async () => {
            try {
                const res = await axios.post('/api/articles/create', {
                    title: title.value,
                    content: content_md.value,
                })
                if(res.data.success === true) {
                    ElMessage.success('上传成功');
                    dialogVisible.value = false;
                } else {
                    ElMessage({
                        message: '请勿重复上传',
                        type: 'warning',
                        duration: 1500,
                    });
                    dialogVisible.value = false;
                }
            } catch(err) {
                ElMessage({
                    message: err,
                    type: 'error',
                    duration: 1500,
                });
            }
    };

    const cancle = () => {
        dialogVisible.value = false;
        title.value === null ? articleStore.currentArticle.title : '';
    }

</script>

<template>
    <h3 style="font-size: 1.5rem;">{{ title }}</h3>
    <div class="editor">
        <mavon-editor v-model="content_md" @save="updateArticle"></mavon-editor>
    </div>
    <el-button plain style="margin-top: 20px;" @click="dialogVisible = true">上传</el-button>
    <el-dialog v-model="dialogVisible" title="请输入标题:">
        <el-form>
            <el-form-item>
                <el-input v-model="title" placeholder="标题 "></el-input>
            </el-form-item>
        </el-form>
        <template #footer>
            <el-button @click="cancle">取消</el-button>
            <el-button @click="pushArticle">确认上传</el-button>
        </template>
    </el-dialog>
</template>

<style scoped>
* {
    box-sizing: border-box;
}
</style>