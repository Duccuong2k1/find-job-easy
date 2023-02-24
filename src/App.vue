<template>
  <HeaderNav />
  <div class="min-h-screen">
    <router-view />
  </div>
  <FooterDefault />
</template>
<script lang="js">
import HeaderNav from "./components/header/HeaderNav.vue";
import FooterDefault from "./components/footer/FooterDefault.vue";

export default {
  components: {
    HeaderNav,
    FooterDefault,
},
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #f0f0f0;
  min-height: 100vh;
}
</style>
