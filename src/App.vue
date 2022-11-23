<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
    <Footer></Footer>
    <Modal></Modal>
  </div>
</template>

<script>
import Modal from '@/components/common/Modal'

export default {
  name: 'App',
  components: {
    Nav: () => import('@/components/common/Nav.vue'),
    Footer: () => import('@/components/common/Footer.vue'),
    Modal
  }
}
</script>

<style>
.app{
  background-color: #FDEEDC !important;
}
</style>
