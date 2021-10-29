<template>
    <div class='nav'>
        <div class="nav_content">
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
        .nav_content {
            width: 1190px;
        }
        li {
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