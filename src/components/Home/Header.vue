<template>
    <div class='header' v-show="flag">
        <div class="head">
            <img src='https://img20.360buyimg.com/babel/jfs/t1/220435/5/905/54201/616e2ad4E7c9339df/f0dbcb60acbb6243.png.webp'/>
            <p class="el-icon-close" @click="onClose(false)"></p></div>
    </div>
</template>

<script>
    export default {
        name: 'Header',
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
    .header {
        width: 100%;
        height: 80px;
        background: rgb(178, 78, 245);
        display: flex;
        justify-content: center;
        .head {
            width: 1190px;
            position: relative;
            img {
                width: 100%;
            }
            p {
                cursor: pointer;
                position: absolute;
                top: 5px;
                right: 0;
                background: #2d2d2d;
                opacity: .3;
                width: 20px;
                height: 20px;
                text-align: center;
                &::before {
                    color: #fff;
                    margin-top: 3px;
                    font-size: 15px;
                    line-height: 20px;
                }
            }
        }
    }
    
</style>