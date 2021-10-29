<template>
  <div class="main_container">
    <Header />
    <Nav/>
    <Search/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '../../components/Home/Header'
import Nav from '../../components/Home/Nav'
import Search from '../../components/Home/Search'

export default {
  name: 'Dashboard',
  components: {
    Header,
    Nav,
    Search
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
    align-items: center;
  }
  .main_container {
    display: flex;
      flex-direction: column;
      align-items: center;
  }
</style>
