<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    Nav: () => import('@/components/common/Nav.vue'),
    Footer: () => import('@/components/common/Footer.vue')
  }
}
</script>

<style>
</style>
