<template>
  <header>
    <nav>
      <div class="site-logo">Qnow</div>
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
    width: 800px;
    margin: 0 auto;
    .site-logo {
      font-size: 25px;
      color: #2196F3;

    }
  }
}
</style>
