<template>
  <div id='app'>
    <router-view />
  </div>

</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
* {
  font-weight: normal;
  font-family: "Helvetica Neue",Arial,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","黑体",sans-serif;
}
html,
body,
p,
dl,
dd,
ul,
ol,
li {
  margin: 0;
  padding: 0;
  font-weight: normal;
  box-sizing: content-box;
}
ul,
ol {
  list-style: none;
}
html,
body {
  height: 100%;
}
a {
  color: #619bf2;
  cursor: pointer;
}
#app {
  height: 100%;
  width: 100%;
  min-width: 1190px;
}
</style>
