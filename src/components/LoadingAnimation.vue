<template>
<div id="loading"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
export default class LoadingAnimation extends Vue {}
</script>

<style lang="scss" scoped>
#loading {
  width: 60px;
  height: 60px;
  margin: 0 auto;
  border-top: 6px solid #2196F3;
  border-right: 6px solid #2196F3;
  border-bottom: 6px solid #2196F3;
  border-left: 6px solid transparent;
  border-radius: 50%;
  animation: loading 1s linear infinite;
}
@keyframes loading {
  0% {}
  50% { opacity: 0.6; }
  100% {
    transform: rotate(360deg);
    opacity: 0.3;
  }
}
</style>
