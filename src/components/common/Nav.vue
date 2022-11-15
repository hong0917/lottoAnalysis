<template>
  <div>
    <b-navbar toggleable type="dark" variant="dark">
    <b-navbar-brand href="#">
      <img src="https://placekitten.com/g/30/30" alt="Kitten">
      NavBar
    </b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Link 1</b-nav-item>
        <b-nav-item href="#">Link 2</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  methods: {
  }
}
</script>

<style scoped>
 .navbar.navbar-dark.bg-dark{
    background-color: #E38B29!important;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
 }
 .navbar{
  width: 80% !important;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
 }
 .navbar-toggler{
  color: white !important;
 }
</style>
