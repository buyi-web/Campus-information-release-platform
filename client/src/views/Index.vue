<template>
  <div class="index">
    <Header />
    <div class="container">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../views/Header.vue'
import Footer from '../views/Footer.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="scss" scoped>
.container{
  width: 1170px;
  margin: 0px auto;
  padding: 40px 0;
  min-height: 500px;
}
</style>

