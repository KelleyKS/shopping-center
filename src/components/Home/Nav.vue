<template>
    <div class='nav'>
        <div class="nav_content">
            <p>地区</p>
            <ul>
                <li>你好，请登录</li>
                <li>免费注册</li>
                <li>我的订单</li>
                <li>我的</li>
                <li>会员</li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .nav {
        width: 100%;
        height: 30px;
        border-bottom: 1px solid #ddd;
        background-color: #e3e4e5;
        color: #999;
        display: flex;
        justify-content: center;
        font-size: 12px;
        .nav_content {
            width: 1190px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        ul {
            display: flex;
        }
        li {
            position: relative;
            cursor: pointer;
            &:not(:last-child) {
                &::after {
                    width: 1px;
                    height: 10px;
                    background-color: #ccc;
                    content: '';
                    position: absolute;
                    right: 0;
                    top: 4px;
                }
            }
            padding: 0 10px;
            &:hover {
                color: #f10215;
            }
        }
    }
</style>

<script>
    export default {
        name: 'Nav'
    }
</script>