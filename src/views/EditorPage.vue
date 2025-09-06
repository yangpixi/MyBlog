<script>
export default {
    data() {
        return {
            value: '',
        }
    }
}

</script>

<template>
    <div class="mavonEditor">
        <mavon-editor v-model="value"/>
    </div>
</template>



<style scoped>
.mavonEditor {
    width: 100%;
    height: 50vh;
}
</style>