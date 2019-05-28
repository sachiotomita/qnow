<template>
  <header>
    <nav>
      <router-link to="/" class="site-logo">Qnow</router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SharedHeader extends Vue {
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  box-shadow: 2px 2px 3px #ccc;
  nav {
    position: relative;
    width: 800px;
    margin: 0 auto;
    .site-logo {
      position: absolute;
      top: 8px;
      left: 10px;
      font-size: 25px;
      color: #2196F3;

    }
  }
}
</style>
