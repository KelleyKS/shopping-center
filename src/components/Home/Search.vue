<template>
    <div class='search_box' >
        <img src='https://img10.360buyimg.com/img/jfs/t1/160510/16/25709/36032/616cea7eEd14780cc/43b0d9ed8c9e9ab0.png'/>
        <div class="search_ipt"></div>
        <img src='https://img12.360buyimg.com/babel/s380x300_jfs/t1/152314/13/19839/57522/603e118dE941f0ce9/fdff58457adbef3e.jpg.webp'/>
    </div>
</template>

<script>
    export default {
        name: 'Search',
        data () {
            return {
                flag: true
            }
        },
        methods: {
            onClose: function (flag) {
                this.flag = flag
            }
        }
    }
</script>

<style lang="scss" scoped>
    .search_box {
        width: 1190px;
        display: flex;
        margin-top: 15px;
    }
    .search_ipt {
        flex: 1;
        margin: 0 20px;
    }
    img {
        width: 190px;
        height: 120px;
    }
</style>