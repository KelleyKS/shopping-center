<template>
    <div class='head' >
        <div class='header' v-show="flag">
        </div>
        <p @click='onClose(false)'>关闭</p>
    </div>

</template>

<script>
    export default {
        name: 'Header',
        data: {
            flag: true
        },
        methods: {
            onClose: function (flag) {
                console.log(flag, 'this.flag')
                this.flag = flag
            }
        }
    }
</script>

<style lang="scss" scoped>
    .head {
        width: 100%;
    }
    .header {
        width: 100%;
        height: 80px;
        background: rgb(178, 78, 245);
    }
    p {
        cursor: pointer;
    }
</style>