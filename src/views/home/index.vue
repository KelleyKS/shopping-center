<template>
  <div class="dashboard-container">
    <Header />
    <Nav />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '../../components/Home/Header'
import Nav from '../../components/Home/Nav'

export default {
  name: 'Dashboard',
  components: {
    Header,
    Nav
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-itmes: center;
}
</style>
